import styles from './Sidebar.module.scss';
import {motion, Variants} from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import twitter from '@/public/twitter.png';
import telegram from '@/public/telegram.png';
import youtube from '@/public/youtube.png';
import discord from '@/public/discord.png';


const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

const Sidebar = ({isOpen, setIsOpen}: {isOpen: boolean, setIsOpen: (e: boolean) => void}) => {

    return (
        <div className={`${styles.wrapper} ${isOpen ? styles.open : ''}`}>
            <motion.div 
              variants={container}
              initial="hidden"
              animate={isOpen ? 'visible' : 'hidden'}
              className={styles.inner}>
              <ul 
                  
                  className={styles.list}>
                  <motion.li variants={item} className={styles.item}><Link onClick={() => setIsOpen(false)} href={'/'}>White Paper</Link></motion.li>
                  <motion.li variants={item} className={styles.item}><Link onClick={() => setIsOpen(false)} href={'#chart'}>Тэкономика</Link></motion.li>
                  <motion.li variants={item} className={styles.item}><Link onClick={() => setIsOpen(false)} href={'#roadmap'}>Roadmap</Link></motion.li>
              </ul>
              <motion.div variants={item} className={styles.soc}>
                  <Link 
                    href={'/'}
                    className={styles.soc_item}>
                      <Image
                        src={twitter}
                        alt={'twitter'}
                        />
                    </Link>
                  <Link 
                    href={'/'}
                    className={styles.soc_item}>
                      <Image
                        src={telegram}
                        alt={'telegram'}
                        />
                    </Link>
                  <Link 
                    href={'/'}
                    className={styles.soc_item}>
                      <Image
                        src={youtube}
                        alt={'youtube'}
                        />
                    </Link>
                  <Link 
                    href={'/'}
                    className={styles.soc_item}>
                      <Image
                        src={discord}
                        alt={'discord'}
                        />
                    </Link>
              </motion.div>
            </motion.div>
            
            
        </div>
    )
}

export default Sidebar;