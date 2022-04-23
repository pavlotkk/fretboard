import React from 'react';
import {NavLink, useLocation} from "react-router-dom";
import {MenuItem, MenuItems} from "../interfaces/menu";

function SingleHeaderMenuItem({title, link}: MenuItem) {
    return (
        <li className="nav-item" key={title}>
            <NavLink to={link as string}>{title}</NavLink>
        </li>
    )
}

function NestedHeaderMenuItem({title, subItems = []}: MenuItem) {
    const { pathname } = useLocation();
    const style = {
        color: subItems.some((item) => item.link === pathname) ? "#fff" : "rgba(255,255,255,.55)"
    }
    const dropdownId = `dropdown_${title}`.toLowerCase().replaceAll(" ", "_");
    const menuItems = subItems.map(({title, link}) => {
        return (
            <li key={link}>
                <NavLink to={link as string} className={pathname === link ? "dropdown-item active" : "dropdown-item"}>{title}</NavLink>
            </li>
        )
    });
    return (
        <li className={"nav-item dropdown"} key={title}>
            <button className={"btn btn-link nav-link dropdown-toggle"} style={style} id={dropdownId} data-bs-toggle="dropdown"
               aria-expanded="false">{title}</button>
            <ul className="dropdown-menu" aria-labelledby={dropdownId}>
                {menuItems}
            </ul>
        </li>
    )
}

function HeaderMenuItem({title, link, subItems = []}: MenuItem) {
    const isSingleItem = subItems === null || subItems.length === 0;
    if (isSingleItem) {
        return SingleHeaderMenuItem({title: title, link: link})
    } else {
        return NestedHeaderMenuItem({title: title, subItems: subItems})
    }
}

function HeaderMenu({menuItems = []}: MenuItems) {
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

function Header({menuItems = []}: MenuItems) {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark" aria-label="Third navbar example">
            <div className="container-fluid">
                <button className="btn btn-link navbar-brand">Fretboard</button>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarsExample03"
                        aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <HeaderMenu menuItems={menuItems}/>

                <button className="btn btn-link navbar-brand">{window.app_config.version}</button>
            </div>
        </nav>
    );
}

export default Header;