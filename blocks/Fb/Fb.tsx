import styles from './Fb.module.scss';
import {FiArrowRight} from 'react-icons/fi';
import Container from '@/components/Container/Container';
import {useState} from 'react';



const Fb = () => {
    const [email, setEmail] = useState<string>('')
    const [hovered, setHovered] = useState<boolean>(false);


    const whenMouseOverBtn: React.MouseEventHandler = (e) => setHovered(true)

    const whenMouseLeaveBtn: React.MouseEventHandler = (e) => setHovered(false)



    return (
        <div className={styles.wrapper}>
            <Container>
                <div className={styles.inner}>
                    <h2 className={`${styles.head} block-title center`}>Будь вкурсе новостей</h2>
                    <div className={styles.body}>
                        <div className={styles.ex}>Оставь свой E-mail, чтобы узнать первым о выгодных акциях </div>
                        <div className={`${styles.action} ${hovered ? styles.hovered : ''}`}>
                            <div className={styles.border}></div>
                            <input
                                value={email}
                                onChange={e => setEmail(e.target.value)} 
                                type="email" 
                                className={styles.input} 
                                placeholder="Email Address"/>
                            <button 
                                // disabled={!email}
                                onMouseEnter={whenMouseOverBtn}
                                onMouseLeave={whenMouseLeaveBtn}
                                className={styles.btn}><FiArrowRight className={styles.icon}/></button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Fb;