import React from "react";

export default function Comments(props) {
  let { comments, deleteComment } = props;

  return (
    <div>
      {comments.length < 1 ? (
        <p>Список комментариев пуст!</p>
      ) : (
        comments.map(item => {
          return (
            <div className="comment-item" key={item.id}>
              <div className="comment-item__author">{item.author}</div>
              <div className="comment-item__text">{item.textComment}</div>
              <button
                className="remove-item"
                onClick={() => deleteComment(item.id)}
              >
                X
              </button>
              <div className="comment-item__data">{item.dateComment}</div>
            </div>
          );
        })
      )}
    </div>
  );
}
