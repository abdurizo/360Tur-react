import styles from '../Ekonom/Ekonom.module.css';
import Tick from '../../assets/icon/Tick'

function Premium({ premium, className }) {
  return (
      <ul className={className}>
          {
              premium.map((elm, id) => {
                  return <li className={styles.list} key={id}>
                      <Tick />
                      {elm}
                  </li>
              })
          }
      </ul>
  )
}

export default Premium
