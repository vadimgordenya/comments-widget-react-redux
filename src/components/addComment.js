import React from "react";

export default function AddComment(props) {
  const addNewComment = event => {
    const inputvalue = event.target.parentNode.childNodes[0].value;
    const textareaValue = event.target.parentNode.childNodes[1].value;

    inputvalue === ""
      ? (event.target.parentNode.childNodes[0].style.border = "1px solid red")
      : (event.target.parentNode.childNodes[0].style.border =
          "1px solid green");

    textareaValue === ""
      ? (event.target.parentNode.childNodes[1].style.border = "1px solid red")
      : (event.target.parentNode.childNodes[1].style.border =
          "1px solid green");

    if (inputvalue !== "" && textareaValue !== "") {
      props.addComment(inputvalue, cutTegs(textareaValue));
      event.target.parentNode.childNodes[0].value = "";
      event.target.parentNode.childNodes[1].value = "";
      event.target.parentNode.childNodes[0].style.borderColor = "grey";
      event.target.parentNode.childNodes[1].style.borderColor = "grey";
    }
  };

  const cutTegs = str => {
    let regex = /(|<([^>]+)>)/gi,
      result = str.replace(regex, "");

    return result;
  };

  return (
    <div className="add-comment-wrapper">
      <input type="text" placeholder="Автор комментария" />
      <textarea placeholder="Текст комментария" />
      <button className="add-comment-btn" onClick={e => addNewComment(e)}>
        Добавить комментарий
      </button>
    </div>
  );
}
