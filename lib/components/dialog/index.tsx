import React,{Fragment} from "react";
import "./index.scss";

interface Props extends React.AllHTMLAttributes<HTMLDivElement> {
	visible: boolean
}

const Dialog: React.FunctionComponent<Props> = ({visible,children}) => {
	return visible ? (
    <Fragment>
      <div className="bui-dialog-mask"></div>
			<div className="bui-dialog">
				<div className="bui-dialog-close">x</div>
				<header className="bui-dialog-header">title</header>
        <main className="bui-dialog-main">{children}</main>
				<footer className="bui-dialog-footer">
					<button>ok</button>
					<button>cancel</button>
				</footer>
      </div>
    </Fragment>
  ) : null;
};

export default Dialog;
