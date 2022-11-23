import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react'
import Card from './Card'

function App() {
  const [user, setUsers] = useState(null)

  useEffect(() => {
    axios.get("https://dummyjson.com/users")
      .then(res => {
        console.log(res.data.users)
        setUsers(res.data.users)
  })
  }, [])

return (
  <div className="container">

    {user && user.map((item, index) => {
      return <Card key={index} name={item.firstName} email={item.email} age={item.age} img={item.image}></Card>
    })
    }
  </div>
);
}

export default App;
