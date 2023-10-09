import React, {FC, HTMLProps, PropsWithChildren} from 'react';
import styles from './styles.module.scss';
import clsx from 'clsx';

export const DefaultContentLayout: FC<PropsWithChildren<HTMLProps<HTMLDivElement>>> = (props) => {
  const {className, ...otherProps} = props;

  return (
    <div className={clsx([styles.layout, props.className])} {...otherProps}>
      {props.children}
    </div>
  );
};

export default DefaultContentLayout;