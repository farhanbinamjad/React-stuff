import React from 'react'
import style from './results.module.css';

function Results({title,image}) {
  
    return (
        <div className={style.result}>
            <h1 className={style.title}>{title}</h1>
            <img className={style.image} src={image} alt=""></img>
        </div>
    )
}

export default Results


