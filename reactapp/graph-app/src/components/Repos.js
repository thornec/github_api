import React, { useEffect, useState } from 'react';
//import ReactDOM from "react-dom";
import './App.css';
import { Form, FormButton, Statistic } from 'semantic-ui-react';

function repos(){

  /* Create States to store data from GitHub API */
  
  const [full_name, setName] = useState('');
  const [size, setSize] = useState('');
  const [stargazers, setStargazers] = useState('');
  const [watchers, setWatchers] = useState('');
  const [avatar, setAvatar] = useState('');
  const [language, setLanguage] = useState('');
  const [subscribers, setSubscribers] = useState('');
  const [error, setError] = useState(null);
  const [userInput, setUserInput] = useState('');


  /* Function to set the state in app */
  const setData = ({
    full_name, 
    size, 
    stargazers, 
    watchers, 
    avatar_url, 
    language,
    subscribers
   }) => {
   setName(full_name); 
   setSize(size);
   setStargazers(stargazers);
   setWatchers(watchers);
   setAvatar(avatar_url);
   setLanguage(language);
   setSubscribers(subscribers);
 };

  /* useEffect Hook
     -Used to fetch data from GitHub API
     - Takes in a function and dependency array
     - Only ran once
  */
  useEffect(() => {
    fetch('https://api.github.com/repos/example')
    .then(res => res.json())
    .then(data => {
      setData(data);
    });
  }, []);

  /* Function to handle when something is entered into search bar */
  const handleSearch = (e) => {
    setUserInput(e.target.value)
  }
  /* Function to set data */
  const handleSubmit = () => {
    fetch(`https://api.github.com/repos/${userInput}`)
    .then(res => res.json())
    .then(data => {
      if(data.message){
        setError(data.message);
      }
      else{
        setData(data);
        setError(null); //reset
      }
    })

  }


  return (
    <div>

      <div className='search'>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Input placeholder="ownerpoo/repo_name" name="Repository Name" onChange={handleSearch}>

            </Form.Input>

            <FormButton content="Search">

            </FormButton>
          </Form.Group>
        </Form>
      </div> 
      { error ? (<h1>{error}</h1>)
       : (
      <div className="statistics">
      <Statistic>
      <div class="label">
            Repository Name
        </div> 
        <div class="value">
            {full_name}
        </div>
        <hr></hr>
        <div class="label">
            Repo Size
        </div> 
        <div class="value">
            {size}
        </div>
        <hr></hr>
        <div class="label">
            Watchers
        </div>
        <div class="value">
            {watchers}
        </div>
        <hr></hr>
        <div class="label">
        Language
        </div>
        <div class="value">
        {language}
        </div>

    

        </Statistic>

      </div>

      
      )}
      

    </div>
  )


}

export default repos;
