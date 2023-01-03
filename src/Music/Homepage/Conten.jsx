import React,{useContext} from 'react'
import Context from '../../API/ContexCreat';
function Conten(props) {
   const BigData = useContext(Context);
   
  function clickSong (value){
    props.getSong(value.name) 
  }
  return (
    <>
        
    <div className='HomePage-Conten'>
        <div className='HomePage-Conten-title' >
          <h3>Mới Phát Hành</h3>
          <p>
            <span>Tất Cả</span>
            <span>Việt Nam</span>
            <span>Quốc Tế</span>
          </p>
        </div>

        <div className='HomePage-Conten-card'> 
           {
            BigData.map(function(value,index){
             return(
           <div className='card-Conten'  onClick={()=>{clickSong(value)}} key={value.id}>
                  <img src={value.thum ? value.thum:"https://free.vector6.com/wp-content/uploads/2020/04/Vector-am-nhac-oiefkw024-300x300.jpg"} alt=""/>
                 <div>
                      <h4>{value.name}</h4>
                     {
                      value.singer.map(function(value,id){
                        return(
                         
                          <p key={id+1}>{value}</p>
                         
                        )
                      })
                     }
                      <p>{value.Category}</p>
                 </div>
           </div>
             )
            })
           }
           </div>
    </div>
    </>
  )
}

export default Conten