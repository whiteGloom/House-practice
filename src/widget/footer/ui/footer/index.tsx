import React, {FC} from 'react';
import styles from './styles.module.scss';
import Logo from '../../../../shared/ui/logo';
import LinkText, {ELinkTextTheme} from '../../../../shared/ui/link-text';
import clsx from 'clsx';

export const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <Logo/>
        </div>
        <div className={styles.contactsWrapper}>
          <LinkText href={'tel:+79995435454'}>+7 (999) 543-54-54</LinkText>
          Мастерская
        </div>
        <div className={clsx(styles.block, styles.origins)}>
          <span className={styles.blockTitle}>Репродукции</span>
          <LinkText theme={ELinkTextTheme.minor}>Франция</LinkText>
          <LinkText theme={ELinkTextTheme.minor}>Германия</LinkText>
          <LinkText theme={ELinkTextTheme.minor}>Англия</LinkText>
        </div>
        <div className={clsx(styles.block, styles.newProductsWrapper)}>
          <span className={styles.blockTitle}>Новинки</span>
          <LinkText theme={ELinkTextTheme.minor}>2021</LinkText>
          <LinkText theme={ELinkTextTheme.minor}>2020</LinkText>
        </div>
        <div className={clsx(styles.block, styles.aboutWrapper)}>
          <span className={styles.blockTitle}>О нас</span>
          <LinkText theme={ELinkTextTheme.minor}>Художники</LinkText>
          <LinkText theme={ELinkTextTheme.minor}>Менеджеры</LinkText>
        </div>
        <div className={clsx(styles.socialsWrapper)}>
          <div className={styles.socialsIcons}><i>👁️</i><i>💼</i><i>👅</i></div>
          <div className={styles.licenses}>
            <p>Ink. House ®</p>
            <p>All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;