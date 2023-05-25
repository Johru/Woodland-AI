import React from 'react';
import styles from '../styles/Layout.module.scss';

export default function DefaultSidebar() {
  return (
    <div className={styles['sidebar']}>
      <h3>Default sidebar</h3>
      <a>Link 1</a>
      <a>Link 2</a>
      <a>Link 3</a>
      <hr />
      <a>Link 4</a>
      <a>Link 5</a>
      <a>Link 6</a>
    </div>
  );
}
