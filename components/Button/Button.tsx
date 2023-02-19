import styles from './Button.module.scss';
import {FC} from 'react';
import { buttonPropsType } from './types';

const Button:FC<buttonPropsType> = ({
    onClick,
    text,
}) => {
    return (
        <button 
            onClick={onClick}   
            className={styles.button}>
            <div className={styles.main}>
                <div className={styles.text}>{text}</div>
            </div>
            <div className={styles.mask}></div>
        </button>
    )
}

export default Button;