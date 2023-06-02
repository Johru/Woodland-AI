import React from 'react';

export default function ClearingComponent(props: any) {
  return (
    <div>
      <hr />
      Color: {props.color}
      <br />
      Number: {props.index}
      <hr />
    </div>
  );
}
