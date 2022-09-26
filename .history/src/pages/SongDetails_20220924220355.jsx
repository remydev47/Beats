import React from 'react';
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch} from 'react-redux'; 
import {DetailsHeader, Error, Loader, RelatedSongs } from '../components';
import { setActiveSong, playPause } from '../redux/features/playerSlice';

const SongDetails = () => {
    const { songid } = useParams();

    console.log(songid)

  return (
    <div>SongDetails</div>
  )
}

export default SongDetails