import React, { Fragment, ReactElement, ReactNode } from "react";
import ReactDom from "react-dom";
import { Icon } from "../../index";
import { addClassPrefixHOF } from "../../utils/classes";
import "./index.scss";

const acp = addClassPrefixHOF("bui-dialog");

interface Props extends React.HTMLAttributes<HTMLElement> {
  visible: boolean;
  onOk: React.MouseEventHandler;
  onCancel: React.MouseEventHandler;
  header?: ReactNode | null; // 如何改成title？
  footer?: Array<ReactElement> | null;
  mask?: boolean;
  maskClosable?: boolean;
}

interface ApiParams {
  title?: ReactNode;
  content?: ReactNode;
  okText?: string;
  cancelText?: string;
  onOk?: React.MouseEventHandler;
  onCancel?: React.MouseEventHandler;
  icon?: ReactNode; // ??待确定
}

interface dialogMethods {
  destroy: () => void;
}

type ComponentWithExtraApi<T> = React.FunctionComponent<T> & {
  info: (params: ApiParams) => dialogMethods;
  success: (params: ApiParams) => dialogMethods;
  error: (params: ApiParams) => dialogMethods;
  warning: (params: ApiParams) => dialogMethods;
  confirm: (params: ApiParams) => dialogMethods;
};

const Dialog: ComponentWithExtraApi<Props> = props => {
  const {
    visible,
    header,
    footer,
    onCancel,
    onOk,
    mask,
    maskClosable,
    children
  } = props;
  const isSimpleDialog = header === null;
  const headerPannel = isSimpleDialog ? null : (
    <Fragment>
      <div className={acp("close")} onClick={onCancel}>
        x
      </div>
      <header className={acp("header")}>{header || "title"}</header>
    </Fragment>
  );

  const footerPannel =
    footer === null ? null : (
      <footer
        className={acp("footer")}
        style={{ borderTopWidth: isSimpleDialog ? "0" : "1px" }}
      >
        {footer ? (
          footer
        ) : (
          <Fragment>
            <button onClick={onOk}>ok</button>
            <button onClick={onCancel}>cancel</button>
          </Fragment>
        )}
      </footer>
    );

  const component = visible ? (
    <Fragment>
      <div
        className={acp("mask")}
        style={{ display: mask ? "block" : "none" }}
        onClick={e => {
          if (maskClosable) {
            onCancel(e);
          }
        }}
      ></div>
      <div className={acp()}>
        {headerPannel}
        <main className={acp("main")}>{children}</main>
        {footerPannel}
      </div>
    </Fragment>
  ) : null;

  return ReactDom.createPortal(component, document.body);
};

Dialog.defaultProps = {
  mask: true,
  maskClosable: true
};

const dialogMaker = (
  params: ApiParams,
  defaultIcon: ReactNode,
  isConfirm: boolean = false
): dialogMethods => {
  const { title, content, onOk, onCancel, okText, cancelText, icon } = params;

  const div = document.createElement("div");
  document.body.append(div);

  const destroy = () => {
    // ReactDom.render(React.cloneElement(component, { visible: false }), div);
    ReactDom.unmountComponentAtNode(div);
    div.remove();
  };
  const handleOkClick: React.MouseEventHandler = e => {
    onOk && onOk(e);
    destroy();
  };
  const handleCancelClick: React.MouseEventHandler = e => {
    onCancel && onCancel(e);
    destroy();
  };

  const footer = isConfirm
    ? [
        <button onClick={handleCancelClick} key="cancel">
          {cancelText || "取消"}
        </button>,
        <button onClick={handleOkClick} key="ok">
          {okText || "确定"}
        </button>
      ]
    : [
        <button onClick={handleOkClick} key="ok">
          {okText || "知道了"}
        </button>
      ];
  const component = (
    <Dialog
      visible={true}
      onCancel={destroy}
      onOk={() => {}}
      footer={footer}
      header={null}
    >
      {icon ? icon : defaultIcon}
      <div>
        {title ? <div className={acp("title")}>{title}</div> : null}
        <div>{content}</div>
      </div>
    </Dialog>
  );

  ReactDom.render(component, div);
  return { destroy };
};

Dialog.info = (params: ApiParams) => {
  return dialogMaker(
    params,
    <Icon name="info-circle" className="bui-icon-info" />
  );
};
Dialog.success = (params: ApiParams) => {
  return dialogMaker(
    params,
    <Icon name="check-circle" className="bui-icon-success" />
  );
};
Dialog.error = (params: ApiParams) => {
  return dialogMaker(
    params,
    <Icon name="close-circle" className="bui-icon-error" />
  );
};
Dialog.warning = (params: ApiParams) => {
  return dialogMaker(
    params,
    <Icon name="warning-circle" className="bui-icon-warning" />
  );
};
Dialog.confirm = (params: ApiParams) => {
  return dialogMaker(
    params,
    <Icon name="question-circle" className="bui-icon-warning" />,
    true
  );
};

export default Dialog;
