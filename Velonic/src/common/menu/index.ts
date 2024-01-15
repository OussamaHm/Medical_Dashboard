import {
	HORIZONTAL_MENU_ITEMS,
	MENU_ITEMS,
	HORIZONTAL_MENU_ITEMS2,
	MENU_ITEMS2,
	MenuItemTypes,
} from '@/constants/menu'
const getMenuItems = () => {
    const id = String(localStorage.getItem('currentUserId'));
	if(id == "0" || id == "1" || id == "2" || id == "3" || id == "4" || id == "5" || id == "6") { return MENU_ITEMS }
	else return MENU_ITEMS2 
}

const getHorizontalMenuItems = () => {
	const id = String(localStorage.getItem('currentUserId'));
	if(id == "0" || id == "1" || id == "2" || id == "3" || id == "4" || id == "5" || id == "6")  { return HORIZONTAL_MENU_ITEMS }
	else  return HORIZONTAL_MENU_ITEMS2 
}
 
const findAllParent = (
	menuItems: MenuItemTypes[],
	menuItem: MenuItemTypes
): string[] => {
	let parents: string[] = []
	const parent = findMenuItem(menuItems, menuItem.parentKey)

	if (parent) {
		parents.push(parent.key)
		if (parent.parentKey) {
			parents = [...parents, ...findAllParent(menuItems, parent)]
		}
	}
	return parents
}

const findMenuItem = (
	menuItems: MenuItemTypes[] | undefined,
	menuItemKey: MenuItemTypes['key'] | undefined
): MenuItemTypes | null => {
	if (menuItems && menuItemKey) {
		for (let i = 0; i < menuItems.length; i++) {
			if (menuItems[i].key === menuItemKey) {
				return menuItems[i]
			}
			let found = findMenuItem(menuItems[i].children, menuItemKey)
			if (found) return found
		}
	}
	return null
}

export { findAllParent, findMenuItem, getMenuItems, getHorizontalMenuItems }
