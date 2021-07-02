import video from "../data/video.js";

import Header from "./Header"
import LikeButton from "./LikeButton"
import DislikeButton from "./DislikeButton"
import Toggle from "./HideComments"
import CommentsList from "./CommentsList";

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameborder="0"
        allowfullscreen
        title="Thinking in React"
      />   
      <Header 
      title={video.title}
      views={video.views}
      createdAt={video.createdAt}
      /> 
      <LikeButton 
      upvotes={video.upvotes}
      /> 
      <DislikeButton 
      downvotes={video.downvotes}
      />
      <div>
      <Toggle />
      </div>
    </div>
    
  );
}

export default App;
