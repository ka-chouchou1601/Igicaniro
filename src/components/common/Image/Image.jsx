import React,{Fragment} from 'react'
import classes from './Image.module.css'
import pic1 from "../../../pictures/pic1.jpg";

const Image = () => {
  return (
    <Fragment>
      <div className={classes.image}>
        <img src={pic1} alt="" />
      </div>
      <div className={classes.text}>
        <h4> Urukundo </h4>
      </div>
      <div className={classes.tExt}>
        <h5>Ruturanze </h5>
      </div>
    </Fragment>
  );
}

export default Image