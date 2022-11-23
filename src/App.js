import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react'
import img from './contact.webp'

function App() {
  const [user, setUsers] = useState(null)
  const [reveal, setReveal] = useState(false)
  const [selected,setSelected] = useState(null)
  useEffect(() => {
    axios.get("https://api.mockaroo.com/api/c31c9cf0?count=10&key=6aac9b50")
      .then(res =>
        setUsers(res.data))
  }, [])
  

  const toggleage = (item) => {
 setSelected(item)
 
  }
  
  return (
    <div className="container">

      {user && user.map((item) => {
        return (<>
          <div className='App'><div id="img"><img id="propic" src={img} /></div>
            <div id="details">
              <p>Name:{item.name}</p>
              <p>Email:{item.email}</p>
              <button onClick={()=>toggleage(item)}>Toggle Age</button>
              <h3>{selected==item?item.age:null}</h3>
            </div></div>
        </>

        )
      })


      }


    </div>
  );
}

export default App;
