import React from 'react'
import './profilepage.css'
import Repositories from './Repositories'

function Profilepage(props) {

console.log(props.data);
  return (
    <>
      <div className="userdetails">
        <span className="avatar">

          
          <img src={props.data.avatar_url} alt="" />
        </span>
        <span className="details">
          <div className='name' ><div>{props.data.login}</div> <button onClick={props.resetuser} >Go back?</button></div>
          {props.data.bio ? <div>{props.data.bio}</div> : null}
          {props.data.location ? <div>{props.data.location}</div> : null}
          {props.data.twitter_username ? <div>Twitter: <a href={props.data.twitter_username}> {props.data.twitter_username}</a></div> : null}
          <a href={props.data.html_url}>{props.data.html_url}</a>
        </span>
      </div>
      <div className='repositoriesmain'>
        <Repositories allrepos={props.data.repos_url} num={props.data.public_repos} />
      </div>
      {
            console.log("in profilepage ")
          }

    </>
  )
}

export default Profilepage
