import styles from './Header.module.scss';
import Button from '../Button/Button';
import Container from '../Container/Container';
import Link from 'next/link';
import {useEffect, useState} from 'react';
import {motion, Variants} from 'framer-motion';
import Sidebar from '../Sidebar/Sidebar';


const Header = ({
    menuIsActive
}: {menuIsActive: boolean}) => {
    const [active, setActive] = useState<boolean>(false)
    const [menuOpen, setMenuOpen] = useState<boolean>(false)
    const toggleHeaderClass = () => {
        document.documentElement.scrollTop > 20 ? setActive(true) : setActive(false)
    }

    const checkHeaderOnResize = () => {
        window.innerWidth <= 1024 ? document.removeEventListener('scroll', toggleHeaderClass) : document.addEventListener('scroll', toggleHeaderClass)
    }


    useEffect(() => {
        document.addEventListener('scroll', toggleHeaderClass);
        window.addEventListener('resize', checkHeaderOnResize);

        return () => {
            window.removeEventListener('resize', checkHeaderOnResize);
            document.removeEventListener('scroll', toggleHeaderClass);
        }
    }, [])


    const toggleMenu = () => setMenuOpen(s => !s)



    return (
        <header className={`${styles.header} ${active ? styles.active : ''}`}>
            <Container>
                <div className={styles.inner}>

                    <Sidebar
                        isOpen={menuOpen}
                        setIsOpen={setMenuOpen}
                        />    

                    <div className={`${styles.burger} ${menuOpen ? styles.active : ''}`} onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className={styles.main}>
                        <ul className={styles.list}>
                            <li className={styles.item}><Link href={'/'}>White Paper</Link></li>
                            <li className={styles.item}><Link href={'#chart'}>Teconomy</Link></li>
                            <li className={styles.item}><Link href={'#roadmap'}>Roadmap</Link></li>
                        </ul>
                    </div>
                    <div className={styles.action}>
                        <div className={styles.lang}>
                            <div className={styles.item}>EN</div>
                            <div className={styles.item}>RU</div>
                        </div>
                        <div className={styles.btn}>
                            <Button
                                link={true}
                                href={'https://datami.ee/results-of-smart-contract-audit-2/'}
                                text='Аудит'
                                />
                        </div>
                        <div className={styles.btn}>
                            <Button
                                link={true}
                                href={'http://lk.mycryptown.io'}
                                text='Войти'
                                />
                            
                        </div>
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Header;