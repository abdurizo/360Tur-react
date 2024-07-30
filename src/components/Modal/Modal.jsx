import { useState } from 'react';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import styles from './Modal.module.css';
import Form from '../../components/Form/Form';

function Modal({ setVisible, visible }) {
  
    // const show = () => {
    //     setVisible(true);
    // };
    const hide = () => {
        setVisible(false)
    }
    return (

        <div>
            {/* <button onClick={show}>show</button> */}

            <Rodal
                visible={visible}
                onClose={hide}
                animation={'zoom'}
                className={styles.wrap}
                width={460}
                height={480}
                customStyles={{
                    background: '#181818',
                    color: '#D8D8D8',
                    borderRadius: '1.52rem',
                    padding: '5rem',
                }}

            >
                <Form setVisible={setVisible}/>

            </Rodal>
        </div >
    )
}

export default Modal
