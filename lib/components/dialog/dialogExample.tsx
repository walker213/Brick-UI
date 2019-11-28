import React, { useState } from "react";
import { Dialog } from "../../index";

const IconExample: React.FunctionComponent = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setIsVisible(!isVisible);
        }}
      >
        open
      </button>
      <Dialog visible={isVisible}>hihi</Dialog>
    </div>
  );
};

export default IconExample;
