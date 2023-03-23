import { useState } from 'react';
import './App.css';
import DataDetails from './DataDetails';
import PropTypes from 'prop-types'



function App() {
  const [username,setUsername] = useState ('')
  const [data,setData] = useState();

  const handleSubmit =  (e) =>{
    e.preventDefault();
    
    const url = `https://api.github.com/users/${username}`
    
    fetch(url).then(res => res.json()).then(newData=>setData(newData)).catch(error=>console.log(error));
     console.log(data);
    
    setUsername('');
    

  }

  const handleMessage = (id,login,bio) => {
   console.log(id);
   console.log(login);
   console.log(bio);
  }
   
  

    
   



  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input value={username} onChange={(e)=>setUsername(e.target.value.trim())} placeholder="Here GOES the name..."/>
        <button type='submit'>Send username...</button>
      </form>
      {data&&<DataDetails  data={data} onSendMessage={handleMessage}/>}
    </div>
  );
}

export default App;

App.propTypes = {
  data: PropTypes.any
}
