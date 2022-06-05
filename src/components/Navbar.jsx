import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoMdAdd, IoMdSearch } from 'react-icons/io';

const Navbar = ({ rechechTem, setRechechTem, user }) => {
  const navigate = useNavigate();

  if(!user) return null;

  return (
    <div className="flex gap-2 md:gap-5 w-full mt-5 pb-7">
      <div className="flex justify-start items-center w-full px-2 rounded-md bg-white border-none outline-none focus-within:shadow-sm">
        <IoMdSearch fontSize={21} className="ml-1" />
        <input 
          type="text"
          onChange={(e) => setRechechTem(e.target.value)}
          placeholder="Rechèch"
          value={rechechTem}
          onFocus={() => navigate('/rechech')}
          className="p-2 w-full bg-white outline-none"
        />
      </div>
      <div className="flex gap-3">
        <Link to={`user-profile/${user._id}`} className="hidden md:block">
          <img src={user.imaj} alt="imaj-itilizate" className="w-20 h-18 rounded-lg" />        
        </Link>
        <Link to='kreye-tchek' className="hidden md:block">
          <IoMdAdd fontSize={21} className="bg-black text-white rounded-lg w-12 h-12 md:w-14 md:h-12 flex justify-center items-center" />        
        </Link>
      </div>
    </div>
  )
}

export default Navbar