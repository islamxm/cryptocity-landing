import { advPartType } from '../../types';
import styles from './AdvPart.module.scss';
import {FC} from 'react';
import Container from '@/components/Container/Container';
import Image from 'next/image';
import {motion} from 'framer-motion'
import { defContainer, defItem, whenVisible } from '@/global/animations';


const AdvPart:FC<advPartType> = ({
    img,
    side = 'left',
    head,
    text,
    ex,
    bg
}) => {


    if(side == 'left') {

        return (
            <motion.div variants={defContainer} {...whenVisible} className={`${styles.wrapper} ${styles.left}`}>
                <div className={styles.bg}>
                    <Image src={bg} alt="bg"/>
                </div>
                <Container>
                    <motion.div 
                        variants={{
                            hidden: {
                                x: '10%',
                                opacity: 0
                            },
                            visible: {
                                x: 0,
                                opacity: 1,
                                transition: {
                                    type: 'tween',
                                    duration: 1
                                }
                            }
                        }}
                        className={styles.inner}>
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
                            <div  className={styles.text}>
                                {text}
                            </div>
                            <div className={styles.ex}>
                                {ex}
                            </div>
                        </div>
                    </motion.div>
                </Container>
            </motion.div>
        )
    }

    if(side == 'right') {
        return (
            <motion.div variants={defContainer} {...whenVisible} className={`${styles.wrapper} ${styles.right}`}>
                <div className={styles.bg}>
                    <Image src={bg} alt="bg"/>
                </div>
                <Container>
                    <motion.div 
                        variants={{
                            hidden: {
                                x: '-10%',
                                opacity: 0
                            },
                            visible: {
                                x: 0,
                                opacity: 1,
                                transition: {
                                    type: 'tween',
                                    duration: 1
                                }
                            }
                        }}
                        className={styles.inner}>
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
                    </motion.div>
                </Container>
            </motion.div>
        )
    }

    return null

    
}

export default AdvPart;