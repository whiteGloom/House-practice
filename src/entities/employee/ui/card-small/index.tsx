import React, {FC, HTMLProps} from 'react';
import styles from './styles.module.scss';
import clsx from 'clsx';

export interface IEmployeeCardSmall extends HTMLProps<HTMLDivElement> {
  logoSrc: string; // TODO: add interface import instead direct type
}

export const EmployeeCardSmall: FC<IEmployeeCardSmall> = (props) => {
  const {logoSrc, className, ...otherProps} = props;

  return (
    <div className={clsx([styles.card, className])} {...otherProps}>
      <img src={logoSrc} alt={'Employee logo'} className={styles.logoImage}/>
    </div>
  );
};

export default EmployeeCardSmall;