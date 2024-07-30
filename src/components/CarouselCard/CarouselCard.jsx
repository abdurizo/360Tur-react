import styles from './CarouselCard.module.css'

// import Persons from '../../assets/icon/Persons';

function CarouselCard({ title, text, file }) {
  return (
    <div className={styles.wrap}>
      <div className={styles.title}>
        <h3>{title}</h3>
        <img src={ file } alt="icon" className={styles.icon} />
      </div>
      <p className={styles.content}>
        {text}
      </p>
    </div>
  )
}

export default CarouselCard
