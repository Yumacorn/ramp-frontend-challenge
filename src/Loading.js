import React from "react";

const Loading = (props) => {
  return (
    <div>{props.isLoading ? <h2>{props.placeholder}</h2> : <h2></h2>}</div>
  );
};

export default Loading;
