// packages
import React from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineGithub } from "react-icons/ai";

function Wrapper({ img, judul, deskripsi, urlGithub, urlProject }) {
  return (
    <div className='wr'>
      <img src={img} alt="" className='wr-img' />
      <div className="wr-deskripsi">
        <h3>{judul}</h3>
        <p>{deskripsi}</p>
        <a href={urlGithub} target="_blank" rel="noreferrer">
          <button className='wr-button'><AiOutlineGithub style={{ marginRight: "5px"}}/>See on github</button>
        </a>
        <Link to={urlProject} className='wr-visit'>
          Visit project
        </Link>
      </div>
    </div>
  )
}

export default Wrapper