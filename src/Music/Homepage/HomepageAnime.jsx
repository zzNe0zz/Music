import React  from 'react'
import Header from './Header'
import "./HomePage.css"
import Menu from './Menu'
import Conten from './Conten'
import Footer from './Footer'
import Context from '../../API/ContexCreat'
import data from "../../Data/Data"
import { useState } from 'react'
function HomepageAnime() {
  const[song,setSong]=useState("")
  const[dataSong , setDataSong] = useState()
  function getSong (value){
    setSong(value);
    let dataclone = data.filter(function(value){
      return value.name === value
    })
      document.querySelector(".footer-homePage").classList.add("show")
  setDataSong(dataclone)
  }

  return (
    <Context.Provider value={data}>
    <div className='HomepageAnime'>
        <Header></Header>
       <div className='homePage-body'>
        <Menu></Menu>
        <Conten getSong={getSong} ></Conten>
       </div>
       <div className='footer-homePage'>
       <Footer song = {song} dataSong = {dataSong}></Footer>
       </div>
    </div>
    </Context.Provider>
  )
}

export default HomepageAnime