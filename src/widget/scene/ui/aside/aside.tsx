import React, {FC} from 'react';
import styles from './styles.module.scss';
import LinkText from '../../../../shared/ui/link-text';
import BurgerButtonIcon from '../../../../shared/ui/icons/burger-icon';
import clsx from 'clsx';

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
        <BurgerButtonIcon/>
      </button>
      <div className={styles.asideRouterWrapper}>
        <LinkText href={'#'}>Репродукции</LinkText>
        <LinkText href={'#'}>Новинки</LinkText>
        <LinkText href={'#'}>О нас</LinkText>
      </div>
    </aside>
  );
};

export default Aside;
