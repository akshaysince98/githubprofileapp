
import React, { useEffect, useState } from 'react'
import './profilesearch.css'
import axios from 'axios'

function Profilesearch() {

  const [input, setInput] = useState('')
  const [user, setUser] = useState('')
  const [error, setError] = useState('')
  const [data, setData] = useState({})

  const searching = async () => {
    if (input) {
      setUser(input)
    } else {
      setError('Enter a valid username')
    }
  }

  useEffect(() => {
    (async () => {
      if (user) {

        try {
          let res = await axios.get('https://api.github.com/users/' + user)
          setData(res)
          console.log(res.data)

        } catch (err) {
          console.log(err.message)
          setError('Enter a valid username')
          setTimeout(() => {
            setError('')
          }, 3000);
        }
      }
    })()
  }, [user])

  return (

    <>

      {error ?
        <div className='searchbox'>
          <div className="box">
            {error}
            <div className='inputandbutton'>
              <input type="text" onChange={(e) => setInput(e.target.value)} />
              <button onClick={searching} >Search</button>
            </div>
          </div>
        </div>
        :
        <div className='searchbox'>
          <div className="box">

            Enter GitHub Username :
            <div className='inputandbutton'>
              <input type="text" onChange={(e) => setInput(e.target.value)} />
              <button onClick={searching} >Search</button>
            </div>
          </div>
        </div>}

    </>
  )
}

export default Profilesearch 