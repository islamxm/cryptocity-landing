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
        head: 'Что такое myCryptown ?',
        text: 'Что такое myCryptown, Что такое myCryptown',
        setActive: () => {}
    },
    {
        index: 2,
        isActive:false,
        head: 'Что такое myCryptown ?',
        text: 'Что такое myCryptown, Что такое myCryptown',
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