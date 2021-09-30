import Card from './Card'
import styles from '../styles/Home.module.css'


const Section = () => {
    return (
        <div>
            <h4>This is a section heading</h4>
            <div className={styles.cardContainer}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
};

export default Section;