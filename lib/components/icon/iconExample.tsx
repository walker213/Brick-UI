import React from "react";
import { Icon } from "../../index";
import './iconExample.scss';

const { svgNames } = require("./importIcon.js");

const IconExample: React.FunctionComponent = () => {
  return (
    <div className="bui-iconExample">
      {svgNames.map((name: string) => (
        <div key={name}>
          <Icon name={name}></Icon>
          <span>{name}</span>
        </div>
      ))}
      {/* <Icon name="swap"></Icon> */}
    </div>
  );
};

export default IconExample;
