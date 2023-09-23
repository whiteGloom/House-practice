import React, {FC, HTMLAttributes, PropsWithChildren} from 'react';
import styles from './styles.module.sass';
import clsx from 'clsx';

export interface IButtonRoundedProps extends PropsWithChildren, HTMLAttributes<HTMLButtonElement> {
  isActive?: boolean,
  useFullWidth?: boolean,
}

export const ButtonRounded: FC<IButtonRoundedProps> = (props) => {
  const {className, ...otherProps} = props;

  return (
    <button
      className={clsx([
        styles.buttonBase,
        props.useFullWidth && styles.fullWidth,
        props.isActive && styles.active,
        className,
      ])}
      {...otherProps}
    >
      {props.children}
    </button>
  );
};

export default ButtonRounded;