import React, {FC, PropsWithChildren} from 'react';
import styles from './styles.module.scss';
import Navbar from '../navbar/navbar';
import Aside from '../aside/aside';
import Footer from '../footer';
import clsx from 'clsx';

export const SceneWrapper: FC<PropsWithChildren> = (props) => {
  const [isAsideOpened, setAsideOpened] = React.useState(false);

  return (
    <div className={styles.wrapper}>
      <Navbar
        onBurgerClick={() => {
          setAsideOpened((isAsideOpened) => {
            return !isAsideOpened;
          });
        }}
      />

      <div className={clsx([styles.contentWrapper, isAsideOpened && styles.disableScroll])}>
        {props.children}

        <Footer />
      </div>

      <Aside
        onBurgerClick={() => {
          setAsideOpened((isAsideOpened) => {
            return !isAsideOpened;
          });
        }}
        isAsideOpened={isAsideOpened}
      />
    </div>
  );
};

export default SceneWrapper;