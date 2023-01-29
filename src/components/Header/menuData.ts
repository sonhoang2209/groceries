export interface MenuItemType {
  label: string;
  slug: string;
  link: string;
}

export interface SubMenuType {
  label: string;
  slug: string;
  link: string;
  subMenu?: MenuItemType[] | SubMenuType[];
}

export const menuData: SubMenuType[] = [
  {
    label: "Menu",
    slug: "Menu",
    link: "/products",
  },
  {
    label: "Shops",
    slug: "shops",
    link: "/shops",
  },
  {
    label: "Blogs",
    slug: "blogs",
    link: "/blogs",
  },
  {
    label: "Information",
    slug: "information",
    link: "/information",
  },
];
