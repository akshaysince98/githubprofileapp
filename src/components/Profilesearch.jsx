import React from 'react'
import './profilesearch.css'

function Profilesearch() {
  return (
    <div className='searchbox'>
      <div className="box">

        Enter GitHub Username :
        <div className='inputandbutton'>
          <input type="text" />
          <button>Search</button>
        </div>
      </div>
    </div>
  )
}

export default Profilesearch
