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
                    <div className={styles.inner}>
                        <motion.div variants={defItem} className={styles.img}>
                            <Image src={img} alt=""/>
                        </motion.div>
                        <div className={styles.body}>
                            <motion.div variants={defItem} className={styles.head}>
                                <span className={styles.first}></span>
                                <span className={styles.second}></span>
                                <h2 className={styles.title}>{head}</h2>
                                <span className={styles.third}></span>
                            </motion.div>
                            <motion.div variants={defItem} className={styles.text}>
                                {text}
                            </motion.div>
                            <motion.div variants={defItem} className={styles.ex}>
                                {ex}
                            </motion.div>
                        </div>
                    </div>
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
                    <div className={styles.inner}>
                        <div className={styles.body}>
                            <motion.div variants={defItem} className={styles.head}>
                                <span className={styles.first}></span>
                                <span className={styles.second}></span>
                                <h2 className={styles.title}>{head}</h2>
                                <span className={styles.third}></span>
                            </motion.div>
                            <motion.div variants={defItem} className={styles.text}>
                                {text}
                            </motion.div>
                            <motion.div variants={defItem} className={styles.ex}>
                                {ex}
                            </motion.div>
                        </div>
                        <motion.div variants={defItem} className={styles.img}>
                            <Image src={img} alt=""/>
                        </motion.div>
                    </div>
                </Container>
            </motion.div>
        )
    }

    return null

    
}

export default AdvPart;