import React from 'react'
import ContentCss from '../Content.module.css'
import Posts from '../Posts/Posts'

const Profile = () => {
    return <div className={ContentCss.content}>
                <div className={ContentCss.content__bg}>
                    <img className={ContentCss.content__bg_img} src="https://cdn.shazoo.ru/c800x360/509963_ap3K66IUlw_464786_yak0wlc4pg_how.jpg" alt="background" />
                </div>
                <div className="user">
                    <div className="user__logo">
                        <img className="user-img" src="https://img.kupigolos.ru/hero/5d06655a92b71.jpg?p=bh&s=373c40b10140d8af8478f7222e88c462" alt="avatar" />
                    </div>
                    <div className="user__meta">
                        <div className="user__meta-name">Severus Snape</div>
                        <div className="user__meta-date">19.12.1998</div>
                        <div className="user__meta-city">Chamber of Secrets</div>
                        <div className="user__meta-site">www.parler.com</div>
                    </div>
                </div>
                <Posts />
            </div>
}

export default Profile 