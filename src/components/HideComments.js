import React, { useState } from "react"
import CommentsList from "./CommentsList.js"
import video from "../data/video.js";

const Toggle = () => {
  const [isOn, setIsOn] = useState(false);


const HideComments = () => {
    setIsOn((isOn) => !isOn)
   
  }
  return(
    <div>
    <button>
      <span onClick={HideComments}>
      {isOn ? "Hide Comments" : "Show Comments"}
      </span>
    </button>
    {isOn ? <CommentsList 
    user={video.user}
    comments={video.comments}
    /> : null}
    
  </div>

  )
}
export default Toggle