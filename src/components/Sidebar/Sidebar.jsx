import React from 'react'
import SidebarCss from '../Sidebar/Sidebar.module.css'

const Sidebar = () => {
    return <aside className={SidebarCss.sidebar}>
                <ul className={SidebarCss.sidebar__menu}>
                    <li className="sidebar__menu-item">
                        <a className={SidebarCss.sidebar__menu_link} href="#">Profile</a>
                    </li>
                    <li className="sidebar__menu-item">
                        <a className={SidebarCss.sidebar__menu_link} href="#">Messages</a>
                    </li>
                    <li className="sidebar__menu-item">
                        <a className={SidebarCss.sidebar__menu_link} href="#">News</a>
                    </li>
                    <li className="sidebar__menu-item">
                        <a className={SidebarCss.sidebar__menu_link} href="#">Music</a>
                    </li>
                    <li className="sidebar__menu-item">
                        <a className={SidebarCss.sidebar__menu_link} href="#">Settings</a>
                    </li>
                </ul>
            </aside>
}

export default Sidebar