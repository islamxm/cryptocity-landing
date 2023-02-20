import { advPartType } from '../../types';
import styles from './AdvPart.module.scss';
import {FC} from 'react';
import Container from '@/components/Container/Container';
import Image from 'next/image';



const AdvPart:FC<advPartType> = ({
    img,
    side = 'left',
    head,
    text,
    ex
}) => {


    if(side == 'left') {

        return (
            <div className={`${styles.wrapper} ${styles.left}`}>
                <Container>
                    <div className={styles.inner}>
                        <div className={styles.img}>
                            <Image src={img} alt=""/>
                        </div>
                        <div className={styles.body}>
                            <div className={styles.head}>
                                <span className={styles.first}></span>
                                <span className={styles.second}></span>
                                <h2 className={styles.title}>{head}</h2>
                                <span className={styles.third}></span>
                            </div>
                            <div className={styles.text}>
                                {text}
                            </div>
                            <div className={styles.ex}>
                                {ex}
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }

    if(side == 'right') {
        return (
            <div className={`${styles.wrapper} ${styles.right}`}>
                <Container>
                    <div className={styles.inner}>
                        <div className={styles.body}>
                            <div className={styles.head}>
                                <span className={styles.first}></span>
                                <span className={styles.second}></span>
                                <h2 className={styles.title}>{head}</h2>
                                <span className={styles.third}></span>
                            </div>
                            <div className={styles.text}>
                                {text}
                            </div>
                            <div className={styles.ex}>
                                {ex}
                            </div>
                        </div>
                        <div className={styles.img}>
                            <Image src={img} alt=""/>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }

    return null

    
}

export default AdvPart;