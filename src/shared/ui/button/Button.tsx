import classNames from 'classNames';
import styles from './Button.module.scss';
import type { ButtonHTMLAttributes, FC } from 'react';

type Props = {
  theme?: 'text';
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<Props> = ({ className, theme = 'text', ...props }) => {
  return (
    <button
      className={classNames(styles.button, className, styles[theme])}
      {...props}
    />
  );
};

export default Button;