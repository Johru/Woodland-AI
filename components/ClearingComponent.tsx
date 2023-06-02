import React from 'react';
import styles from '../styles/Board.module.scss';

export default function ClearingComponent(props: any) {
  return (
    <div className={styles[props.color]}>
      <hr />
      Color: {props.color}
      <br />
      Number: {props.index}
      <hr />
    </div>
  );
}
