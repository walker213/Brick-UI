import React from "react";
import { Button } from "../../index";
// import "./iconExample.scss";

const ButtonExample: React.FunctionComponent = () => {
  return (
    <div className="bui-iconExample">
      <Button onClick={e=>{console.log(e.target)}} icon='search'>hei</Button>
    </div>
  );
};

export default ButtonExample;
