import React from "react"

const LikeButton = ({ upvotes }) => {
  return(
    <button>
      {upvotes}
      <span role="img" aria-label="thumbs up">👍</span>
    </button>
  )
}
export default LikeButton