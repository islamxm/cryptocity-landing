import styles from './Hero.module.scss';
import {FC} from 'react';
import Container from '@/components/Container/Container';
import Image from 'next/image';
import img from '@/public/images/hero-img.png';
import Button from '@/components/Button/Button';
import {HiOutlineArrowNarrowRight} from 'react-icons/hi';
import Link from 'next/link';

import bg from '@/public/images/hero-bg.png';
import appStore from '@/public/images/as-badge.png';
import googlePlay from '@/public/images/gp-badge.png';
import {motion, VariantLabels, Variants} from 'framer-motion';
import { defContainer, defItem, whenVisible } from '@/global/animations';

const draw: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => {
      const delay = 0.5 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 5, bounce: 0 },
          opacity: { delay, duration: 0.01 }
        }
      };
    }
};




const Hero:FC = () => {
    return (
        <motion.div variants={defContainer} {...whenVisible} className={styles.wrapper}>
            {/* <div className={styles.bg}>
                <Image src={bg} alt=""/>
            </div> */}
            <div className={styles.line_1}>
                <motion.svg initial="hidden" animate="visible" width="1159" height="579" viewBox="0 0 1159 579" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.path custom={1} variants={draw} d="M1154.48 434.901C1145.8 469.204 1121.49 497.864 1084.88 520.308C1048.28 542.754 999.406 558.962 941.665 568.358C826.186 587.148 675.337 578.67 516.501 538.448C357.665 498.225 220.962 433.885 128.344 362.397C82.034 326.653 46.7654 289.137 25.255 251.974C3.74609 214.815 -3.99131 178.039 4.69528 143.736C13.3819 109.434 37.6899 80.7732 74.2924 58.3292C110.898 35.8836 159.771 19.675 217.512 10.2797C332.991 -8.51072 483.84 -0.0329154 642.676 40.1897C801.512 80.4123 938.215 144.752 1030.83 216.24C1077.14 251.984 1112.41 289.501 1133.92 326.663C1155.43 363.823 1163.17 400.598 1154.48 434.901Z" stroke="url(#paint0_linear_115_8)"/>
                <defs>
                <linearGradient id="paint0_linear_115_8" x1="44.5123" y1="123.871" x2="1040.57" y2="537.1" gradientUnits="userSpaceOnUse">
                <stop stop-color="#484848"/>
                <stop offset="0.491388" stop-color="#484848" stop-opacity="0.36"/>
                <stop offset="1" stop-color="#484848"/>
                </linearGradient>
                </defs>
                </motion.svg>

            </div>
            <div className={styles.line_2}>
                <motion.svg  initial="hidden" animate="visible" width="1683" height="841" viewBox="0 0 1683 841" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.path custom={2} variants={draw} d="M1677.33 631.947C1664.69 681.86 1629.32 723.545 1576.1 756.176C1522.89 788.808 1451.85 812.365 1367.93 826.019C1200.11 853.326 980.908 841.004 750.107 782.558C519.307 724.111 320.657 630.618 186.059 526.729C118.76 474.783 67.4933 420.254 36.2206 366.226C4.94955 312.2 -6.31431 258.707 6.32525 208.794C18.9648 158.882 54.3311 117.197 107.546 84.566C160.764 51.9339 231.805 28.3766 315.716 14.7228C483.537 -12.5844 702.742 -0.262396 933.543 58.1841C1164.34 116.631 1362.99 210.123 1497.59 314.013C1564.89 365.959 1616.16 420.488 1647.43 474.516C1678.7 528.541 1689.96 582.035 1677.33 631.947Z" stroke="url(#paint0_linear_116_9)"/>
                <defs>
                <linearGradient id="paint0_linear_116_9" x1="64.3962" y1="179.986" x2="1511.6" y2="780.38" gradientUnits="userSpaceOnUse">
                <stop stop-color="#484848"/>
                <stop offset="0.491388" stop-color="#484848" stop-opacity="0.36"/>
                <stop offset="1" stop-color="#484848"/>
                </linearGradient>
                </defs>
                </motion.svg>

            </div>
            <div className={styles.line_3}>
                <motion.svg initial="hidden" animate="visible" width="2321" height="1160" viewBox="0 0 2321 1160" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.path variants={draw} custom={3} d="M2313.38 872.123C2295.93 941.03 2247.11 998.564 2173.68 1043.59C2100.25 1088.62 2002.23 1121.12 1886.48 1139.95C1654.97 1177.62 1352.58 1160.62 1034.22 1080C715.849 999.379 441.821 870.413 256.142 727.096C163.302 655.437 92.5691 580.205 49.4178 505.655C6.26798 431.107 -9.28695 357.272 8.16266 288.365C25.6123 219.457 74.4343 161.924 147.864 116.898C221.296 71.871 319.31 39.3718 435.067 20.5364C666.577 -17.1342 968.959 -0.134642 1287.33 80.4868C1605.7 161.108 1879.72 290.075 2065.4 433.392C2158.24 505.051 2228.97 580.283 2272.13 654.833C2315.28 729.38 2330.83 803.216 2313.38 872.123Z" stroke="url(#paint0_linear_116_10)"/>
                <defs>
                <linearGradient id="paint0_linear_116_10" x1="88.4452" y1="248.676" x2="2084.61" y2="1076.81" gradientUnits="userSpaceOnUse">
                <stop stop-color="#484848"/>
                <stop offset="0.491388" stop-color="#484848" stop-opacity="0.36"/>
                <stop offset="1" stop-color="#484848"/>
                </linearGradient>
                </defs>
                </motion.svg>
            </div>
            <Container>
                <div className={styles.inner}>
                    <div className={styles.content}>
                        <motion.h1 variants={defItem} className={styles.head}>
                        MyCryptown - <br/>
                        это P2E-проект <br/>
                        со своим токеном MPI <br/>
                        </motion.h1>
                        <motion.div variants={defItem} className={styles.text}>
                            <p>
                                В увлекательном мире myCryptown ты можешь стать майнером криптовалют, покупать помещения под майнинг в своем городе, обустраивать майнинг фермы, участвовать в аукционах между игроками, чтобы получить максимально эффективное оборудование для майнинга. 
                            </p>
                            <b> И это лишь часть твоих возможностей для заработка и игры.</b>
                        </motion.div>
                        <motion.div variants={defItem} className={styles.action}>
                            <Button
                                size='lg'
                                text='Купить MPI'
                                after={<HiOutlineArrowNarrowRight/>}
                                />
                        </motion.div>
                        <motion.div variants={defItem} className={styles.links}>
                            <div className={styles.item}>
                                <Link href={'/'}>
                                    <Image src={googlePlay} alt=""/>
                                </Link>
                            </div>
                            <div className={styles.item}>
                                <Link href={'/'}>
                                    <Image src={appStore} alt=""/>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                    <motion.div variants={defItem} className={styles.img}>
                        <motion.div
                            animate={{
                                y: ['0px', '-20px', '0px']
                            }}
                            transition={{
                            duration: 2,
                            ease: "easeInOut",
                            times: [0, 0.5, 1],
                            repeat: Infinity,
                            repeatDelay: 0
                            }}
                            >
                            <Image src={img} alt=""/>
                        </motion.div>
                        
                    </motion.div>
                </div>
            </Container>
        </motion.div>
    )
}

export default Hero;