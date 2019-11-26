import React, { Fragment } from "react";
import { addClassPrefixHOF } from "../../utils/classes";
import "./index.scss";

const acp = addClassPrefixHOF("bui-dialog");

interface Props extends React.AllHTMLAttributes<HTMLDivElement> {
	visible: boolean
}

const Dialog: React.FunctionComponent<Props> = ({visible,children}) => {
	return visible ? (
    <Fragment>
      <div className={acp('mask')}></div>
			<div className={acp()}>
				<div className={acp('close')}>x</div>
				<header className={acp('header')}>title</header>
        <main className={acp('main')}>{children}</main>
				<footer className={acp('footer')}>
					<button>ok</button>
					<button>cancel</button>
				</footer>
      </div>
    </Fragment>
  ) : null;
};

export default Dialog;
