import React from "react"

import "./layout.scss"

export default ({ children }) => {
  return (
    <React.Fragment>
      <div className="test">This is from layout component</div>
      <div>{children}</div>
    </React.Fragment>
  )
}
