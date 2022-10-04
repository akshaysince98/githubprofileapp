import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Repo from './Repo'
import './repositories.css'

function Repositories(props) {

  const [pagen, setPagen] = useState(1)

  const [reparray, setArray] = useState([])
  const [loading, setLoading] = useState(false)

  let num = props.num
  let i = 1
  let parr = [1]
  while (num > 10) {
    num -= 10
    i++
    parr.push(i)
  }



  useEffect(() => {

    (async () => {
      setLoading(true)
      let alldata = await axios.get(props.allrepos)
      alldata= alldata.data
      let first = (pagen - 1) * 10

      let narr = []
      for (let i = 0; i < 10; i++) {
        narr[i] = alldata[first]
        first++
      }
      console.log(narr)
      setArray(narr)
      setLoading(false)
    })()


  }, [pagen, props.allrepos])


  return (
    <>
      <div className="reps">
        {reparray.map((r, i) => <Repo key={i} data={r} loading={loading} />)}
      </div>
      <div className='pagination'>
        {parr.map((p, i) =>
          <div key={i} className="page" onClick={() => setPagen(p)}>{p}</div>
        )}
      </div>

    </>
  )
}

export default Repositories