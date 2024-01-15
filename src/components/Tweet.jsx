import React from "react";
// import Titres from "./Titres";
import isVerified from "../assets/Icons/Verified.svg";
import TweetActions from "./TweetActions";
import Replies from "../assets/Icons/Reply.svg";
import Retweets from "../assets/Icons/Retweet.svg";
import Favorites from "../assets/Icons/React.svg";
import Share from "../assets/Icons/Share.svg";
import Tweets from "/src/assets/tweets-x.json";

export default function Tweet({ Tweet }) {
  return (
    <>
      {Tweets.map((data) => (
        <>
          <div className="Tweet">
            <img className="profile" src={data.author_avatar} />
            <div className="Tweet_content">
              <span className="user">
                {data.source}
                {data.isVerified && <img className="check" src={isVerified} />}
                <span>{data.date}</span>
              </span>
              <p className="tweet_text">{data.text}</p>
              <span className="img-contenair">
                {data.image && <img className="tweet_image" src={data.image} />}
              </span>
              <span className="tweet-action">
                <TweetActions tweetactions="actions">
                  {" "}
                  <img src={Replies} />
                  <span className="actions">{data.replies}</span>
                </TweetActions>
                <TweetActions tweetactions="actions">
                  {" "}
                  <img src={Retweets} />
                  <span>{data.retweets}</span>
                </TweetActions>
                <TweetActions tweetactions="actions">
                  <img src={Favorites} />
                  <span>{data.favorites}</span>
                </TweetActions>
                <TweetActions tweetactions="actions">
                  <img src={Share} />
                  <span>{data.favorites}</span>
                </TweetActions>
              </span>
            </div>
          </div>
        </>
      ))}
    </>
  );
}
