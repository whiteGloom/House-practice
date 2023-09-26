import React, {FC} from 'react';
import styles from './styles.module.sass';
import {ReactComponent as LogoIcon} from './logo-icon.svg';
import LinkText from '../../../../shared/ui/link-text';

export const Navbar: FC = () => {
  return (
    <nav className={styles.menu}>
      <div className={styles.brandsWrapper}>
        <LogoIcon className={styles.logoIcon}/>
        <span className={styles.productTitle}>Ink. House</span>
      </div>
      <div className={styles.linksWrapper}>
        <LinkText href={'#'}>Репродукции</LinkText>
        <LinkText href={'#'}>Новинки</LinkText>
        <LinkText href={'#'}>О нас</LinkText>
      </div>
    </nav>
  );
};

export default Navbar;