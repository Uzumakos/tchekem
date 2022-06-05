import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { RiHomeFill } from 'react-icons/ri';
import { IoIosArrowForward } from 'react-icons/io';
import logo from '../assets/Tchekem Transparent.png';

const isNotActiveStyle = 'flex items-center px-5 gap-3 text-gray-500 hover: text-black transition-all duation-200 ease-in-out capitalize';
const isActiveStyle = 'flex items-center px-5 gap-3 font-extrabold border-r-2 border-black  transition-all duation-200 ease-in-out capitalize';

const kategoris = [
  {name: 'Manje'},
  {name: 'Fotografi'},
  {name: 'Fondekran'},
  {name: 'Gaming'},
  {name: 'Coding'},
  {name: 'Lot yo'},
]

const Sidebar = ({ user, closeToggle }) => {
  const handleCloseSidebar = () => {
    if(closeToggle) closeToggle(false);
  }
  return (
    <div className="flex flex-col justify-between bg-white h-full overflow-y-scroll min-w-210 hide-scrollbar">
      <div className="flex flex-col">
        <Link
          to="/"
          className="flex px-5 gap-2 my-6 pt-1 w-190 items-center"
          onClick={handleCloseSidebar}
        >
          <img src={logo} alt="logo" className="w-full" />
        </Link>
        <div className="flex flex-col gap-5">
          <NavLink
            to="/"
            className={({ isActive}) => isActive ? isActiveStyle : isNotActiveStyle}
            onClick={handleCloseSidebar}
          >
            <RiHomeFill />
            Akèy
          </NavLink>
          <h3 className="mt-2 px-5 text-base 2xl:text-xl">Dekouvri Kategori yo</h3>
          {kategoris.slice(0, kategoris.length - 1).map ((kategori) => (
              <NavLink
                to={`/kategori/${kategori.name}`}
                className={({ isActive}) => isActive ? isActiveStyle : isNotActiveStyle}
                onClick={handleCloseSidebar}
                key={kategori.name}
              >
                {kategori.name}
              </NavLink>
            ))}
        </div>
      </div>
      {user && (
        <Link
         to={`user-profile/${user._id}`}
         className="flex my-5 mb-3 gap-2 p-2 items-center bg-white shadow-lg mx-3"
         onClick={handleCloseSidebar}
        >
         <img src={user.imaj} className="w-10 h-10 rounded-full" alt="user-profile" />
         <p>{user.nonItilizate}</p>
        </Link>
      )}
    </div>
  )
}

export default Sidebar