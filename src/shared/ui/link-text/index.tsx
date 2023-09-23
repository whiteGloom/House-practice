import React, {FC, HTMLAttributes, PropsWithChildren} from 'react';
import styles from './styles.module.sass';
import clsx from 'clsx';

export interface ILinkTextProps extends PropsWithChildren, HTMLAttributes<HTMLAnchorElement> {
  isActive?: boolean,
}

export const LinkText: FC<ILinkTextProps> = (props) => {
  const {className, ...otherProps} = props;

  return (
    <a
      className={clsx([
        styles.linkBase,
        props.isActive && styles.isActive,
        className,
      ])}
      {...otherProps}
    >
      {props.children}
    </a>
  );
};

export default LinkText;