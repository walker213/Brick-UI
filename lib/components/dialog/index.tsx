import React, { Fragment, ReactElement } from "react";
import { addClassPrefixHOF } from "../../utils/classes";
import "./index.scss";

const acp = addClassPrefixHOF("bui-dialog");

interface Props extends React.AllHTMLAttributes<HTMLDivElement> {
  visible: boolean;
  footer?: Array<ReactElement> | null;
  onOk: React.MouseEventHandler;
  onCancel: React.MouseEventHandler;
  mask?: boolean;
  maskClosable?: boolean;
}

const Dialog: React.FunctionComponent<Props> = ({
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
	
	return visible ? (
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
        <div className={acp("close")} onClick={onCancel}>x</div>
        <header className={acp("header")}>title</header>
        <main className={acp("main")}>{children}</main>
        {footerPannel}
      </div>
    </Fragment>
  ) : null;
};

Dialog.defaultProps = {
  mask: true,
  maskClosable: true
};

export default Dialog;
