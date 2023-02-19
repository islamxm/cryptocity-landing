import styles from './Container.module.scss';
import {FC} from 'react';

const Container = ({
    children
}: {
    children: React.ReactNode
}) => {

    return (
        <div className={styles.wrapper}>
            {children}
        </div>
    )
}

export default Container;