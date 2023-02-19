import styles from './Header.module.scss';
import Button from '../Button/Button';
import Container from '../Container/Container';
import Link from 'next/link';


const Header = () => {

    return (
        <header className={styles.header}>
            <Container>
                <div className={styles.inner}>
                    <div className={styles.main}>
                        <ul className={styles.list}>
                            <li className={styles.item}><Link href={'/'}>White Paper</Link></li>
                            <li className={styles.item}><Link href={'/'}>Тэкономика</Link></li>
                            <li className={styles.item}><Link href={'/'}>Roadmap</Link></li>
                        </ul>
                    </div>
                    <div className={styles.action}>
                        <div className={styles.lang}>
                            <div className={styles.item}>EN</div>
                            <div className={styles.item}>RU</div>
                        </div>
                        <div className={styles.btn}>
                            <Button
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