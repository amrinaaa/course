import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Post() {
  let { id } = useParams();
  const [postObject, setPostObject] = useState({});
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    // Fetch post data
    axios.get(`http://localhost:3001/posts/byId/${id}`).then((response) => {
      setPostObject(response.data);
    });

    // Fetch comments data
    axios.get(`http://localhost:3001/comments/${id}`).then((response) => {
      setComments(response.data);
    });
  }, [id]);

  const handleAddComment = () => {
    axios.post("http://localhost:3001/comments", {
      commentBody: newComment,
      PostId: id},
      {
        headers: {
          accessToken: sessionStorage.getItem("accessToken"),
      }
    }).then(response => {
      if (response.data.error) {
        console.log(response.data.error);

      } else {
      const commentToAdd = {commentBody: newComment};
      setComments([...comments, response.data]); // Add new comment to state
      setNewComment(""); // Clear input field
    }
    });
  };

  return (
    <div className="postPage">
      <div className="leftSide">
        <div className="post" id="individual">
          <div className="title">{postObject.title}</div>
          <div className="body">{postObject.postText}</div>
          <div className="footer">{postObject.username}</div>
        </div>
      </div>
      <div className="rightSide">
        <div className="addCommentContainer">
          <input
            type="text"
            placeholder="Comment..."
            autoComplete="off"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <button onClick={handleAddComment}>Add Comment</button>
        </div>
        <div className="ListOfComments">
          {comments.map((comment, key) => (
            <div key={key} className="comment">{comment.commentBody}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Post;
