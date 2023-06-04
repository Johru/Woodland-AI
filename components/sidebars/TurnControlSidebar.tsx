import React from 'react';
import styles from '../../styles/Layout.module.scss';

export function TurnControlSidebar() {
  return (
    <div className={styles['sidebar']}>
      <h3>Turn Control Sidebar</h3>
      <p>
        This is where the progression of a game turn will be controlled once
        implemented
      </p>
    </div>
  );
}
