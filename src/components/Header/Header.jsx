import React from 'react'
import HeaderCss from '../Header/Header.module.css'

const Header = () => {
    return <header className={HeaderCss.header}>
        <div className="container">
          <img className="App-logo" alt="Logo" src="https://stickerzone.shop/wp-content/uploads/2018/05/Google-Logo.png" />
        </div>
    </header>
}

export default Header