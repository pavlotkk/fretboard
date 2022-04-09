function SingleHeaderMenuItem({title, link, isActive = false}) {
    return (
        <li className="nav-item" key={title}>
            <a className={`nav-link ${isActive ? "active" : ""}`} aria-current="page" href={link}>{title}</a>
        </li>
    )
}

function NestedHeaderMenuItem({title, isActive = false, subItems = []}) {
    const dropdownId = `dropdown_${new Date().getTime()}`;
    const menuItems = subItems.map(({title, link, isActive = false}) => {
        return <li key={title}><a className={`dropdown-item ${isActive ? "active" : ""}`} href={link}>{title}</a></li>
    });
    return (
        <li className={"nav-item dropdown"} key={title}>
            <a className={`nav-link dropdown-toggle ${isActive ? "active" : ""}`} href="#" id={dropdownId} data-bs-toggle="dropdown"
               aria-expanded="false">{title}</a>
            <ul className="dropdown-menu" aria-labelledby={dropdownId}>
                {menuItems}
            </ul>
        </li>
    )
}

function HeaderMenuItem({title, link, isActive = false, subItems = null}) {
    const isSingleItem = subItems === null || subItems.length === 0;
    if (isSingleItem) {
        return SingleHeaderMenuItem({title: title, link: link, isActive: isActive})
    } else {
        return NestedHeaderMenuItem({title: title, isActive: isActive, subItems: subItems})
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