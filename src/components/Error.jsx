import { Fragment } from "react";

const Error = ({ mensaje }) => {
  return (
    <Fragment>
      <p> {mensaje} </p>
    </Fragment>
  );
};

export default Error;
