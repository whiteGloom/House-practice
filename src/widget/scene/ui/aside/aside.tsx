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
      <div className={styles.asideRouterWrapper}>
        <LinkText href={'#'}>Репродукции</LinkText>
        <LinkText href={'#'}>Новинки</LinkText>
        <LinkText href={'#'}>О нас</LinkText>
      </div>
    </aside>
  );
};

export default Aside;
