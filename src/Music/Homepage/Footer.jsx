import React,{useContext} from 'react'
import Context from '../../API/ContexCreat'
import {StepForwardOutlined,StepBackwardOutlined ,PlayCircleFilled,PauseCircleFilled,SoundFilled,RollbackOutlined ,UndoOutlined} from "@ant-design/icons"
import { useState,useEffect } from 'react';
import { useCallback } from 'react';
function Footer(props) {
  const data = useContext(Context);
  const [mainData,setMainData] = useState(data[0])
  const auDio = document.querySelector("audio")
  const [playPause , setPlayPause] = useState(false)
 const muTe = document.querySelector(".mute")
 const unMute = document.querySelector(".unmute")
 const rangeTime = document.querySelector(".range-time")
 const play =  document.querySelector(".play")
 const pause = document.querySelector(".pause")
const getData = useCallback(function (){
if(props.song){
      let dataClone =  data.filter(function(value){
        return value.name === props.song
      })
      if(auDio.paused){
        setMainData(dataClone[0])
      }
      else if(!auDio.paused){
        pause.click()
        setMainData(dataClone[0])
      }
      auDio.ondurationchange = function (){  
        play.click()
      }
}
} ,[auDio,pause,play,props.song,data])
   
  function playSong (){
    setPlayPause(true)
    auDio.play()
    control ()
    progressBar ()
  }  
  function pauseSong (){
   auDio.pause()
   setPlayPause(false)
   control ()
  }
  function changeVolum (e){
    auDio.volume = e.target.value/100
  }
  function mute (){
    auDio.muted = true
    unMute.classList.remove("playbnt")
    muTe.classList.add("playbnt")
    document.querySelector("#volum").value = 0
  }
  function unMutesong (){
    auDio.muted = false
    unMute.classList.add("playbnt")
    muTe.classList.remove("playbnt")
    document.querySelector("#volum").value = auDio.volume*100
  }
  function progressBar (){
    auDio.ontimeupdate = function (){
      let percen = (auDio.currentTime / auDio.duration) * 100
      rangeTime.value = percen
      if(auDio.duration === auDio.currentTime){
        pause.click()
             document.querySelector(".next").click()
          }
    }
  }
  function changeTimeSong (){
    
    let time = (rangeTime.value* auDio.duration)/100
    if(auDio.paused){
      auDio.currentTime = time
    }
    else if(!auDio.paused){
      pause.click()
      auDio.currentTime = time
    }
    auDio.ontimeupdate = function(){
      play.click()
    }
  }

  function nextSong (){
    let id = mainData.id ++
if(auDio.paused){
  if(id >= data.length){
    setMainData(data[0])
  }
  else {
    setMainData(data[id])
  }
}
else if (!auDio.paused){
  pause.click()
  if(id >= data.length){
    setMainData(data[0])
  }
  else {
    setMainData(data[id])
  }
}
auDio.ondurationchange = function (){  
  play.click()
}
console.log(mainData);
  }
  function preSong (){
        
          let id = mainData.id - 1
 if(auDio.paused){
    if(id <= 0){
       setMainData(data[data.length-1])
          }
      else{
            setMainData(data[id-1])
          }
}else if(!auDio.paused){
  pause.click()
  if(id <= 0){
    setMainData(data[data.length-1])
       }
   else{
         setMainData(data[id-1])
       }
}
     
          auDio.ondurationchange = function (){  
            play.click()
          }
  }
  function control (){
    if(playPause === false){
      document.querySelector(".play").classList.add("playbnt")
      document.querySelector(".pause").classList.remove("playbnt")
    }
    else if (playPause === true){
      document.querySelector(".play").classList.remove("playbnt")
      document.querySelector(".pause").classList.add("playbnt")
    }
  }
useEffect(() => {
 getData()
}, [props.song,getData]);

  return (
  <>
                   <div className='footer-audio' >
                        <div className='footer-audio-left'>
                          <div className='footer-audio-left-img' >
                            <img src={mainData.thum ? mainData.thum : "https://english4u.com.vn/Uploads/files/tu-vung-tieng-anh-ve-chu-de-am-nhac.png"} alt="" />
                          </div>
                            <p>{mainData.name}</p>
                            
                        </div>
                        <div className='footer-audio-bw' >
                                <div className='icon-footer'>
                                <p className='hover'>
                                <span onClick={preSong}><StepBackwardOutlined /></span> <span onClick={playSong} className="play"><PlayCircleFilled /></span> <span className='pause playbnt ' onClick={pauseSong} ><PauseCircleFilled /></span>  <span onClick={nextSong} className="next"> <StepForwardOutlined /></span>
                                 <span onClick={()=>{ document.querySelector(".audio").loop=true}}><RollbackOutlined /></span> <span onClick={()=>{ document.querySelector(".audio").loop=false}}><UndoOutlined /></span>
                                </p>
                                </div>
                               <div className='footer-audio-control'>
                                     <audio src={mainData.src}  className='audio'  ></audio>
                                      <div style={{marginTop:"5px"}} >
                                        <input type="range"  className='range-time' defaultValue={0} onChange = {changeTimeSong} />
                                         
                                      </div>
                               </div>
                             
                        </div>
                        <div className="footer-audio-right">
                          <div style={{padding:"0 15px"}}>
                          <span onClick={mute} className="mute"><SoundFilled  /></span>
                          <span className='playbnt unmute' onClick={unMutesong}><i className="fa-solid fa-volume-xmark"></i></span>
                           <input type="range" name="" id="volum"  defaultValue = {100} onChange={(e)=>{changeVolum(e)}}/>
                          </div>
                        </div>
        </div>
     
 </>
   
  )
}

export default Footer