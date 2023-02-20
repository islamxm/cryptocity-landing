import styles from './How.module.scss';
import Container from '@/components/Container/Container';
import Image from 'next/image';
// import img1 from '@/public/images/how-1.png';
// import img2 from '@/public/images/how-2.png';
// import img3 from '@/public/images/how-3.png';
import {FiSearch} from 'react-icons/fi';
import {FaWallet} from 'react-icons/fa';
import {RiMedalLine} from 'react-icons/ri';

const How = () => {

    return (
        <div className={styles.wrapper}>
            <Container>
                <div className={styles.inner}>
                    <h2 className={`${styles.head} block-title center`}>Как заработать в MyCryptown?</h2>
                    <div className={styles.body}>
                        <div className={styles.item}>
                            <div className={styles.img}>
                                <FiSearch/>
                            </div>
                            <h3 className={styles.name}>
                                Поиск MPI на карте вашего города
                            </h3>
                            <div className={styles.text}>
                                <p>
                                    В мире MyCryptown каждый может найти крипту MPI буквально у себя 
                                    под ногами, заходи в игру и находи!
                                </p>
                            </div>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.img}>
                                <FaWallet/>
                            </div>
                            <h3 className={styles.name}>
                                Аренда оборудования для майнинга
                            </h3>
                            <div className={styles.text}>
                                <p>
                                    Все игроки зарабатывают игровую валюту, чтобы за нее арендовать оборудования для майнинга MPI!
                                </p>
                            </div>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.img}>
                                <RiMedalLine/>
                            </div>
                            <h3 className={styles.name}>
                                Участие в различных ивентах
                            </h3>
                            <div className={styles.text}>
                                <p>
                                    В игре доступно множество ивентов 
                                    в которых каждый без вложений может заработать MPI!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}


export default How;