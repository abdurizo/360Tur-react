import styles from './Ekonom.module.css'

import Tick from '../../assets/icon/Tick'


function Ekonom({ ekonom, className }) {
    return (
        <ul className={className}>
            {
                ekonom.map((elm, id) => {
                    return <li className={styles.list} key={id}>
                        <Tick />
                         {elm}
                    </li>
                })
            }
        </ul>
    )
}

export default Ekonom
