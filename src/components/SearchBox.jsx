import React from "react";
import "./SearchBox.css";

function SearchBox() {
  return (
    <div className="searchbox">
      <input type="text" name="search" id="search" className="search__input" />
      <div className="search__icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M18.8194 14.4331C20.0664 12.8255 20.6541 10.8031 20.4629 8.77757C20.2717 6.752 19.3161 4.87533 17.7904 3.52936C16.2646 2.18339 14.2834 1.46922 12.2498 1.53215C10.2162 1.59508 8.283 2.43037 6.84341 3.8681C5.40256 5.30683 4.56454 7.24082 4.5001 9.27597C4.43567 11.3111 5.14968 13.2942 6.49663 14.8212C7.84359 16.3482 9.7221 17.3041 11.7494 17.4942C13.7767 17.6842 15.8001 17.0941 17.4074 15.8441L17.4504 15.8891L21.6924 20.1321C21.7853 20.225 21.8956 20.2987 22.017 20.349C22.1384 20.3993 22.2685 20.4252 22.3999 20.4252C22.5313 20.4252 22.6614 20.3993 22.7828 20.349C22.9042 20.2987 23.0145 20.225 23.1074 20.1321C23.2003 20.0392 23.274 19.9289 23.3243 19.8075C23.3746 19.6861 23.4005 19.556 23.4005 19.4246C23.4005 19.2932 23.3746 19.1631 23.3243 19.0417C23.274 18.9203 23.2003 18.81 23.1074 18.7171L18.8644 14.4751C18.8498 14.4607 18.8348 14.4467 18.8194 14.4331ZM16.7434 5.2831C17.308 5.83858 17.757 6.50035 18.0646 7.23024C18.3722 7.96013 18.5322 8.74369 18.5354 9.53572C18.5386 10.3278 18.385 11.1126 18.0834 11.845C17.7818 12.5773 17.3382 13.2427 16.7781 13.8028C16.218 14.3629 15.5526 14.8065 14.8203 15.1081C14.0879 15.4097 13.3031 15.5633 12.511 15.5601C11.719 15.5569 10.9354 15.3969 10.2055 15.0893C9.47565 14.7817 8.81389 14.3327 8.25841 13.7681C7.14832 12.6398 6.52906 11.1185 6.53551 9.53572C6.54195 7.9529 7.17358 6.43675 8.29282 5.31751C9.41205 4.19828 10.9282 3.56665 12.511 3.5602C14.0938 3.55376 15.6151 4.17302 16.7434 5.2831Z"
            fill="#E5E7EB"
          />
        </svg>
      </div>
    </div>
  );
}

export default SearchBox;