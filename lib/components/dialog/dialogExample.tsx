import React, { useState } from "react";
import { Dialog, Button } from "../../index";

const IconExample: React.FunctionComponent = () => {
  const [isVisible, setIsVisible] = useState(false);

  function info() {
    Dialog.info({ title: "Info dialog", content: "hi" });
  }
  function success() {
    Dialog.success({ title: "Success dialog", content: "hi" });
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
      <Button
        onClick={() => {
          setIsVisible(!isVisible);
        }}
      >
        普通dialog
      </Button>
      <Dialog
        visible={isVisible}
        onOk={() => {}}
        onCancel={() => {
          setIsVisible(false);
        }}
      >
        hihi
      </Dialog>

      <Button onClick={info}>info</Button>
      <Button onClick={success}>success</Button>
      <Button onClick={error}>error</Button>
      <Button onClick={warning}>warning</Button>
      <Button onClick={confirm}>confirm</Button>
    </div>
  );
};

export default IconExample;
