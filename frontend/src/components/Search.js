import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Search() {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const searchHandler = () => {
    if (keyword.trim()) {
      navigate("/search?keyword=" + keyword);
    }
  };

  return (
    <div className="input-group search-box">

      {/* INPUT */}
      <input
        type="text"
        id="search_field"
        className="form-control"
        placeholder="Search products..."
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") searchHandler();
        }}
      />

      {/* BUTTON */}
      <div className="input-group-append">
        <button
          onClick={searchHandler}
          id="search_btn"
          className="btn"
        >
          <i className="fa fa-search" />
        </button>
      </div>

    </div>
  );
}