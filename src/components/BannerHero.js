import React from "react"
import {marca} from "../css/bannerhero.module.css"

const Banner = ({ title, title2, title3, title4,info, children }) => {
    return (
      <div className="banner">
        <h1 >{title}<span className={marca}>{title2}</span>{title3}<span className={marca}>{title4}</span></h1>
        <p>{info}</p>
        {children}
      </div>
    )
  }

export default Banner