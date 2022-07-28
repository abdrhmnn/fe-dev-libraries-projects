// packages
import React from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineGithub } from "react-icons/ai";

// img
import RQM_IMG from "../../images/random_quote_machine.svg"

function WrapperRQM() {
  return (
    <div className='wr-rqm'>
      <img src={RQM_IMG} alt="" className='wr-rqm-img' />
      <div className="wr-rqm-deskripsi">
        <h3>Random Quote Machine</h3>
        <p>Create random qoute app that give random qoute and also change color when click a button.</p>
        <Link to="/">
          <button className='wr-rqm-button'><AiOutlineGithub /> View code</button>
        </Link>
        <Link to="/random-quote-machine" className='wr-rqm-visit'>
          Visit project
        </Link>
      </div>
    </div>
  )
}

export default WrapperRQM