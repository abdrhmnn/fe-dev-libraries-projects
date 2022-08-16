// packages
import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { changeExpandStatus, changeShrinkStatus, updateContent } from "../../redux/markdown_previewer/";
import { marked } from "marked";
// icons
import { FaExpandArrowsAlt } from "react-icons/fa";
import { ImShrink2 } from "react-icons/im";

function MarkdownPreviewer() {
  const { isExpand, isShrink, content } = useSelector(state => state.mp)
  const dispatch = useDispatch()

  return (
    <div className="mp">
      <Link to="/">
        Back to home
      </Link>
      <div className={isShrink ? "removeTxt" : ""}>
        <div className="head-editor">
          <div className="logo">
            <h4>Editor</h4>
          </div>
          <div className="icon-markdown" onClick={() => dispatch(changeExpandStatus())}>
            {isExpand ? <ImShrink2 /> : <FaExpandArrowsAlt />}
          </div>
        </div>
        <textarea id="editor" name="expand" value={content} className={isShrink ? "removeTxt" : isExpand ? "txt-expand show-expand" : "txt-expand"} onChange={(e) => dispatch(updateContent(e.target.value))} rows="9"></textarea>
      </div>

      <div className={isExpand ? "removeTxt" : "wrap-content-prieviewer"}>
        <div
          className="head-previewer"
          style={isShrink ? {
            marginTop: 0
          } : {
            marginTop: 30
          }}>
          <div className="logo">
            <h4>Previewer</h4>
          </div>
          <div className="icon-markdown" onClick={() => dispatch(changeShrinkStatus())}>
            {isShrink ? <ImShrink2 /> : <FaExpandArrowsAlt />}
          </div>
        </div>
        <Previewer markdown={content}/>
      </div>

      <div className={isExpand ? "removeTxt" : "footer"}>
        <p>Created by. Abdurrahman</p>
      </div>
    </div>
  )
}

const Previewer = ({ markdown }) => {
  const renderer = new marked.Renderer();
  marked.setOptions({
    breaks: true
  })

  return (
    <div
      id="preview"
      dangerouslySetInnerHTML={{
        __html: marked(markdown, { renderer: renderer })
      }}
    ></div>
  )
}

export default MarkdownPreviewer