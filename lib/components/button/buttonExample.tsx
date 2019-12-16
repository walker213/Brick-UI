import React from "react";
import { Button } from "../../index";
import "./buttonExample.scss";

const ButtonExample: React.FunctionComponent = () => {
  return (
    <div className="bui-buttonExample">
      <section>
        <Button icon='search' size='small'>small</Button>
        <Button icon='search'>default</Button>
        <Button icon='search' size='large'>large</Button>
      </section>
      <section>
        <Button icon='search'>default</Button>
        <Button icon='search' type='primary'>primary</Button>
        <Button icon='search' type='danger'>danger</Button>
        <Button icon='search' type='dashed'>dashed</Button>
      </section>
      <section>
        <Button icon='search' disabled>disabled</Button>
        <Button icon='search' type='dashed' disabled>dashed-disabled</Button>
      </section>
    </div>
  );
};

export default ButtonExample;
