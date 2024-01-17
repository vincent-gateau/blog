import React, { useState } from 'react';

const Comment = ({ comments, articleId }) => {
  const [newComment, setNewComment] = useState('');
  const [showComments, setShowComments] = useState(false); // État pour afficher ou masquer les commentaires

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handlePostComment = () => {
    if(newComment !== '') {
      fetch('http://localhost:3050/commentaires/create', {
          method: 'POST',
          body: JSON.stringify({ content: newComment, article_id: articleId }),
          headers: {
            "Authorization": localStorage.getItem('token'),
            "Content-Type": "application/json",
          }
        });
    }
  };

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  return (
    <div className="py-4">
      <button
        onClick={toggleComments}
        className="text-blue-500 cursor-pointer"
      >
        {showComments ? 'Cacher les commentaires' : 'Afficher les commentaires'}
      </button>
      {showComments && (
        <>
          <ul className="space-y-2">
            {comments.map((comment, index) => (
              <li
                key={index}
                className="flex items-center space-x-2 text-sm font-semibold text-gray-700"
              >
                <span className="text-blue-500">@{comment.user.username}</span>
                <p style={{marginLeft: "10px"}}>{comment.content}</p>
              </li>
            ))}
          </ul>
          <div className="flex mt-2">
            <input
              type="text"
              placeholder="Ajouter un commentaire..."
              value={newComment}
              onChange={handleCommentChange}
              className="flex-grow border border-gray-300 rounded-l p-2"
            />
            <button
              onClick={handlePostComment}
              className="bg-blue-500 text-white px-4 rounded-r"
            >
              Poster
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Comment;
