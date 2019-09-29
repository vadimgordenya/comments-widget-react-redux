import React from "react";
import Comments from "../components/comments";
import AddComment from "../components/addComment";
import { addComment, deleteComment } from "../actions";
import { connect } from "react-redux";
import "./styles.css";

const CommentsApp = props => {
  return (
    <div className="App">
      <AddComment addComment={props.addComment} />
      <Comments comments={props.comments} deleteComment={props.deleteComment} />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    comments: state
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addComment: (author, textComment) =>
      dispatch(addComment(author, textComment)),
    deleteComment: id => dispatch(deleteComment(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentsApp);
