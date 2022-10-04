import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import './repo.css'

function Repo(props) {

  const [loading, setLoading] = useState(props.loading)

  let langarr = ["JavaScript", "CSS", "HTML"]

  useEffect(() => {
    (async () => {
      if (props.data) {

        setLoading(true)
        let langs = await axios.get(props.data.languages_url)
        // let langs = {
        //   "JavaScript": 8977,
        //   "CSS": 3409,
        //   "HTML": 694
        // }
        let i = 0
        for (let key in langs) {
          langarr[i] = key
          // console.log(key)
          i++
        }
        setLoading(false)
      }
    })()
  }, [])


  return (
    <>
      {
        !props.data ? null :
          loading ? <div className='repo'>
            <div>
              Loading...
            </div>
          </div> :
            <a href={props.data.html_url} className="repo">
              <div className="reponame">{props.data.name}</div>
              <span>Description :</span> <span className="description">{props.data.description}</span>
              <div className='langmain'>
                {langarr.map((l, i) => {
                  return <span key={i} className="language">{l}</span>
                })}
              </div>

            </a>
      }
    </>


  )
}

export default Repo
