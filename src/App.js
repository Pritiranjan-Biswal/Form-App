import { useState } from 'react';
import './App.css';

function App() {
  // const [firstName, setFirstName]=useState('');
  // const [lastName, setLastName]=useState('')

  // console.log(firstName);
  // console.log(lastName);
  
  
  // function changefirstNameHandler(event) {
  //   // console.log("Printing first name");
  //   // console.log(event.target.value);
  //   setFirstName(event.target.value);
    
  // }
  // function changelastNameHandler (event) {
  //   // console.log("Printing last name");
  //   // console.log(event.target.value);
  //   setLastName(event.target.value)
  
  const [formData, setFormData]=useState({firstName:"" , lastName:"", email:""});
  
  function changeHandler(event) {
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [event.target.name]:event.target.value
      }
    });
  }


  return (
    <div className='App'>
      <form>
        <input type='text'
        placeholder='first-name'
        onChange={changeHandler}
        name='first-Name'/>
        <br/><br/>
        <input type='text'
        placeholder='last-name'
        onChange={changeHandler}
        name='last-Name'/>

        <br/><br/>
        <input type='email'
        placeholder='enter your email here'
        onChange={changeHandler}
        name='email'/>



        
      </form>
    </div>
  );

}
export default App;
