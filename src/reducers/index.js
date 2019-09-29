const comments = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_COMMENT":
      const { id, author, textComment } = action;
      let arrAfterAddNewComment = [
        ...state,
        {
          id,
          author,
          textComment
        }
      ];
      localStorage.setItem(
        "commentsJSON",
        JSON.stringify(arrAfterAddNewComment)
      );
      return arrAfterAddNewComment;
    case "DELETE_COMMENT":
      const arrAfterDeleteComment = [
        ...state.filter(comment => comment.id !== action.id)
      ];
      localStorage.setItem(
        "commentsJSON",
        JSON.stringify(arrAfterDeleteComment)
      );
      return arrAfterDeleteComment;
    default:
      return state;
  }
};

export default comments;
