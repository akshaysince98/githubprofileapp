import { useState } from 'react';
import './App.css';
import Profilepage from './components/Profilepage';
import Profilesearch from './components/Profilesearch';

function App() {

  const [username, setUsername] = useState('')

  return (
    <>
    <div className='mainpage'>

      {
        username ?
        <Profilepage /> :
        <Profilesearch />
      }
      </div>
    </>
  );
}

export default App;
