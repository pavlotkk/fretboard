import React from 'react';
import {NavLink, useLocation} from "react-router-dom";

function SingleHeaderMenuItem({title, link}) {
    return (
        <li className="nav-item" key={title}>
            <NavLink to={link}>{title}</NavLink>
        </li>
    )
}

function NestedHeaderMenuItem({title, subItems = []}) {
    const { pathname } = useLocation();
    const style = {
        color: subItems.some((item) => item.link === pathname) ? "#fff" : "rgba(255,255,255,.55)"
    }
    const dropdownId = `dropdown_${title}`.toLowerCase().replaceAll(" ", "_");
    const menuItems = subItems.map(({title, link}) => {
        return (
            <li key={link}>
                <NavLink to={link} className={pathname === link ? "dropdown-item active" : "dropdown-item"}>{title}</NavLink>
            </li>
        )
    });
    return (
        <li className={"nav-item dropdown"} key={title}>
            <a className={"nav-link dropdown-toggle"} style={style} href="#" id={dropdownId} data-bs-toggle="dropdown"
               aria-expanded="false">{title}</a>
            <ul className="dropdown-menu" aria-labelledby={dropdownId}>
                {menuItems}
            </ul>
        </li>
    )
}

function HeaderMenuItem({title, link, subItems = null}) {
    const isSingleItem = subItems === null || subItems.length === 0;
    if (isSingleItem) {
        return SingleHeaderMenuItem({title: title, link: link})
    } else {
        return NestedHeaderMenuItem({title: title, subItems: subItems})
    }
}

function HeaderMenu({menuItems = []}) {
    const headerMenuItems = menuItems.map((item) => {
        return <HeaderMenuItem {...item} key={item.title}/>
    })

    return (
        <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-sm-0">
                {headerMenuItems}
            </ul>
        </div>
    );
}

function Header({menuItems = []}) {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark" aria-label="Third navbar example">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Fretboard</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarsExample03"
                        aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <HeaderMenu menuItems={menuItems}/>

            </div>
        </nav>
    );
}

export default Header;