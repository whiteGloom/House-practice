import React, {FC} from 'react';
import styles from './styles.module.sass';
import LinkText from '../../../../shared/ui/link-text';
import {ShoppingCartButton} from '../../../../features/shopping-cart-button';
import Logo from '../../../../shared/ui/logo';

export const Navbar: FC = () => {
  return (
    <nav className={styles.menu}>
      <div className={styles.content}>
        <Logo/>
        <div className={styles.linksWrapper}>
          <LinkText href={'#'}>Репродукции</LinkText>
          <LinkText href={'#'}>Новинки</LinkText>
          <LinkText href={'#'}>О нас</LinkText>
          <ShoppingCartButton itemsCount={3} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;