export interface MenuItem {
    title: string
    link?: string
    subItems?: MenuItem[]
}

export interface MenuItems {
    menuItems: MenuItem[]
}
