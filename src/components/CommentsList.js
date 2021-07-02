import React from "react"

const CommentsList = ({comments }) => {
  const CommentsArray = comments.map(commentName => {
    return (
      <div>
    <li>{commentName.comment}</li>
    <li>{commentName.user}</li>
    </div>
  )})
  return (
    <li>{CommentsArray}</li>
  )
}
export default CommentsList