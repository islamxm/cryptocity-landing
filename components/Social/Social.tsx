import styles from './Social.module.scss';
import Link from 'next/link';
import Image from 'next/image';

import twitter from '@/public/twitter.png';
import telegram from '@/public/telegram.png';
import youtube from '@/public/youtube.png';
import discord from '@/public/discord.png';

const Social = () => {

    return (
        <div className={styles.wrapper}>
            <Link href={'/dads'} className={styles.item}>
                <Image src={twitter} alt="twitter"/>
            </Link>
            <Link href={'/'} className={styles.item}>
                <Image src={telegram} alt="telegram"/>
            </Link>
            <Link href={'/'} className={styles.item}>
                <Image src={youtube} alt="youtube"/>
            </Link>
            <Link href={'/'} className={styles.item}>
                <Image src={discord} alt="discord"/>
            </Link>
        </div>
    )
}

export default Social;