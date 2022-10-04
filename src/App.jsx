import { useState } from 'react';
import './App.css';
import Profilepage from './components/Profilepage';
import Profilesearch from './components/Profilesearch';

function App() {

  const [username, setUsername] = useState('')
  const [data, setData] = useState({})

  const datasetting = (pd) => {
    setUsername(pd.login)
    let x = {
      login: pd.login,
      bio: pd.bio,
      twitter_username: pd.twitter_username,
      html_url: pd.html_url,
      avatar_url: pd.avatar_url,
      repos_url: pd.repos_url,
      public_repos: pd.public_repos
    }

    setData(x)
  }

  const resetuser = () => {
    setUsername('')
  }

  return (
    <>
      <div className='mainpage'>

        {
          username ?
            <Profilepage data={data} resetuser={resetuser} /> :
            <Profilesearch datasetting={datasetting} />
        }
      </div>
    </>
  );
}

export default App;