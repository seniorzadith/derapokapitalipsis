import React from "react"
import styled from "styled-components"

const Title = ({ title, subtitle, className }) => {
  return (
    <div className={className}>
      <h4>
        <span className="title">{title}</span>
        <span>{subtitle}</span>
      </h4>
    </div>
  )
}

export default styled(Title)`
  text-transform: uppercase;
  font-size: 2.1rem;
  margin-bottom: 2rem;
  h4 {
    text-align: center;
    letter-spacing: 5px;
    color: var(--primaryColor);
  }
  .title {
    color: var(--mainBlack);
  }
  span {
    display: inline-flex;
  }
  @media (max-width: 576px) {
    span {
      display: block;
      margin: 0 0.35rem;
      line-height:2.7rem;
    }
  }
  @media (min-width: 576px) {
    span {
      display: inline-flexbox;
      margin: 0 0.35rem;
    }
  }
`
