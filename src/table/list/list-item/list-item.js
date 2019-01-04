import React from 'react';
import './list-item.css';

export function ListItem(props) {
  return (
    <tr>
      <td className={!props.stocked ? 'unstocked-item' : ''}>{props.name}</td>
      <td>{props.price}</td>
    </tr>
  );
}