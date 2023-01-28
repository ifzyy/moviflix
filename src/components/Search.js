import React from "react";
import { BsFillStarFill } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { useNavigate } from "react-router";
import "../styles/Movie.css";
import { toast } from "react-hot-toast";

const Search = (props) => {
  const { name, rating, image, search } = props;

  const navigate = useNavigate();
  const handleClickList = () => {
    toast.success("added to watchlist");
  };
  const handleClick = () => {
    navigate(`/${name}`);
  };
  if (search.length > 0) {
    return (
      <div>
        <>
          <div
            className="card-container"
            style={{ background: `url(${image})` }}
          >
            <div className="card">
              <div className="card-content">
                <h3 className="card-title">{name}</h3>
                <div className="card-count">
                  <div className="likes-count">
                    <span>
                      {" "}
                      <AiOutlineHeart />
                    </span>{" "}
                    {Math.floor(Math.random() * 100)}
                  </div>
                  <div className="rating">
                    <BsFillStarFill />
                    {rating}
                  </div>
                </div>
              </div>
              <div className="card-buttons">
                <button
                  onClick={handleClickList}
                  type="button"
                  className="link"
                >
                  Save
                </button>
                <button onClick={handleClick} type="button" className="link">
                  {" "}
                  info
                </button>
              </div>
            </div>
          </div>
        </>
      </div>
    );
  } else {
    return (
    
        <div style={{ display: "none" }}>
          <div
            className="card-container"
            style={{ background: `url(${image})`}}
          >
            <div className="card">
              <div className="card-content">
                <h3 className="card-title">{name}</h3>
                <div className="card-count">
                  <div className="likes-count">
                    <span>
                      {" "}
                      <AiOutlineHeart />
                    </span>{" "}
                    {Math.floor(Math.random() * 100)}
                  </div>
                  <div className="rating">
                    <BsFillStarFill />
                    {rating}
                  </div>
                </div>
              </div>
              <div className="card-buttons">
                <button
                  onClick={handleClickList}
                  type="button"
                  className="link"
                >
                  Save
                </button>
                <button onClick={handleClick} type="button" className="link">
                  {" "}
                  info
                </button>
              </div>
            </div>
          </div>
        </div>
    );
  }
};

export default Search;