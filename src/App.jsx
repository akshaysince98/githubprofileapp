import { useState } from 'react';
import './App.css';
import Profilepage from './components/Profilepage';
import Profilesearch from './components/Profilesearch';

function App() {
  let x = {
    "login": "akshaysince98",
    "id": 103368747,
    "node_id": "U_kgDOBilIKw",
    "avatar_url": "https://avatars.githubusercontent.com/u/103368747?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/akshaysince98",
    "html_url": "https://github.com/akshaysince98",
    "followers_url": "https://api.github.com/users/akshaysince98/followers",
    "following_url": "https://api.github.com/users/akshaysince98/following{/other_user}",
    "gists_url": "https://api.github.com/users/akshaysince98/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/akshaysince98/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/akshaysince98/subscriptions",
    "organizations_url": "https://api.github.com/users/akshaysince98/orgs",
    "repos_url": "https://api.github.com/users/akshaysince98/repos",
    "events_url": "https://api.github.com/users/akshaysince98/events{/privacy}",
    "received_events_url": "https://api.github.com/users/akshaysince98/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Akshay Yadav",
    "company": null,
    "blog": "",
    "location": "delhi",
    "email": null,
    "hireable": null,
    "bio": "null",
    "twitter_username": "something",
    "public_repos": 14,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2022-04-10T13:14:02Z",
    "updated_at": "2022-09-13T14:49:57Z"
  }

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