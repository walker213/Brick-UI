import React, { Fragment, ReactElement } from "react";
import ReactDom from "react-dom";
import { addClassPrefixHOF } from "../../utils/classes";
import "./index.scss";

const acp = addClassPrefixHOF("bui-dialog");

interface Props extends React.AllHTMLAttributes<HTMLDivElement> {
  visible: boolean;
  footer?: Array<ReactElement> | null;
  onOk?: React.MouseEventHandler;
  onCancel?: React.MouseEventHandler;
  mask?: boolean;
  maskClosable?: boolean;
}

type Fhp<T> = React.FunctionComponent<T> & {
	alert: (content:string)=>void
}

const Dialog: Fhp<Props> = ({
  visible,
  footer,
  onCancel,
  onOk,
  mask,
  maskClosable,
  children
}) => {
  const footerPannel =
    footer === null ? null : (
      <footer className={acp("footer")}>
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
        <div className={acp("close")} onClick={onCancel}>
          x
        </div>
        <header className={acp("header")}>title</header>
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

Dialog.alert = (content: string) => {
  const closeHandler = () => {
		ReactDom.render(React.cloneElement(component, { visible: false }), div);
		ReactDom.unmountComponentAtNode(div);
		div.remove();
  };
  const component = (
    <Dialog visible={true} onCancel={closeHandler}>
      {content}
    </Dialog>
  );
  const div = document.createElement("div");
  document.body.append(div);
  ReactDom.render(component, div);
};

export default Dialog;
