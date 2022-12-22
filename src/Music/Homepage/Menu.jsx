import React from 'react'
import {UserOutlined,WeiboCircleOutlined,CheckCircleOutlined,PicCenterOutlined,DingtalkOutlined,DropboxOutlined,AliyunOutlined,YoutubeOutlined} from "@ant-design/icons"
function Menu() {
  return (
    <div className='Menu-homePage'>
      <div className='Menu-homePage-ul'>
          <ul>  
                <li>
                    <p><span><UserOutlined /></span> <span>Cá nhân</span></p>
                </li>
                <li>
                    <p><span><WeiboCircleOutlined /></span> <span>Khám phá</span></p>
                </li>
                <li> 
                    <p><span><CheckCircleOutlined /></span> <span> Theo dõi</span></p>
                </li>
                <li>
                    <p><span><PicCenterOutlined /></span> <span>Radio</span></p>
                </li>
                
            </ul>     

    <hr />
            <ul>  
                <li>
                    <p><span><DingtalkOutlined /></span> <span>Nhạc mới</span></p>
                </li>
                <li>
                    <p><span><DropboxOutlined /></span> <span>Thể Loại</span></p>
                </li>
                <li> 
                    <p><span><AliyunOutlined /></span> <span>Top 100</span></p>
                </li>
                <li>
                    <p><span><YoutubeOutlined /></span> <span>MV</span></p>
                </li>
                
            </ul> 
            </div>      
    </div>
  )
}

export default Menu