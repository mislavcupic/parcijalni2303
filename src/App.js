import { useState } from 'react';
import './App.css';
import DataDetails from './DataDetails';
import PropTypes from 'prop-types'
import {InputGroup, Form, Button,Container} from 'react-bootstrap'


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
      <Container>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Here goes the username"
          aria-describedby="basic-addon2"
          value={username}
          onChange={(e)=>setUsername(e.target.value.trim())}
        />
        <Button variant="outline-secondary" id="button-addon2" type='submit'>
          SEND DATA
        </Button>
      </InputGroup>
      </Container>
        {/* <input value={username} onChange={(e)=>setUsername(e.target.value.trim())} placeholder="Here GOES the name..."/>
        <button type='submit'>Send data</button> */}
      </form>
      {data&&<DataDetails  data={data} onSendMessage={handleMessage}/>}
     
    </div>
  );
}

export default App;

App.propTypes = {
  data: PropTypes.any
}
