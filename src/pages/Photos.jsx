import React from "react";
import "./Photos.css";
import NavBar from "../components/NavBar";
import Pagination from "../components/Pagination";
import PageLabel from "../components/PageLabel";
import PageMenu from "../components/PageMenu";
import SearchBox from "../components/SearchBox";
import PhotoAll from "../components/PhotoAll";
// import { BrowserRouter, Route, Routes } from "react-router-dom";

function Photos() {
  return (
    <div>
      <NavBar />
      <div className="section">
        <div className="page__nav">
          <Pagination
            vector={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="37"
                viewBox="0 0 36 37"
                fill="none"
              >
                <path
                  d="M25.5003 17.0003H14.1153L19.0653 12.0653C19.3478 11.7828 19.5065 11.3997 19.5065 11.0003C19.5065 10.6008 19.3478 10.2177 19.0653 9.93528C18.7829 9.65282 18.3998 9.49414 18.0003 9.49414C17.6009 9.49414 17.2178 9.65282 16.9353 9.93528L9.43533 17.4353C9.29877 17.5779 9.19172 17.7462 9.12033 17.9303C8.97031 18.2955 8.97031 18.7051 9.12033 19.0703C9.19172 19.2544 9.29877 19.4226 9.43533 19.5653L16.9353 27.0653C17.0748 27.2059 17.2407 27.3175 17.4235 27.3936C17.6063 27.4698 17.8023 27.509 18.0003 27.509C18.1984 27.509 18.3944 27.4698 18.5772 27.3936C18.76 27.3175 18.9259 27.2059 19.0653 27.0653C19.2059 26.9258 19.3175 26.7599 19.3937 26.5771C19.4698 26.3944 19.509 26.1983 19.509 26.0003C19.509 25.8023 19.4698 25.6062 19.3937 25.4234C19.3175 25.2406 19.2059 25.0747 19.0653 24.9353L14.1153 20.0003H25.5003C25.8982 20.0003 26.2797 19.8422 26.561 19.5609C26.8423 19.2796 27.0003 18.8981 27.0003 18.5003C27.0003 18.1025 26.8423 17.7209 26.561 17.4396C26.2797 17.1583 25.8982 17.0003 25.5003 17.0003Z"
                  fill="#E5E7EB"
                />
              </svg>
            }
            pageLabel="Back"
          />
          <PageLabel pageTitle="Photos" />
        </div>

        <div className="photos__navigation">
          <div className="photos__nav--menu">
            <PageMenu menu='All' pageUrl='all' />
            <PageMenu menu='Album' className='album' />
          </div>

          <SearchBox />
        </div>
        <PhotoAll />
      </div>
    </div>
  );
}

export default Photos;
