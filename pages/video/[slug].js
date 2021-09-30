import styles from '../../styles/Home.module.css'

export const getServerSideProps = (pageContext) => {
    const slug = pageContext.query.slug
    console.log(slug)
    return {
        props: {
            slug
        }
    }
}

const Video = ({ pageContext }) => {
    // console.log(pageContext)
    return (
        <div className={styles.video}>
            This is video you are talking about
        </div>
    )
}
export default Video