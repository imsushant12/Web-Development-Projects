import React, { useState } from "react";
import PropTypes from "prop-types";
import "../App.css";

export default function InputForm(props) {
  const [text, setText] = useState("");
  const changeEvent = (event) => {
    setText(event.target.value);
  };

  const upperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const lowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const trimText = () => {
    let newText = text.split(/[ ] + /).join(" ");
    setText(newText);
  };

  const clearText = () => {
    let newText = "";
    setText(newText);
  };

  // reverse case logic!
  const inverseText = () => {
    let newText = (text) =>
      [...text]
        .map((char) =>
          char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
        )
        .join("");

    setText(newText);
  };

  // Capitalize first letter logic!
  const capitalFirst = () => {
    const arr = text.split(" ");

    //loop through each element of the array and capitalize the first letter.
    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }

    //Join all the elements of the array back into a string
    //using a blank space as a separator
    setText(arr.join(" "));
  };

  // Clipboard copying logic!
  const clipboardCopy = () => {
    var copyText = text;
    navigator.clipboard.writeText(copyText);
    props.showAlert("📋Text copied successfully :)");
  };

  // Word counting logic!
  let wordLength = text.split(" ").length;
  if (text === "") wordLength = 0;

  // Length counting logic!
  const re = /[.!?]/;
  let sentences = text.split(re);
  let sentenceCount = sentences.length - 1;

  // reading time logic!
  let readingTime = Math.round(wordLength * 0.008);

  return (
    <>
      <div className="mt-5">
        <label
          htmlFor="myBox font-weight-bold"
          className="myBox text-changer mb-3"
        >
          <h3>{props.title}📝</h3>
        </label>
        <textarea
          className="form-control"
          value={text}
          onChange={changeEvent}
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <div className="text-end">
        <button
          type="submit"
          onClick={clearText}
          className="btn btn-sm mx-3 mb-2 mt-4 fs-5 text-changer btn-danger"
        >
          Clear Text
        </button>
      </div>

      <div>
        <button
          type="submit"
          onClick={upperCase}
          // className="btn btn-sm mx-3 my-2 fs-5 text-primary btn-outline-info"
          className={`btn btn-sm mx-3 my-2 fs-5 text-${
            props.mode === "light" ? "dark" : "light"
          } text-primary btn-outline-info`}
        >
          Convert to UPPERCASE
        </button>

        <button
          type="submit"
          onClick={lowerCase}
          className={`btn btn-sm mx-3 my-2 fs-5 text-${
            props.mode === "light" ? "dark" : "light"
          } text-primary btn-outline-info`}
        >
          Convert to lowercase
        </button>

        <button
          type="submit"
          onClick={trimText}
          className={`btn btn-sm mx-3 my-2 fs-5 text-${
            props.mode === "light" ? "dark" : "light"
          } text-primary btn-outline-info`}
        >
          Remove Extra Spaces
        </button>

        <button
          type="submit"
          onClick={inverseText}
          className={`btn btn-sm mx-3 my-2 fs-5 text-${
            props.mode === "light" ? "dark" : "light"
          } text-primary btn-outline-info`}
        >
          Inverse Text
        </button>

        <button
          type="submit"
          onClick={capitalFirst}
          className={`btn btn-sm mx-3 my-2 fs-5 text-${
            props.mode === "light" ? "dark" : "light"
          } text-primary btn-outline-info`}
        >
          Capitalize Text
        </button>

        <button
          type="submit"
          onClick={clipboardCopy}
          className={`btn btn-sm mx-3 my-2 fs-5 text-${
            props.mode === "light" ? "dark" : "light"
          } text-primary btn-outline-info`}
        >
          Copy Text
        </button>
      </div>
      <div className="container">
        <h4 className="mt-4 text-changer">📜 Summary of your text</h4>
        <span className="mb-4 fs-5 text-changer">
          {readingTime} minute<span className="fs-6">(s)</span> read 📖{" "}
        </span>
        <h6 className="blockquote-footer text-dark mt-2 border bg-info fs-5">
          <span className="blockquote text-dark  fs-5">
            {sentenceCount} <span className="fs-6">Sentence(s)</span> ☝️{" "}
            {wordLength} <span className="fs-6">Word(s)</span> 👆&nbsp;
            {text.length} <span className="fs-6">Character(s)</span>
          </span>
        </h6>

        <h4 className="mt-4 mb-2 text-changer">📖 Preview of your text</h4>
        <p className="text-white border bg-secondary">
          {text.length > 0
            ? text
            : "Enter text in the text-box to see preview!"}
        </p>
      </div>
    </>
  );
}

InputForm.propTypes = {
  title: PropTypes.string,
};
