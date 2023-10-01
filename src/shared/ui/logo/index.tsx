import React, {FC, HTMLAttributes} from 'react';
import styles from './styles.module.sass';
import {ReactComponent as LogoIcon} from './logo-icon.svg';
import clsx from 'clsx';

export const Logo: FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  const {className, ...otherProps} = props;

  return (
    <div className={clsx([styles.wrapper, className])} {...otherProps}>
      <LogoIcon className={styles.logoIcon}/>
      <span className={styles.productTitle}>Ink. House</span>
    </div>
  );
};

export default Logo;