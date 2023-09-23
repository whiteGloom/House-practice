import React, {FC, HTMLAttributes, PropsWithChildren} from 'react';
import styles from './styles.module.sass';
import clsx from 'clsx';

export interface IButtonDefaultProps extends PropsWithChildren, HTMLAttributes<HTMLButtonElement> {
  isActive?: boolean,
  useFullWidth?: boolean,
}

export const ButtonDefault: FC<IButtonDefaultProps> = (props) => {
  const {className, ...otherProps} = props;

  return (
    <button
      className={clsx([
        styles.buttonBase,
        props.useFullWidth && styles.fullWidth,
        props.isActive && styles.isActive,
        className,
      ])}
      {...otherProps}
    >
      {props.children}
    </button>
  );
};

export default ButtonDefault;