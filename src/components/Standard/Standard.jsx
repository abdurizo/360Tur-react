import styles from '../Ekonom/Ekonom.module.css';
import Tick from '../../assets/icon/Tick';


function Standard({ standart, className }) {
    return (
        <ul className={className}>
            {
                standart.map((elm, id) => {
                    return <li className={styles.list} key={id}>
                        <Tick /> 
                        {elm}
                    </li>
                })
            }
        </ul>
    )
}

export default Standard
