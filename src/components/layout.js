import React from "react"

export default ({ children }) => {
  return (
    <React.Fragment>
      <div>This is from layout component</div>
      <div>{children}</div>
    </React.Fragment>
  )
}
