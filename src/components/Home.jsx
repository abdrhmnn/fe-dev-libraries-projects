import React from "react";
// components
import Wrapper from "../wrapper/Wrapper";
// img
import RQM_IMG from "../images/q.png"
import MP_IMG from "../images/w.png"

function Home() {
  return (
    <div className="home">
      <h2>Front End Development Libraries Projects FreeCodeCamp</h2>
      <div className="flex-item">
        <Wrapper
          img={RQM_IMG}
          judul="Random Quote Machine"
          deskripsi="Create random qoute app that give random qoute and also change color when click a button."
          urlGithub="https://github.com/abdrhmnn/fe-dev-libraries-projects"
          urlProject="/random-quote-machine"
        />
        <Wrapper
          img={MP_IMG}
          judul="Markdown Previewer"
          deskripsi="Create a markdown in the editor that can be viewed on previewer
          section."
          urlGithub="https://github.com/abdrhmnn/fe-dev-libraries-projects"
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
      <p>Created by. Abdurrahman</p>
    </div>
  )
}

export default Home