import styles from './Card.module.css';


function Card({ image, video, name}) {
    return (
        <div className={styles.card}>
            <div className={styles.image}>
                <img src={image} alt="" />
            </div>
            <h3 className={styles.content}>{name}</h3>
            <video src={video} autoPlay loop muted className={styles.video}></video>
        </div>
    )
}

export default Card
