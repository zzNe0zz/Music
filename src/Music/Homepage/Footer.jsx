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
    function pauseSong (){
      const auDio = document.querySelector("audio")
      auDio.pause()
      auDio.onpause=function(){
        document.querySelector(".play").classList.remove("playbnt")
      document.querySelector(".pause").classList.add("playbnt")
      }
    }
    
   function playSong (){
    const auDio = document.querySelector("audio")
    auDio.play()
    auDio.onplay = function (){
      document.querySelector(".play").classList.add("playbnt")
      document.querySelector(".pause").classList.remove("playbnt")
      conTrolTime ()
    }
   }
  
   function conTrolTime (){
    const auDio = document.querySelector("audio")
    auDio.ontimeupdate = function(){
      let currentTime = auDio.currentTime
      let duration = auDio.duration
      let time = (currentTime / duration)*100
      document.querySelector(".range-time").value = time
    }
  
   }
function changeTimePlay (){
  const auDio = document.querySelector("audio")
  const time = document.querySelector(".range-time").value
  auDio.currentTime =( time*auDio.duration)/100
  playSong ()
  console.log( auDio.currentTime);
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
 
  const auDio = document.querySelector("audio")
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
 auDio.onpause = function (){
  document.querySelector(".range-time").value = 0
  playSong ()
 }
}

function preSong(){
    //chuyen bai
    const auDio = document.querySelector("audio")
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
   auDio.onpause = function (){
    document.querySelector(".range-time").value = 0
    playSong ()
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
                                <span onClick={preSong}><StepBackwardOutlined /></span> <span onClick={playSong} className="play"><PlayCircleFilled /></span> <span className='pause playbnt' onClick={pauseSong}><PauseCircleFilled /></span>  <span onClick={nextSong}> <StepForwardOutlined /></span>
                                 <span onClick={()=>{ document.querySelector(".audio").loop=true}}><RollbackOutlined /></span>
                                </p>
                                </div>
                               <div className='footer-audio-control'>
                                     <audio src={value.src}  className='audio' ></audio>
                                      <div style={{marginTop:"5px"}} >
                                        <input type="range"  className='range-time' defaultValue={0} onChange={changeTimePlay} />
                                         
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