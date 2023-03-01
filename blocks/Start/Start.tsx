import styles from './Start.module.scss';
import Container from '@/components/Container/Container';
import {motion, Variants} from 'framer-motion';
import { defContainer, defItem, whenVisible } from '@/global/animations';
import { useEffect, useCallback, useState } from 'react';


const tableData = [
    {name: 'Private sale', count: '10 000 000', holds: 12, parts: '10%'},
    {name: 'Public sale', count: '5 000 000', holds: 6, parts: '5%'},
    {name: 'Team', count: '15 000 000', holds: 18, parts: '15%'},
    {name: 'Marketing and Listing', count: '20 000 000', holds: 24, parts: '20%'},
    {name: 'Play to earn managed by the DAO', count: '28 000 000', holds: 0, parts: '28%'},
    {name: 'Liquidity', count: '2 000 000', holds: 0, parts: '2%'},
    {name: 'Staking rewards', count: '20 000 000', holds: 0, parts: '20%'},
]

const chartData = [
    
    {name: 'Marketing and Listing', count: '20 000 000', holds: 24, parts: '20%'},
    {name: 'Play to earn managed by the DAO', count: '28 000 000', holds: 0, parts: '28%'},
    {name: 'Liquidity', count: '2 000 000', holds: 0, parts: '2%'},
    {name: 'Public sale', count: '5 000 000', holds: 6, parts: '5%'},
    {name: 'Private sale', count: '10 000 000', holds: 12, parts: '10%'},
    {name: 'Team', count: '15 000 000', holds: 18, parts: '15%'},
    {name: 'Staking rewards', count: '20 000 000', holds: 0, parts: '20%'},

]

const Start = () => {
    const [hoverOn, setHoverOn] = useState(true)
    const [activeIndex, setActiveIndex] = useState<number>(0);



    const onHover = useCallback((index: number) => {
        if(hoverOn) {
            setActiveIndex(index)
        }
    },[hoverOn])

    useEffect(() => checkWindowSize, [])

    const checkWindowSize = () => {
        if(window.innerWidth <= 1024) {
            setHoverOn(false)
        } else {
            setHoverOn(true)
        }
    }

    useEffect(() => {
        window.addEventListener('resize', checkWindowSize);
        return () => window.removeEventListener('resize', checkWindowSize)
    }, [])

    const onLeave = useCallback(() => {
        if(hoverOn) {
            setActiveIndex(0)
        }
    }, [hoverOn])

    const classSwitch = (index: number) => {
        switch(index) {
            case 0:
                return styles.item1
            case 1:
                return styles.item2
            case 2:
                return styles.item3
            case 3:
                return styles.item4
            case 4:
                return styles.item5
            case 5: 
                return styles.item6
            case 6:
                return styles.item7
        }
    }

    

    
    return (
        <div className={styles.wrapper}>
            <Container>
                <motion.div variants={defContainer} {...whenVisible} className={styles.inner}>
                    <motion.h2 variants={defItem} className={`${styles.head} block-title center`}>
                    Начни зарабатывать в MyCryptown уже сейчас:
                    </motion.h2>
                    <div className={styles.chart} id={'chart'}>
                        <div className={styles.el}>
                            {
                                chartData?.map((item, index) => (
                                    <div
                                        key={index}
                                        className={`${classSwitch(index)} ${styles.item} ${activeIndex === index + 1 ? styles.active : ''}`}>{item.name} {item.parts}</div>
                                ))
                            }

                            <motion.div variants={{
                                hidden: {
                                    scale: 0
                                },
                                visible: {
                                    scale: 1,
                                    transition: {
                                        type: 'spring',
                                        stiffness: 400,
                                        damping: 17
                                    }
                                },
                                
                            }} className={styles.label}>MPI</motion.div>

                            <motion.svg variants={{
                                hidden: {
                                    scale: 0
                                },
                                visible: {
                                    scale: 1,
                                    transition: {
                                        type: 'spring',
                                        stiffness: 400,
                                        damping: 17
                                    }
                                },
                        
                                }} width="371" height="371" viewBox="0 0 371 371" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g 
                                    id='1' filter="url(#filter0_d_26_1608)">
                                <path
                                    onMouseLeave={onLeave}
                                    onMouseEnter={() => onHover(2)}
                                    onClick={() => setActiveIndex(2)}
                                    d="M168.705 0.864855C191.65 -1.50449 214.835 1.00775 236.74 8.23652C258.644 15.4653 278.771 27.247 295.798 42.8075C312.825 58.3681 326.367 77.3553 335.534 98.5217C344.701 119.688 349.285 142.555 348.986 165.619L316.289 165.195C316.528 146.744 312.86 128.45 305.527 111.517C298.193 94.5842 287.36 79.3945 273.738 66.946C260.117 54.4976 244.015 45.0722 226.492 39.2892C208.968 33.5062 190.42 31.4964 172.064 33.3919L168.705 0.864855Z" fill="url(#paint0_linear_26_1608)"/>
                                </g>
                                <g id='2' filter="url(#filter1_d_26_1608)">
                                <path
                                    onMouseLeave={onLeave}
                                    onMouseEnter={() => onHover(6)}
                                    onClick={() => setActiveIndex(6)}
                                    d="M272.479 301.944C249.924 316.115 224.249 324.56 197.686 326.545C171.123 328.531 144.477 323.996 120.066 313.335L133.153 283.368C152.682 291.897 173.998 295.524 195.249 293.936C216.499 292.348 237.039 285.592 255.083 274.255L272.479 301.944Z" fill="url(#paint1_linear_26_1608)"/>
                                </g>
                                <g id='3' filter="url(#filter2_d_26_1608)">
                                <path 
                                    onMouseLeave={onLeave}
                                    onMouseEnter={() => onHover(7)}
                                    onClick={() => setActiveIndex(7)}
                                    d="M121.597 313.995C86.7099 299.181 58.0533 272.707 40.528 239.1C23.0028 205.493 17.6977 166.842 25.52 129.756L57.516 136.505C51.2581 166.174 55.5022 197.095 69.5224 223.98C83.5426 250.865 106.468 272.045 134.378 283.896L121.597 313.995Z" fill="url(#paint2_linear_26_1608)"/>
                                </g>
                                <g id='4' filter="url(#filter3_d_26_1608)">
                                <path 
                                    onMouseLeave={onLeave}
                                    onMouseEnter={() => onHover(1)}
                                    onClick={() => setActiveIndex(1)}
                                    d="M25.2031 131.295C32.1061 96.9364 49.8661 65.705 75.8648 42.2054C101.864 18.7058 134.725 4.18173 169.604 0.774553L172.783 33.3196C144.88 36.0454 118.591 47.6646 97.7919 66.4643C76.9929 85.264 62.7848 110.249 57.2625 137.736L25.2031 131.295Z" fill="url(#paint3_linear_26_1608)"/>
                                </g>
                                <g id='5' filter="url(#filter4_d_26_1608)">
                                <path 
                                    onMouseLeave={onLeave}
                                    onMouseEnter={() => onHover(3)}
                                    onClick={() => setActiveIndex(3)}
                                    d="M349 163.5C349 177.126 347.297 190.698 343.93 203.901L312.244 195.821C314.937 185.258 316.3 174.401 316.3 163.5H349Z" fill="url(#paint4_linear_26_1608)"/>
                                </g>
                                <g id='6' filter="url(#filter5_d_26_1608)">
                                <path 
                                    onMouseLeave={onLeave}
                                    onMouseEnter={() => onHover(4)}
                                    onClick={() => setActiveIndex(4)}
                                    d="M345.695 196.207C341.615 216.193 333.83 235.24 322.743 252.362L295.295 234.59C304.164 220.892 310.392 205.655 313.656 189.665L345.695 196.207Z" fill="url(#paint5_linear_26_1608)"/>
                                </g>
                                <g id='7' filter="url(#filter6_d_26_1608)">
                                <path 
                                    onMouseLeave={onLeave}
                                    onMouseEnter={() => onHover(5)}
                                    onClick={() => setActiveIndex(5)}
                                    d="M326.682 245.962C311.72 271.578 290.071 292.64 264.055 306.893L248.344 278.214C269.157 266.812 286.476 249.962 298.445 229.47L326.682 245.962Z" fill="url(#paint6_linear_26_1608)"/>
                                </g>
                                <defs>
                                <filter id="filter0_d_26_1608" x="146.705" y="0" width="224.295" height="209.619" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dy="22"/>
                                <feGaussianBlur stdDeviation="11"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0.996078 0 0 0 0 0.345098 0 0 0 0 0.298039 0 0 0 0.22 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_26_1608"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_26_1608" result="shape"/>
                                </filter>
                                <filter id="filter1_d_26_1608" x="98.0662" y="274.255" width="196.413" height="96.7446" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dy="22"/>
                                <feGaussianBlur stdDeviation="11"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0.227451 0 0 0 0 0.870588 0 0 0 0 0.847059 0 0 0 0.22 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_26_1608"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_26_1608" result="shape"/>
                                </filter>
                                <filter id="filter2_d_26_1608" x="-0.000244141" y="129.756" width="156.378" height="228.238" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dy="22"/>
                                <feGaussianBlur stdDeviation="11"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0.552941 0 0 0 0 0.321569 0 0 0 0 0.996078 0 0 0 0.22 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_26_1608"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_26_1608" result="shape"/>
                                </filter>
                                <filter id="filter3_d_26_1608" x="3.20312" y="0.774414" width="191.58" height="180.961" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dy="22"/>
                                <feGaussianBlur stdDeviation="11"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0.180392 0 0 0 0 0.666667 0 0 0 0 0.960784 0 0 0 0.22 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_26_1608"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_26_1608" result="shape"/>
                                </filter>
                                <filter id="filter4_d_26_1608" x="290.244" y="163.5" width="80.7562" height="84.4014" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dy="22"/>
                                <feGaussianBlur stdDeviation="11"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0.94902 0 0 0 0 0.819608 0 0 0 0 0.00784314 0 0 0 0.22 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_26_1608"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_26_1608" result="shape"/>
                                </filter>
                                <filter id="filter5_d_26_1608" x="273.295" y="189.666" width="94.4007" height="106.697" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dy="22"/>
                                <feGaussianBlur stdDeviation="11"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0.196078 0 0 0 0 0.0941176 0 0 0 0 0.439216 0 0 0 0.22 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_26_1608"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_26_1608" result="shape"/>
                                </filter>
                                <filter id="filter6_d_26_1608" x="226.344" y="229.47" width="122.338" height="121.423" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dy="22"/>
                                <feGaussianBlur stdDeviation="11"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.215686 0 0 0 0 0.458823 0 0 0 0.21 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_26_1608"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_26_1608" result="shape"/>
                                </filter>
                                <linearGradient id="paint0_linear_26_1608" x1="22" y1="163.5" x2="349" y2="163.5" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#F9D423"/>
                                <stop offset="1" stop-color="#FF4E50"/>
                                </linearGradient>
                                <linearGradient id="paint1_linear_26_1608" x1="22" y1="163.5" x2="349" y2="163.5" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#92FE9D"/>
                                <stop offset="1" stop-color="#00C9FF"/>
                                </linearGradient>
                                <linearGradient id="paint2_linear_26_1608" x1="22" y1="163.5" x2="349" y2="163.5" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#B721FF"/>
                                <stop offset="1" stop-color="#21D4FD"/>
                                </linearGradient>
                                <linearGradient id="paint3_linear_26_1608" x1="22" y1="163.5" x2="349" y2="163.5" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#209CFF"/>
                                <stop offset="1" stop-color="#68E0CF"/>
                                </linearGradient>
                                <linearGradient id="paint4_linear_26_1608" x1="22" y1="163.5" x2="349" y2="163.5" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#50CC7F"/>
                                <stop offset="1" stop-color="#F5D100"/>
                                </linearGradient>
                                <linearGradient id="paint5_linear_26_1608" x1="22" y1="163.5" x2="349" y2="163.5" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#30CFD0"/>
                                <stop offset="1" stop-color="#330867"/>
                                </linearGradient>
                                <linearGradient id="paint6_linear_26_1608" x1="22" y1="163.5" x2="349" y2="163.5" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#FF758C"/>
                                <stop offset="1" stop-color="#FF7EB3"/>
                                </linearGradient>
                                </defs>
                            </motion.svg>
                        </div>
                        {
                            activeIndex !== 0 ? (
                                <div className={styles.label}>
                                    <span>{tableData[activeIndex - 1].parts}</span>
                                    {tableData[activeIndex - 1].name}
                                </div>
                            ) : null
                        }
                    </div>
                    <div className={styles.body} id={'plan'}>
                        <table className={styles.table}>
                            <tbody>
                            <tr>
                                <th></th>
                                <th>Количество</th>
                                <th>Холды (мес.)</th>
                                <th>Доля</th>
                            </tr>
                            {
                                tableData?.map((i,index) => (
                                    <tr key={index}>
                                        <td>
                                            {i.name}
                                        </td>
                                        <td>
                                            <div className={styles.name}>Количество</div>
                                            {i.count}
                                        </td>
                                        <td>
                                            <div className={styles.name}>Холды (мес.)</div>
                                            {i.holds}
                                        </td>
                                        <td>
                                            <div className={styles.name}>Доля</div>
                                            {i.parts}
                                        </td>
                                    </tr>
                                ))
                            }
                            
                            
                            </tbody>
                            
                        </table>    
                    </div>
                </motion.div>
            </Container>
        </div>
    )
}

export default Start;