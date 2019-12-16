import React from "react";
import { Button } from "../../index";
// import "./iconExample.scss";

const ButtonExample: React.FunctionComponent = () => {
  return (
    <div className="bui-buttonExample">
      <Button icon='search' size='small'>hei</Button>
      <Button icon='search'>hei</Button>
      <Button icon='search' size='large'>hei</Button>
    </div>
  );
};

export default ButtonExample;
