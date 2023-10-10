import React, {FC} from 'react';
import styles from './styles.module.scss';
import LinkText from '../../../../shared/ui/link-text';
import clsx from 'clsx';
import CloseIcon from '../../../../shared/ui/icons/close-icon';

export interface IAsideProps {
  onBurgerClick: () => void;
  isAsideOpened: boolean,
}

export const Aside: FC<IAsideProps> = (props) => {
  return (
    <aside className={clsx([styles.aside, props.isAsideOpened && styles.asideOpened])}>
      <button
        className={styles.burgerButton}
        onClick={props.onBurgerClick}
      >
        <CloseIcon/>
      </button>
      <nav className={styles.asideRouterWrapper}>
        <ul className={styles.routesList}>
          <li><LinkText href={'#'}>Репродукции</LinkText></li>
          <li><LinkText href={'#'}>Новинки</LinkText></li>
          <li><LinkText href={'#'}>О нас</LinkText></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Aside;
