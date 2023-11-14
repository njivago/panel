import styles from './NavLink.module.scss';
import classNames from 'classNames';
import { Link, type LinkProps } from 'react-router-dom';
import { type ReactNode } from 'react';
import { NavLinkTheme } from './constants';

type NavLinkProps = {
  theme?: NavLinkTheme;
  className?: string;
  children: ReactNode;
} & LinkProps;

const NavLink = ({ theme = NavLinkTheme.PRIMARY, className, children, ...props }: NavLinkProps) => (
  <Link
    className={classNames(styles.link, className, styles[theme])}
    {...props}
  >
    {children}
  </Link>
);

export default NavLink;