import styles from './Sidebar.module.scss';
import {motion, Variants} from 'framer-motion';
import Link from 'next/link';
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
            <motion.ul 
                variants={container}
                initial="hidden"
                animate={isOpen ? 'visible' : 'hidden'}
                className={styles.list}>
                <motion.li variants={item} className={styles.item}><Link onClick={() => setIsOpen(false)} href={'/'}>White Paper</Link></motion.li>
                <motion.li variants={item} className={styles.item}><Link onClick={() => setIsOpen(false)} href={'#chart'}>Тэкономика</Link></motion.li>
                <motion.li variants={item} className={styles.item}><Link onClick={() => setIsOpen(false)} href={'#roadmap'}>Roadmap</Link></motion.li>
            </motion.ul>
        </div>
    )
}

export default Sidebar;