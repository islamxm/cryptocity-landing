import styles from './Steps.module.scss';
import Container from '@/components/Container/Container';
import img1 from '@/public/images/how-1.png';
import img2 from '@/public/images/how-2.png';
import img3 from '@/public/images/how-3.png';
import Image from 'next/image';


const Steps = () => {
    
    return (
        <div className={styles.wrapper}>
            <Container>
                <div className={styles.inner}>

                    <div className={styles.line}></div>

                    <div className={styles.item}>
                        <div className={styles.img}>
                            <Image src={img1} alt=""/>
                        </div>
                        <h3 className={styles.name}>
                            Скачай MyCryptown на свой смартфон!
                        </h3>
                        <div className={styles.text}>
                            <p>
                            Игра доступа на в Goolge Play и App Store
                            </p>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.img}>
                            <Image src={img2} alt=""/> 
                        </div>
                        <h3 className={styles.name}>
                            Купи оборудование для майнинга MPI 
                            в своем городе!
                        </h3>
                        <div className={styles.text}>
                            <p>
                                Ищи на реальной карте майнинг-центры и покупай их за внутриигровую валюту
                            </p>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.img}>
                            <Image src={img3} alt=""/> 
                        </div>
                        <h3 className={styles.name}>
                            Выводи криптовалюту нашего проекта MPI на биржу
                        </h3>
                        <div className={styles.text}>
                            <p>
                                Продавай фиксируя прибыль!
                            </p>
                        </div>
                    </div>
                    
                </div>
            </Container>
        </div>
    )
}

export default Steps;