import React from "react";

export default function Alert(props) {
  return (
    props.alert && (
      <div
        className="alert text-center fs-5 text-changer alert-info fade show"
        role="alert"
      >
        <strong> {props.alert.msg} </strong>
      </div>
    )
  );
}
