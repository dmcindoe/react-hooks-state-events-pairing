import React from "react"

const DislikeButton = ({ downvotes }) => {
  return(
    <button>
      {downvotes}
      <span role="img" aria-label="thumbs down">👎</span>
    </button>
  )
}
export default DislikeButton