import React, {FC} from 'react';
import styles from './styles.module.scss';
import Logo from '../../../../shared/ui/logo';
import LinkText from '../../../../shared/ui/link-text';
import BurgerButtonIcon from '../../../../shared/ui/icons/burger-icon';
import {ShoppingCartButton} from '../../../../features/shopping-cart-button';

export interface INavbarProps {
  onBurgerClick: () => void;
}

export const Navbar: FC<INavbarProps> = (props) => {
  return (
    <nav className={styles.menu}>
      <div className={styles.sizeLimiter}>
        <div className={styles.logoWrapper}>
          <Logo/>
        </div>
        <div className={styles.content}>
          <div className={styles.routerWrapper}>
            <LinkText href={'#'}>Репродукции</LinkText>
            <LinkText href={'#'}>Новинки</LinkText>
            <LinkText href={'#'}>О нас</LinkText>
          </div>
          <div className={styles.burgerMenu}>
            <button
              className={styles.burgerButton}
              onClick={props.onBurgerClick}
            >
              <BurgerButtonIcon/>
            </button>
          </div>
          <div className={styles.basketWrapper}>
            <ShoppingCartButton itemsCount={3} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
