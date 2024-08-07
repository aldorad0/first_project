import React from "react";
import styles from "./Button.module.scss"
import classNames from "classnames";

const Button = ({children, ...props}) => {
  
  const buttonClass = classNames(styles.button);

  
  
  return (
    <button className={buttonClass}{...props}>  
    {children} 
    </button>
  )
}

export default Button;