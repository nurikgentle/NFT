import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../COMPONENTS/HEADER/Header";
import { GetNfts } from "../../REDUX/ACTIONS/nftAction";
import "./MainPage.scss";
import _ from "lodash";
import { Link } from "react-router-dom";
import Pagination from "../../COMPONENTS/Pagination";

const MainPage = () => { 

  // CONTROLLED INPUT 
  const [search, setSearch] = useState("");

  // THE GLOBAL DATA 
  const data = useSelector((state) => state.NftReducer);
  const dispatch = useDispatch();

  // THE LOGIC OF THE PAGINATION 
  const [currentPage, setCurrentPage] = useState(1);
  const [nftsPerPage] = useState(6);

  const lastNftIndex = currentPage * nftsPerPage;
  const firstNftIndex = lastNftIndex - nftsPerPage;
  const currentNft = data?.data?.slice(firstNftIndex, lastNftIndex);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // FETCHING THE DATA 
  const FetchData = () => {
    dispatch(GetNfts());
  };
  useEffect(() => {
    FetchData();
  }, []);

  // DEFAULT STATE OF THE WEBSITE 
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  console.log("DATA", data);

  // FILTERING THE DATA FOR INPUT 
  const filteredData = currentNft?.filter((item) => {
    return search.toLowerCase() === ""
      ? item
      : item.name.toLowerCase().includes(search.toLowerCase());
  });

  // CONDITIONAL RENDERING 
  const ShowData = () => {

    // SUCCESS 
    if (!_.isEmpty(data.data)) {
      return (
        <div className="nfts">
          {filteredData.map((item) => (
            <div
              key={item.id}
              className="nft"
              style={{ backgroundImage: `url(${item.image_url})` }}
            >
              <h1>id: {item.id}</h1>
              <h2>Name: {item.name}</h2>
              <Link
                to={`/nftPage/${item.asset_contract.address}/${item.token_id}`}
              >
                <button>Подробнее</button>
              </Link>
            </div>
          ))}
        </div>
      );
    }

    // LOADING 
    if (data.loading) {
      return <h1>Loading</h1>;
    }

    // ERROR 
    if (data.errorMsg !== "") {
      return <h1>{data.errorMsg}</h1>;
    }

    // BIG ERROR 
    return <p>БОЛЬШАЯ ОШИБКА</p>;
  };

  return (
    <div className="mainpage">
      <Header setSearch={setSearch} />
      {ShowData()}
      <Pagination
        nftsPerPage={nftsPerPage}
        totalNfts={data?.data?.length}
        paginate={paginate}
      />
    </div>
  );
};

export default MainPage;
