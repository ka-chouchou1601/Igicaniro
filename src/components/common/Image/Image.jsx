import React from 'react'
import classes from './Image.module.css'
import pic1 from "../../../pictures/pic1.jpg";

const Image = () => {
  return (

      <div className={classes.image}>
        <img src={pic1} alt="" />
      </div>
  
  );
}

export default Image