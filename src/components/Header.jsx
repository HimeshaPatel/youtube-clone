import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import ytLogo from "../images/yt-logo.png";
import ytLogoMobile from "../images/yt-logo-mobile.png";

import { SlMenu } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { FiBell } from "react-icons/fi";
import { CgClose } from "react-icons/cg";

import { Context } from "../context/contextAPI";
import Loader from "../shared/loader";

const Header = () => {

  const [searchQuery, setSearchQuery] = useState("");
  const {loading, mobileMenu, setMobileMenu } = useContext(Context);

  const navigate = useNavigate();

  const searchQueryHandler = (event) => {
    if((event.key === "Enter" || event === "searchButton") && searchQuery?.length > 0){
      navigate(`/searchResult/${searchQuery}`)
    }
  }

  const mobileMenuToggler = () => {
    setMobileMenu(!mobileMenu);
  }

  const {pathName} = useLocation();
  const pageName = pathName?.split("/")?.filter(Boolean)?.[0]


  return (
     <div className="sticky top-0 z-10 flex flex-row items-center justify-between h-14 px-4 md:px-5 bg-white dark:bg-black">
      {loading && <Loader />}
      <div className="flex h-5 items-center">
        {pageName !== 'video' && (
          <div className="flex md:hidden md:mr-6 cursor-pointer items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]"
          onClick={mobileMenuToggler}
          >
            {mobileMenu ? (<CgClose className="text-white text-xl" />) : (<SlMenu className="text-white text-xl" />)}

          </div>
        )}
        <Link to="/" className="flex h-5 items-center">
        <img src={ytLogo} alt="Youtube" className="h-full hidden dark:md:block" />
        <img src={ytLogoMobile} alt="Youtube" className="h-full md:hidden" />
        </Link>
        
      </div>
      <div className="group flex items-center">
          <div className="flex h-8 md:ml-10 md:pl-5 border border-[#303030] rounded-l-3xl group-focus-within:border-blue-500 md:group-focus-within:ml-5 md:group-focus-within:pl-0">
            <div className="flex w-10 justify-center items-center hidden group-focus-within:md:flex">
              <IoIosSearch className="text-white text-xl" />
            </div>
            <input
            className="bg-transparent outline-none text-white pr-5 pl-5 md:pl-0 w-44 md:group-focus-within:pl-0 md:w-64 lg:w-[500]"
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyUp={searchQueryHandler}
            value={searchQuery}
            />
          
          </div>
          <button className="w-[40] md:w-[60px] h-8 md:h-8 flex items-center justify-center border border-l-0 border-[#303030] rounded-r-3xl bg-white/[0.1]">
              <IoIosSearch className="text-white text-xl" />
          </button>
        </div>
        <div className="flex items-center">
            <div className="hidden md:flex">
              <div className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
                  <RiVideoAddLine className="text-white text-xl cursor-pointer" />
              </div>
              <div className="flex items-center justify-center ml-2 h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
                  <FiBell className="text-white text-xl cursor-pointer" />
              </div>
              <div className="flex h-8 w-8 overflow-hidden rounded-full md:ml-4">
                  <img src="https://xsgames.co/randomusers/assets/avatars/male/35.jpg" />
              </div>
            </div>
        </div>
      </div>
  )
}

export default Header