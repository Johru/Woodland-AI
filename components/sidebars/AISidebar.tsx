import React from 'react';
import styles from '../../styles/Layout.module.scss';
import Link from 'next/link';
export function AISidebar() {
  return (
    <div className={styles['sidebar']}>
      <h3>AI sidebar</h3>
      <Link href="/AI/new">
        <a>Create new Bot</a>
      </Link>
      <Link href="/AI/test">
        <a>Test API</a>
      </Link>
      <a>Link 2</a>
      <a>Link 3</a>
      <hr />
      <a>Link 4</a>
      <a>Link 5</a>
      <a>Link 6</a>
    </div>
  );
}
