import axios from "axios";

// THIS IS THE DATA FOR THE MAINPAGE PAGE 
export const GetNfts = () => async (dispatch) => {
  try {
    dispatch({
      type: "LOADING",
    });
    const res = await axios.get(
      "https://api.opensea.io/api/v1/assets?format=json"
    );
    dispatch({
      type: "SUCCESS",
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: "FAILED",
    });
  }
};
