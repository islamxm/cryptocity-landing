import styles from './Footer.module.scss';
import Container from '../Container/Container';


const Footer = () => {

    return (
        <footer className={styles.footer}>
            <Container>
                <div className={styles.inner}>© 2023 All rights reserved.</div>
            </Container>
        </footer>
    )
}

export default Footer;