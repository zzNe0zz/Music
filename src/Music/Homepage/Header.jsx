import React from 'react'

function Header() {
  return (
    <div className='header-anime'>
          <div className='logoAnime'>
            <img src="https://gudlogo.com/wp-content/uploads/2019/05/logo-con-su-tu-noi-tieng-25.jpg" alt="" />
          </div>
          <div className='conten-header-anime'>
            <div className='conten-header-anime-link'>
                    <a href="http://">VPOP</a>
                    <a href="http://">US-UK</a>
                    <a href="http://">Khác</a>
            </div>
          <div className='conten-header-anime-input'>
             <input type="text" />
          </div>
          </div>
          <div className='Sigin-header-anime'>
            <button id='Sigin'>Đăng nhập</button>
            <button>Đăng kí</button>
          </div>

    </div>
  )
}

export default Header