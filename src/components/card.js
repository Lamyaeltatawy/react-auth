import React from 'react';
import classes from './card.module.css';

function Card(props) {
  return (
    <div className={classes.container}>
      <div className={classes.card}>
        <div className={classes.header}>
          <h2>{props.Title}</h2>
        </div>
       
      </div>
    </div>
  )
}

export default Card;
