import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { client } from '../client';
import { feedQuery, searchQuery } from '../utils/data';
import MasonryLayout from './MasonryLayout';
import Spinner from './Spinner';

const Feed = () => {
  const [loading, setLoading] = useState(false);
  const [tchek, setTchek] = useState(null)
  const { kategoriId } = useParams();

  useEffect(() => {
    setLoading(true);

    if(kategoriId) {
      const query = searchQuery(kategoriId);

      client.fetch(query)
        .then((data) => {
          setTchek(data);
          setLoading(false);
        })

    } else {
      client.fetch(feedQuery)
        .then((data) => {
          setTchek(data);
          setLoading(false);
        })
    }
  }, [kategoriId])
  

  if(loading) return <Spinner message="N ap ajoute nouvo bagay pou ou" />
  return (
    <div>{tchek && <MasonryLayout tcheks={tchek} />}</div>
  )
}

export default Feed