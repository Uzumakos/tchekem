import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Navbar, Feed, TchekDetay, KreyeTchek, Rechech } from '../components';

const Tcheks = ({ user}) => {
  const [rechechTem, setRechechTem] = useState('')
  return (
    <div className="px-2 md:px-5">
      <div className="bg-gray-50">
        <Navbar rechechTem={rechechTem} setRechechTem={setRechechTem} user={user} />
      </div>
      <div className="h-full">
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/kategori/:kategoriId" element={<Feed />} />
          <Route path="/tchek-detay/:tchekId" element={<TchekDetay user={user} />} />
          <Route path="/kreye-tchek" element={<KreyeTchek user={user} />} />
          <Route path="/Rechech" element={<Rechech rechechTem={rechechTem} setRechechTem={setRechechTem} />} />
        </Routes>
      </div>
    </div>
  )
}

export default Tcheks