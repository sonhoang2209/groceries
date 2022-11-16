import styles from './menu.module.scss'
import {menuData} from "../menuData";
import Link from "next/link";

const Menu = () => {
  return <nav className={styles.menu}>
    {
      menuData.map((item) => (
        <Link href={item.link} className={styles.menuItem} key={item.slug}>
          {item.label}
        </Link>
      ))
    }
  </nav>
}

export default Menu