import React from "react";
import WrapperRQM from "../wrapper/random_q_machine/WrapperRQM"

function Home() {
  return (
    <div className="home">
      <h2>Front End Development Libraries Projects FreeCodeCamp</h2>
      <div className="grid-item">
        <WrapperRQM />
        <WrapperRQM />
        <WrapperRQM />
        {/* <WrapperRQM /> */}
      </div>
    </div>
  )
}

export default Home