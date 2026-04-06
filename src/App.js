import { useState } from 'react';
import './App.css';

function App() {
  // const [firstName, setFirstName]=useState('');
  // const [lastName, setLastName]=useState('')

  // console.log(firstName);
  // console.log(lastName);
  
  
  // function changefirstNameHandler(event) {
  //   // console.log(Printing first name");
  //   // console.log(event.target.value);
  //   setFirstName(event.target.value);
    
  // }
  // function changelastNameHandler (event) {
  //   // console.log("Printing last name");
  //   // console.log(event.target.value);
  //   setLastName(event.target.value)
  
  const [formData, setFormData]=useState({firstName:"" , lastName:"", email:"", comments:"", isVisible:true, mode:"", favCar:""});
  // console.log(formData.email);
  // console.log(formData);
  
  function changeHandler(event) {
    const {name, value, checked, type}=event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]:type==="checkbox" ? checked : value
      }
    });
  }
  function submitHandler(event) {
    event.preventDefault();
    console.log("yes");
    console.log(formData);
    
    
  }

  return (
    <div className='App'>
      <form onSubmit={submitHandler}>
        <input type='text'
        placeholder='firstName'
        onChange={changeHandler}
        name='firstName'
        value={formData.firstName}/>
        <br/><br/>
        <input type='text'
        placeholder='lastName'
        onChange={changeHandler}
        name='lastName'
        value={formData.lastName}/>

        <br/><br/>
        <input type='email'
        placeholder='enter your email here'
        onChange={changeHandler}
        name='email'
        value={formData.email}/>

      <br/>
      <br/>
      <textarea
      placeholder='enter your comments here'
      onChange={changeHandler}
      name='comments'
      value={formData.comments}
      />

       <br/>
      <br/>

      <input 
      type='checkbox'
      onChange={changeHandler}
      name='isVisible'
      id='isVisible'
      checked={formData.isVisible}
      />
      <label htmlFor='isVisible'>
        Am i visible ?
      </label>

       <br/>
      <br/>

      <fieldset>
        <legend>
          Mode:
          
        </legend>
        <input type='radio'
      onChange={changeHandler}
      name='mode'
      value="Online-Mode"
      id="Online Mode"  
      checked={formData.mode === "Online-Mode"}    
      />


      <lable htmlFor='Offline-Mode'>Online Mode</lable>
      <input type='radio'
      onChange={changeHandler}
      name='mode'
      value="Offline-Mode"
      id="Offline Mode"
      checked={formData.mode === "Offline-Mode"}       
      />


      <lable htmlFor='Offline-Mode'>Offline Mode</lable>
      </fieldset>

       <br/>
      <br/>
      <lable htmlFor="favCar">
        Tell me your Favourite   
      </lable>
      <select
      name="favCar"
        id='favCar'
      onChange={changeHandler}
        >
          <option value="Scorpio">Scorpio</option>
          <option value="Fartuner">Fartuner</option>
          <option value="Thar">Thar</option>
          <option value="Legender">Legender</option>
          <option value="Defender">Defender</option>
          <option value="BMW">BMW</option>
        
      </select>
      <br/>
      <br/>

      <input type='submit' value='submit'/>

      
        
      </form>
    </div>


  );

}
export default App;
