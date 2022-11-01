import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetNft } from "../../REDUX/ACTIONS/detail";
import { Link, useParams } from "react-router-dom";
import "./NftPage.scss";
import { CircularProgress } from "@mui/material";

const NftPage = () => {

  // PARAMS
  const { address, token } = useParams();

  // THE DATA OF FOR THIS PAGE 
  const detail = useSelector((state) => state.DetailReducer);
  const dispatch = useDispatch();

  // FETCHING THE DATA 
  const FetchData = () => {
    dispatch(GetNft(address, token));
  };
  
  useEffect(() => {
    FetchData();
  }, []);

  console.log("DETAIL", detail);

  return (
    <div className="page">
      {detail.loading ? (
        <CircularProgress
          sx={{ marginTop: "100px" }}
          color="inherit"
          size={300}
        />
      ) : (
        <div
          className="nft-card"
          style={{
            backgroundImage: `url(${detail?.data?.asset_contract?.image_url})`,
          }}
        >
          <h1 className="more">ПОДРОБНО</h1>
          <div className="main-info">
            <div className="inside-main-info">
              <div>
                <h2>ИМЯ:</h2>
                <h1>{detail?.data?.collection?.payment_tokens[1].name}</h1>
              </div>

              <div>
                <h2>НИК:</h2>
                <h1>{detail?.data?.name}</h1>
              </div>

              <div>
                <h2>АВАТАРКА СОЗДАТЕЛЯ:</h2>
                <img src={detail?.data?.creator?.profile_img_url} alt="" />
              </div>

              <div className="price">
                <h2>ЦЕНА:</h2>
                <h1>
                  {detail?.data?.collection?.payment_tokens[1].usd_price}{" "}
                  долларов
                </h1>
              </div>
            </div>

            <div>
              <h2>ФОТО:</h2>
              <img className="other" src={detail?.data?.image_url} alt="" />

              <div className="name">
                <h2>ЕГО ИМЯ:</h2>
                <h1>
                  {detail?.data?.creator?.user?.username === null
                    ? "ОТСУТСТВУЕТ"
                    : detail?.data?.creator?.user?.username}
                </h1>
              </div>

              <div className="date">
                <h2>ДАТА:</h2>
                <h1 classname="time">
                  {detail?.data?.asset_contract?.created_date}
                </h1>
              </div>
            </div>
          </div>
          <h2 className="address">ADDRESS:</h2>
          <h1 className="address">{detail?.data?.asset_contract?.address}</h1>
          <h2>ТИП:</h2>
          <h1>{detail?.data?.asset_contract?.asset_contract_type}</h1>
          <h2>ДРУГАЯ КАРТИНА:</h2>
          <img
            className="other"
            src={detail?.data?.asset_contract?.image_url}
            alt=""
          />
          <h2>БАННЕР:</h2>
          <img
            className="other"
            src={
              detail?.data?.collection?.banner_image_url === null
                ? "ОТСУТСВУЕТ"
                : detail?.data?.collection?.banner_image_url
            }
            alt=""
          />
          <h2>ОПИСАНИЕ:</h2>
          <h1>
            {detail?.data?.description === null
              ? "Отсутствует"
              : detail?.data?.description}
          </h1>
          <div style={{ textAlign: "center" }}>
            <Link className="back" to="/">
              ВЕРНУТЬСЯ НА ГЛАВНУЮ СТРАНИЦУ
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default NftPage;
