const DefaultState = {
  loading: false,
  data: [],
  errorMsg: "",
};

//REDUCER FOR THE MAINPAGE
const NftReducer = (state = DefaultState, action) => {
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
        data: action.payload.assets,
        errorMsg: "",
      };
    default:
      return state;
  }
};

export default NftReducer;
