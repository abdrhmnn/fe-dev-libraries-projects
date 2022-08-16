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
        <Link to={urlGithub} target="_blank">
          <button className='wr-button'><AiOutlineGithub /> View code</button>
        </Link>
        <Link to={urlProject} className='wr-visit'>
          Visit project
        </Link>
      </div>
    </div>
  )
}

export default Wrapper