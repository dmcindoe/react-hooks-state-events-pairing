import React from "react"

const Header = ({title, views, createdAt }) => {
  return (
    <div>
    <h1>{title}</h1>
    <h3>{views} Views</h3>
    <h3>Uploaded {createdAt}</h3>
    </div>
  )
}
export default Header