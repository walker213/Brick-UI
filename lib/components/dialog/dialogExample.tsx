import React, { useState } from "react";
import { Dialog } from "../../index";

const IconExample: React.FunctionComponent = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          // setIsVisible(!isVisible);
          Dialog.alert('hi')
        }}
      >
        open
      </button>
      <Dialog
        visible={isVisible}
        onOk={()=>{}}
        onCancel={()=>{setIsVisible(false)}}
      >
        hihi
      </Dialog>
    </div>
  );
};

export default IconExample;
