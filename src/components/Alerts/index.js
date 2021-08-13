import { Alert } from "react-bootstrap";

const CustomAlert = ({ children, variant }) => {
  return <Alert variant={variant}>{children}</Alert>;
};

export default CustomAlert;
