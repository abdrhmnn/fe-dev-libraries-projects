// packages
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { randomColors, randomQuote, loadingDataQuote } from "../../redux/random_q_machine/";
import { Link } from "react-router-dom";
// icons
import { AiOutlineTwitter } from "react-icons/ai";
import { GrTumblr } from "react-icons/gr";
import { FaQuoteLeft } from "react-icons/fa";

function RandomQuoteMachine() {
  const { bgcolor, quote, isPending } = useSelector(state => state.rqm)
  const dispatch = useDispatch()
  const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]

  useEffect(() => {
    document.title = "Random Quote Machine"
    randomDataQuote();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const randomBgColors = () => {
    let hexColor = "#"
    for(let i = 0; i < 6; i++){
      hexColor += colors[Math.floor(Math.random() * colors.length)]
    }
    dispatch(randomColors(hexColor))
  }

  const randomDataQuote = () => {
    fetch('https://api.quotable.io/random')
    .then(response => {
      if(!response.ok){
        throw Error('Quote data is empty')
      }
      return response.json()
    })
    .then(response => {
      randomBgColors();
      dispatch(randomQuote(response))
      dispatch(loadingDataQuote())
    })
    .catch(error => {
      console.error('Something wrong happen!', error.message);
    })
  }

  const handleClick = (e) => {
    e.preventDefault()
    randomDataQuote();
  }

  return (
    <div className="rqm" style={{ backgroundColor: bgcolor }}>
      {isPending && <p>Loading...</p>}
      {quote && (
        <div id="quote-box">
          <div id="text" style={{ color: bgcolor }}>
            <FaQuoteLeft size={30} style={{ marginRight: 20 }}/>
            <span>{quote.content}</span>
          </div>
          <div id="author">
            <p>- {quote.author}</p>
          </div>
          <div className="flex-btn">
            <div className="flex-social-media">
              <div id="tweet-quote" style ={{ backgroundColor: bgcolor }}>
                <a href="https://twitter.com/intent/tweet" target="_blank" rel="noreferrer">
                  <AiOutlineTwitter size={25} color="#fff"/>
                </a>
              </div>
              <div id="tumblr-quote" style ={{ backgroundColor: bgcolor }}>
                <GrTumblr size={20} color="#fff" onClick={() => alert('Does not work!')}/>
              </div>
            </div>
            <div id="new-quote">
              <button onClick={handleClick} style={{ backgroundColor: bgcolor }}>new quote</button>
            </div>
          </div>
          <div className="rqm-footer">
            <Link to="/">
              Back to home
            </Link>
            <p>Created by. Abdurrahman</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default RandomQuoteMachine