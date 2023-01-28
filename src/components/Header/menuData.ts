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
    label: "San Pham",
    slug: "products",
    link: "/products",
  },
  {
    label: "Menu",
    slug: "Menu",
    link: "/collections",
  },
  {
    label: "Cua hang",
    slug: "shops",
    link: "/collections",
  },
  {
    label: "Blogs",
    slug: "blogs",
    link: "/collections",
  },
  {
    label: "Gioi thieu",
    slug: "information",
    link: "/collections",
  },
];
