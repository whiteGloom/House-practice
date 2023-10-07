import React, {FC, PropsWithChildren} from 'react';
import styles from './styles.module.scss';
import Navbar from '../navbar/navbar';
import Aside from '../aside/aside';
import Footer from '../footer';

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

      <article className={styles.article} style={{overflow: isAsideOpened ? 'hidden' : 'auto'}}>
        {props.children}

        <Footer />
      </article>

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