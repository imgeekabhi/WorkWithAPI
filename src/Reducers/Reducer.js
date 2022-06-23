const iState = {
  user: [],
  loader: true,
};

const Reducer = (state = iState, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return {
        user: action.payload,
        loader: false,
      };

    default:
      return state;
  }
};

export default Reducer;
