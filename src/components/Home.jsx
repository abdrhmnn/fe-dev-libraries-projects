import React from "react";
import Wrapper from "../wrapper/Wrapper";

// img
import RQM_IMG from "../images/random_quote_machine.svg"
import MP_IMG from "../images/markdown_previewer.svg"

function Home() {
  return (
    <div className="home">
      <h2>Front End Development Libraries Projects FreeCodeCamp</h2>
      <div className="grid-item">
        <Wrapper
          img={RQM_IMG}
          judul="Random Quote Machine"
          deskripsi="Create random qoute app that give random qoute and also change color when click a button."
          urlGithub=""
          urlProject="/random-quote-machine"
        />
        <Wrapper
          img={MP_IMG}
          judul="Markdown Previewer"
          deskripsi="Create a markdown in the editor that can be viewed on previewer
          section."
          urlGithub=""
          urlProject="/markdown-previewer"
        />
        <Wrapper
          img={RQM_IMG}
          judul="Random Quote Machine"
          deskripsi="Create random qoute app that give random qoute and also change color when click a button."
          urlGithub=""
          urlProject="/random-quote-machine"
        />
      </div>
    </div>
  )
}

export default Home