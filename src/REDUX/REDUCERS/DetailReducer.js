const DefaultState = {
  loading: false,
  data: {},
  errorMsg: "",
};

// REDUCER FOR THE DETAIL PAGE 
const DetailReducer = (state = DefaultState, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        loading: true,
        errorMsg: "",
      };
    case "FAILED":
      return {
        ...state,
        loading: false,
        errorMsg: "не удалось получить данные",
      };
    case "SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
        errorMsg: "",
      };
    default:
      return state;
  }
};

export default DetailReducer;
