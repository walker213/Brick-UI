// export { default as Icon } from "./icon/icon";
import React from 'react'
import ReactDom from "react-dom";
import Icon from "./icon/icon";

export const Index = () => {
	return (
    <div>
      <Icon name="wechat" />
    </div>
  );
}

ReactDom.render(<Index />,document.getElementById('root'));