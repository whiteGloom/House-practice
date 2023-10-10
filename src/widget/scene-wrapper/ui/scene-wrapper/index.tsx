import React, {FC, PropsWithChildren} from 'react';
import styles from './styles.module.scss';
import Header from '../header';
import Footer from '../footer';
import clsx from 'clsx';
import Aside from '../aside';

export const SceneWrapper: FC<PropsWithChildren> = (props) => {
  const [isAsideOpened, setAsideOpened] = React.useState(false);

  return (
    <div className={styles.wrapper}>
      <Header
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