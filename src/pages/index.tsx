import styles from '../styles/Home.module.css'
import {Layout} from "../Layout";
import {Banner} from "../components/Banner";

export default function Home() {
  return (
    <Layout>
        <div className={styles.container}>
            <Banner />
        </div>
    </Layout>
  )
}
