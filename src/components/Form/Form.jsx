import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useEffect } from 'react';

import styles from './Form.module.css';

import User from '../../assets/icon/User';
import Phone from '../../assets/icon/Phone';
import ArrowRightBlack from '../../assets/icon/ArrowRightBlack';

function Form({ setVisible }) {
  const { t } = useTranslation();
  // const [visible, setVisible] = useState(true);
  const show = () => {
    setVisible(false);
  };
  const {
    register,
    formState: {errors},
    handleSubmit,
    reset,
  } = useForm({
    mode:'onBlur',
  });
 

  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
    fetch('http://360tcrp.uz/api/project/order/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({
        full_name: data?.ism,
        phone: data?.telefonRaqami
      })
    })
    .then(() => {
      setVisible(false)
    })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h4 className={styles.title}>{t('order')}</h4>
      {/* <span className={styles.name}>Ism</span> */}

      <label className={styles.name}>{t('name')}</label>
      <div className={styles.input_wrap}>
        <User />
        <input
          type="text"
          className={styles.input}
          {...register('ism', {
            pattern:{
              value: /[A-Za-z]{3}/,
              message: t('nameErrorM')
            },
            validate: {
              minLenght: (value) => {
                if (value.length < 3) {
                  return t('nameErrorM');
                }
              },
            },
          })}
        />
        
      </div>
      <div className={styles.error}>
        {
          errors?.ism && <p>{errors?.ism?.message}</p>
        }
      </div>

      <label className={styles.name}>{t('phone')}</label>
      <div className={styles.input_wrap}>
        <Phone />
        <input
          type="text"
          className={styles.input}
          placeholder="+9989012345678"
          {
          ...register('telefonRaqami',{
            pattern:{
              value:/[+][0-9]{12}/,
              message: t('phoneErrorM')
            },
            validate: {
              minLenght: (value) => {
                if (value.length < 1) {
                  return t('phoneErrorM');
                }
              },
            },
          })
          }
        />
      </div>
      <div className={styles.error}>
        {
          errors?.telefonRaqami && <p>{errors?.telefonRaqami?.message}</p>
        }
      </div>
      <div className={styles.con}>
        {/* <div className={styles.wrap_btn}> */}
          <button className={styles.btn} type="submit">
          {t('send')}
            <ArrowRightBlack className={styles.arrow} />
          </button>
        {/* </div> */}
      </div>
    </form>
  )
}

export default Form
