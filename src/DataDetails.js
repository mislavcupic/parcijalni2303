import React from 'react'
import PropTypes from 'prop-types'
import {Table,Button} from 'react-bootstrap'
import { useState } from 'react';

export default function DataDetails( {data, onSendMessage}) {
   const [message,setMessage]=useState('');

    const handleSendMessage = () =>{
        onSendMessage(data.id,data.login,data.bio);
        const newMes = 'Pogledajte u konzolu :)'
        setMessage(newMes)
        return message;
        
    }

   
  return (
    <div>
      {/* {data.map((d)=> {return (<ul key={d.id}> {d.login}  {d.id}  {d.avatar_url} </ul>)})} */}


        
        <Table striped bordered hover variant="dark">
      <thead>
        <tr>
        <th>LOGIN
            <tr>{data.login}</tr>
        </th>
        <th>AVATAR_URL
            <tr>{data.avatar_url}</tr>
        </th>
        <th>BIO<tr>
        {data.bio}</tr></th>
        <th>LOCATION<tr>
        {data.location}</tr></th>
        </tr>
      </thead>
        </Table>   
      
        <Button variant="outline-dark" onClick={handleSendMessage}>Send Message to App</Button>
        <br/>
        <hr></hr>
        
        {message}

      
     
     
     
    </div>
  )
  }
  DataDetails.propTypes = {
  
    onSendMessage: PropTypes.func,
   
}