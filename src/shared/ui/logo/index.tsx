import React, {FC, HTMLAttributes} from 'react';
import styles from './styles.module.sass';
import clsx from 'clsx';
import InkHouseLogo from '../icons/ink-house-logo';
export const Logo: FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  const {className, ...otherProps} = props;

  return (
    <div className={clsx([styles.wrapper, className])} {...otherProps}>
      <InkHouseLogo className={styles.logoIcon}/>
      <span className={styles.productTitle}>Ink. House</span>
    </div>
  );
};

export default Logo;