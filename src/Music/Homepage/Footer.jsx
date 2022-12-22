import React,{useContext} from 'react'
import Context from '../../API/ContexCreat'
import {StepForwardOutlined,StepBackwardOutlined ,PlayCircleFilled,PauseCircleFilled,SoundFilled,RollbackOutlined } from "@ant-design/icons"
import { useState,useEffect } from 'react';
function Footer(props) {
  const data = useContext(Context);
  const [mainData,setMainData] = useState([])

  let count = 0
    function getData(){
      let dataClone =  data.filter(function(value){
        return value.name === props.song
      })
      setMainData(dataClone)
    } 
    function setTime (){

      const auDio = document.querySelector("audio")
   auDio.ontimeupdate = function(){
    const auDio = document.querySelector("audio")
    let timePlay = auDio.currentTime 
    let time =  auDio.duration ;
    let setTime =( timePlay / time) * 100
    document.querySelector(".range-time").value =  setTime
 if(timePlay === time){
  nextSong()
 }
  }

}
function changeTimePlaySong (){
  //tua
  let timeRender = document.querySelector(".range-time").value
  const auDio = document.querySelector("audio")
 let  seeTime = ( parseInt(timeRender) * auDio.duration)/100
auDio.currentTime = seeTime
}
function playSong (){
 //play
  let auDio= document.querySelector("audio");
  auDio.play()
  setTime ()
}

function changeVolum (){
  //am luong
  let volum = document.querySelector("#volum").value
  const auDio = document.querySelector("audio")
  auDio.volume = volum/100 

}
function muTe (){
  //tat am
  const auDio = document.querySelector("audio")
  count++
  if(count%2){
    auDio.muted = false
  }
  else {
    auDio.muted = true
  }
}

function nextSong (){
  //chuyen bai
let index = "" 
 let id = ""
 let cloneData = mainData
   data.map(function(value,index){
  if( value.name === cloneData[0].name){
    id = index
  } 
  return id
  })
    index = id +1
   if(index < data.length){
     setMainData([data[index]])
   } 
   else{
    setMainData([data[0]])
   }

}

function pretSong(){
    //chuyen bai
  let index = "" 
 let id = ""
 let cloneData = mainData
   data.map(function(value,index){
  if( value.name === cloneData[0].name){
    id = index
  } 
  return id
  })
    index = id -1
   if(index < 0){

     setMainData([data[data.length-1]])
   } 
   else{
    setMainData([data[index]])
   }
}
useEffect(() => {
  getData()
}, [props.song])

  return (
  <>
        {
          mainData.map(function(value,index){
            return(
              <div className='footer-audio' key={value.id}>
                        <div className='footer-audio-left'>
                          <div className='footer-audio-left-img' >
                            <img src={value.thum?value.thum:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZhfHmthHFdFNtRUxcYTCBF6RgAadUQwvxlQ&usqp=CAU"} alt="" />
                          </div>
                            <p>{value.name}</p>
                            
                        </div>
                        <div className='footer-audio-bw' >
                                <div className='icon-footer'>
                                <p>
                                <span onClick={pretSong}><StepBackwardOutlined /></span> <span onClick={playSong} className="play"><PlayCircleFilled /></span> <span onClick={()=>{document.querySelector(".audio").pause()}}><PauseCircleFilled /></span>  <span onClick={nextSong}> <StepForwardOutlined /></span>
                                 <span onClick={()=>{ document.querySelector(".audio").loop=true}}><RollbackOutlined /></span>
                                </p>
                                </div>
                               <div className='footer-audio-control'>
                                     <audio src={value.src}  className='audio' ></audio>
                                      <div style={{marginTop:"5px"}} >
                                        <input type="range"  className='range-time' defaultValue={0} onChange={changeTimePlaySong}/>
                                         
                                      </div>
                               </div>
                             
                        </div>
                        <div className="footer-audio-right">
                          <div style={{padding:"0 15px"}}>
                          <SoundFilled onClick={muTe} /> <input type="range" name="" id="volum"  onChange={changeVolum} defaultValue = {100}/>
                          </div>
                        </div>
        </div>
            )
          })
        }
 </>
   
  )
}

export default Footer