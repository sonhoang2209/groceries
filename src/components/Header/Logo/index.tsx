import styles from './styles.module.scss'
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={'/'} className={styles.logo}>
      <span className={styles.mainLogo}>
        D
      </span>
      <span className={styles.text}>rinks </span>
      <span className={styles.mainLogo}>
        O
      </span>
      <span className={styles.text}>rder</span>
    </Link>
  )
}

export default Logo