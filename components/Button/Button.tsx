import styles from './Button.module.scss';
import {FC} from 'react';
import { buttonPropsType } from './types';
import Link from 'next/link';

const Button:FC<buttonPropsType> = ({
    onClick,
    text,
    before,
    after,
    size = 'sm',
    link = false,
    href = '/'
}) => {

    const switchSize = (size: string) => {
        switch(size) {
            case 'sm':
                return styles.sm
            case 'md':
                return styles.md
            case 'lg':
                return styles.lg
            default:
                return styles.sm
        }
    }

    if(link) {
        return (
            <Link 
            href={href}
            target={'_blank'}
            className={`${styles.button} ${switchSize(size)}`}>
            <div className={styles.main}>
                {
                    before ? (
                        <div className={styles.before}>
                            {before}
                        </div>
                    ) : null
                }
                <div className={styles.text}>{text}</div>
                {
                    after ? (
                        <div className={styles.after}>
                            {after}
                        </div>
                    ) : null
                }
            </div>
            <div className={styles.mask}></div>
        </Link>    
        )
    }

    return (
        <button 
            onClick={onClick}   
            className={`${styles.button} ${switchSize(size)}`}>
            <div className={styles.main}>
                {
                    before ? (
                        <div className={styles.before}>
                            {before}
                        </div>
                    ) : null
                }
                <div className={styles.text}>{text}</div>
                {
                    after ? (
                        <div className={styles.after}>
                            {after}
                        </div>
                    ) : null
                }
            </div>
            <div className={styles.mask}></div>
        </button>
    )
}

export default Button;