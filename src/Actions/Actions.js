import React from "react";

const Actions = (data) => {
  return {
    type: "FETCH_REQUEST",
    payload: data,
  };
};

export { Actions };
