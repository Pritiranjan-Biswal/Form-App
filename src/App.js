import { useState } from 'react';
import './App.css';

function App() {
  const [firstName, setFirstName]=useState('');
  const [lastName, setLastName]=useState('')

  console.log(firstName);
  console.log(lastName);
  
  
  function changefirstNameHandler(event) {
    // console.log("Printing first name");
    // console.log(event.target.value);
    setFirstName(event.target.value);
    
  }
  function changelastNameHandler (event) {
    // console.log("Printing last name");
    // console.log(event.target.value);
    setLastName(event.target.value)
  }
  return (
    <div className='App'>
      <form>
        <input type='text'
        placeholder='first-name'
        onChange={changefirstNameHandler}/>
        <br/><br/>
        <input type='text'
        placeholder='last-name'
        onChange={changelastNameHandler}/>



        
      </form>
    </div>
  );
}

export default App;
