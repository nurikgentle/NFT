import axios from "axios";

// THIS IS THE DATA FOR THE DETAIL PAGE
export const GetNft = (address, token) => async (dispatch) => {
  try {
    dispatch({
      type: "LOADING",
    });
    const response = await axios.get(
      `https://api.opensea.io/api/v1/asset/${address}/${token}?format=json`
    );
    dispatch({
      type: "SUCCESS",
      payload: response.data,
    });
  } catch (e) {
    dispatch({
      type: "FAILED",
    });
  }
};
