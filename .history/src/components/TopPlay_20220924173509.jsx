import React,{ useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from "swiper";

import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";

import 'swiper/css'
import 'swiper/css/free-mode'


const TopPlay = () => {
  return (
    <div></div>
  )
}
  

export default TopPlay;
