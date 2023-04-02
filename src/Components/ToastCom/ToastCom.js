import { useState } from "react";
import Toast from "react-bootstrap/Toast";

function ToastCom({ message }) {
  const [show, setShow] = useState(true);
  const closeHandler = () => setShow(false);
  return (
    <Toast bg="danger" show={show} onClose={closeHandler}>
      <Toast.Header>
        <strong className="me-auto">Somthing is Wrong!!!</strong>
      </Toast.Header>
      <Toast.Body>{message}</Toast.Body>
    </Toast>
  );
}

export default ToastCom;
