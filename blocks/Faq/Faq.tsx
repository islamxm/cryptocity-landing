import styles from './Faq.module.scss';
import Container from '@/components/Container/Container';
import { faqItemPropsType } from './components/FaqItem/types';
import {useState} from 'react';
import FaqItem from './components/FaqItem/FaqItem';
import {Row, Col} from 'antd';
import Image from 'next/image';
import bg from '@/public/images/faq-bg.png';

const list: faqItemPropsType[] = [
    {
        index: 1,
        isActive:false,
        head: 'Что такое myCryptown?',
        text: ' MyCryptown- это увлекательная P2E вселенная, в которой ты можешь стать майнинг-магнатом, собирать зарабатывать крипту в различных ивентах, участвовать с другими игроками в аукционах на которых можно арендовать оборудование для майнинга крипты. Присоединяйся, играй и зарабатывай !',
        setActive: () => {}
    },
    {
        index: 2,
        isActive:false,
        head: 'Можно ли заработать в MyCryptown?',
        text: 'Да, MyCryptown это P2E игра, которая позволяет не только интересно провести время, но и заработать реальную криптовалюту MPI и продать ее на бирже',
        setActive: () => {}
    },
    {
        index: 3,
        isActive:false,
        head: 'Что такое MPI?',
        text: ' MPI- это главный токен нашего проекта. Который можно очень просто заработать играя в увлекательную игру, и продать зарабатывая USDT!',
        setActive: () => {}
    },
    {
        index: 4,
        isActive:false,
        head: 'Я не нашел MPI на биржах, почему?',
        text: ' Листинг нашего токена на биржах запланирован на 3й квартал 2022 года.',
        setActive: () => {}
    },
    {
        index: 5,
        isActive:false,
        head: 'Могу ли я вывести и продать MPI до листинга ?',
        text: 'Да, в приложении можно продать MPI до листинга по фиксированному курсу в вашем личном кабинете этого сайта.',
        setActive: () => {}
    },
    {
        index: 6,
        isActive:false,
        head: 'Будет ли Public Sale у токена MPI?',
        text: 'Да, наш проект будет проводить Public Sale токена MPI',
        setActive: () => {}
    },
    {
        index: 7,
        isActive:false,
        head: 'На каком блокчейне построена игра myCryptown?',
        text: 'BNB-chain (BSC)',
        setActive: () => {}
    }
]



const Faq = () => {

    const [activeIndex, setActiveIndex] = useState<number>(0);


    return (
        <div className={styles.wrapper}>
            <div className={styles.bg}>
                <Image src={bg} alt=""/>
            </div>
            <Container>
                <div className={styles.inner}>
                    <h2 className={`${styles.head} block-title center`}>
                        Вопрос-ответ
                    </h2>
                    <div className={styles.body}>
                        <Row gutter={[20,20]}>
                            {
                                list?.map((item, index) => (
                                    <Col span={24} key={index}>
                                        <FaqItem 
                                            {...item}
                                            setActive={setActiveIndex}
                                            isActive={activeIndex === item.index} 
                                            />
                                    </Col>
                                ))
                            }
                        </Row>
                        
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Faq;