import styles from './FaqItem.module.scss';
import {FC, useEffect, useState, useRef} from 'react';
import { faqItemPropsType } from './types';
import {BsPlus} from 'react-icons/bs';


const FaqItem:FC<faqItemPropsType> = ({
    isActive,
    head,
    text,
    index,
    setActive
}) => {
    const body = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState<number>(0)

    useEffect(() => {
        if(body?.current) {
            isActive ? setHeight(body.current.scrollHeight) : setHeight(0)
        }
    }, [isActive, body])




    return (
        <div className={`${styles.item} ${isActive ? styles.is_open : ''}`}>
            <div className={styles.head} onClick={() => isActive ? setActive(0) : setActive(index)}>
                <div className={styles.label}>{head}</div>
                <div className={styles.icon}>
                    <BsPlus/>
                </div>
            </div>
            <div style={{height}} ref={body} className={styles.body}>
                <div className={styles.inner}>
                    <p>
                        {text}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default FaqItem;