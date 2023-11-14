import styles from './Sidebar.module.scss';
import classNames from 'classNames';
import { FC, useState } from 'react';
import { Button } from 'shared/ui';

type Props = {
  className?: string;
};

const Sidebar: FC<Props> = ({ className = '' }) => {
  const [isCollapsed, setIsCollpased] = useState(true);

  const onToggle = () => setIsCollpased(prev => !prev);

  return (
    <div className={classNames(styles.sidebar, className, { [styles.collapsed]: isCollapsed })}>
      <Button onClick={onToggle}>Toggle</Button>
    </div>
  )
}

export default Sidebar;