import React, { useState } from "react";
import { Dialog } from "../../index";

const IconExample: React.FunctionComponent = () => {
  const [isVisible, setIsVisible] = useState(false);

  function info() {
    Dialog.info({ content: "hi" });
  }
  function success() {
    Dialog.success({ content: "hi" });
  } 
  function error() {
    Dialog.error({ content: "hi" });
  } 
  function warning() {
    Dialog.warning({ content: "hi" });
  } 
  function confirm() {
    Dialog.confirm({ content: "hi" });
  } 
  return (
    <div>
      <button
        onClick={() => {
          // setIsVisible(!isVisible);
          Dialog.confirm({ content: "hi" });
        }}
      >
        普通dialog
      </button>
      <Dialog
        visible={isVisible}
        onOk={() => {}}
        onCancel={() => {
          setIsVisible(false);
        }}
      >
        hihi
      </Dialog>

      <button onClick={info}>info</button>
      <button onClick={success}>success</button>
      <button onClick={error}>error</button>
      <button onClick={warning}>warning</button>
      <button onClick={confirm}>confirm</button>
    </div>
  );
};

export default IconExample;
