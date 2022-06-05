import React from 'react';
import Masonry from 'react-masonry-css';
import Tcheks from '../container/Tcheks';
import Tchek from './/Tchek';

const breakpointObj = {
  default: 4,
  3000: 6,
  2000: 5,
  1200: 3,
  1000: 2,
  500: 1,
}

const MasonryLayout = ({ tcheks }) => {
  return (
    <Masonry className="flex animate-slide-fwd" breakpointCols={breakpointObj}>
      {tcheks?.map((tchek) => <Tchek key={tcheks._id} tchek={tchek} className="w-max" />)}
    </Masonry>
  )
}

export default MasonryLayout