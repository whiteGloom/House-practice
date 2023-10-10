import React, {FC} from 'react';
import styles from './styles.module.scss';
import Logo from '../../../../shared/ui/logo';
import LinkText from '../../../../shared/ui/link-text';
import BurgerButtonIcon from '../../../../shared/ui/icons/burger-icon';
import {ShoppingCartButton} from '../../../../features/shopping-cart-button';

export interface IHeaderProps {
  onBurgerClick: () => void;
}

export const Header: FC<IHeaderProps> = (props) => {
  return (
    <header className={styles.menu}>
      <div className={styles.sizeLimiter}>
        <div className={styles.logoWrapper}>
          <Logo/>
        </div>
        <nav className={styles.content}>
          <ul className={styles.routerWrapper}>
            <li><LinkText href={'#'}>Репродукции</LinkText></li>
            <li><LinkText href={'#'}>Новинки</LinkText></li>
            <li><LinkText href={'#'}>О нас</LinkText></li>
          </ul>
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
        </nav>
      </div>
    </header>
  );
};

export default Header;
