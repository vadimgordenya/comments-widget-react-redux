export const addComment = (author, textComment) => {
  return {
    type: "ADD_COMMENT",
    id:
      "_" +
      Math.random()
        .toString(36)
        .substr(2, 9),
    author,
    textComment
  };
};

export const deleteComment = id => {
  return {
    type: "DELETE_COMMENT",
    id
  };
};
