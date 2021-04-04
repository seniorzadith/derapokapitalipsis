import React from "react"
import {marca} from "../css/bannerhero.module.css"

const Banner = ({ title, title2, title3, info, children }) => {
    return (
      <div className="banner">
        <h1 >{title}<span className={marca}>{title2}</span>{title3}</h1>
        <p>{info}</p>
        {children}
      </div>
    )
  }

export default Banner