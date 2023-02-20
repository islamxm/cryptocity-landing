import styles from './RoadMap.module.scss';
import Container from '@/components/Container/Container';
import {useState, useRef, useEffect} from 'react';

const list = [
    {
        value: 'Q1',
        head: 'Launch',
        body: <>
            <ul>
                <li>Game Concept Establishment</li>
                <li>Start of the Development Process</li>
                <li>Genesis NFT Collection Launched</li>
                <li>Backend Microservice for Smart Contract Interaction</li>
            </ul>
        </>
    },
    {
        value: 'Q1',
        head: 'Launch',
        body: <>
            <ul>
                <li>Game Concept Establishment</li>
                <li>Start of the Development Process</li>
                <li>Genesis NFT Collection Launched</li>
                <li>Backend Microservice for Smart Contract Interaction</li>
            </ul>
        </>
    },
    {
        value: 'Q1',
        head: 'Launch',
        body: <>
            <ul>
                <li>Game Concept Establishment</li>
                <li>Start of the Development Process</li>
                <li>Genesis NFT Collection Launched</li>
                <li>Backend Microservice for Smart Contract Interaction</li>
            </ul>
        </>
    },
]


const RoadMap = () => {

    
    


    return (
        <div className={styles.wrapper}>
            <Container>
                <div className={styles.inner}>
                    <div className={styles.head}>
                        <h2 className={`${styles.title} block-title center`}>Road map</h2>
                        <div className={styles.subtitle}>
                            As a team with a vast experience in distributed scalable cloud apps, we use the latest IT technologies to create a social ecosystem that would bring millions of Web2 users into the blockchain world
                        </div>
                    </div>
                    <div className={styles.body}>
                        
                        <div className={styles.line}>
                            <div className={styles.dr}></div>
                        </div>



                        <div className={styles.list}>
                            
                            {
                                list?.map(({head, body, value}, index) => (
                                    <div className={styles.item} key={index}>
                                        <div className={styles.circle}></div>
                                        <div className={styles.value}>{value}</div>
                                        <div className={styles.name}>{head}</div>
                                        <div className={styles.text}>
                                            {body}
                                        </div>
                                    </div>
                                ))
                            }

                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default RoadMap;