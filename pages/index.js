import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Section from '../components/Section'
import Footer from '../components/Footer'
import { useQuery } from '@apollo/client'
import { GetLaunches } from '../queries/queries'

export default function Home() {
  const { loading, error, data } = useQuery(GetLaunches);
  console.log(data)
  return (
    <div className={styles.app}>
      <div className={styles.appContainer}>
        <h1>Hotstar Clone</h1>
        {/* navbar */}
        {/* banner */}
        {/* multiple sections */}
        {/* footer */}
        <Navbar />
        <div>This is banner(main video)</div>
        <Section />
        <Section />
        <Section />
        <Section />
        <Section />
        <Section />
        <Section />
        <Section />
        <Section />
      </div>
      <Footer />
    </div>
  )
}
