import React, { useEffect, useState } from 'react';
//import ReactDOM from "react-dom";
import './App.css';
import { Form, FormButton, Card, Image, Icon } from 'semantic-ui-react';

function App(){

  /* Create States to store data from GitHub API */
  
  const [name, setName] = useState('');
  const [userName, setUsername] = useState('');
  const [followers, setFollowers] = useState('');
  const [following, setFollowing] = useState('');
  const [repos, setRepos] = useState('');
  const [avatar, setAvatar] = useState('');
  const [userInput, setUserInput] = useState('');
  const [error, setError] = useState(null);
  

  /* Function to set the state in app */
  const setData = ({
    name, 
    login, 
    followers, 
    following, 
    public_repos, 
    avatar_url
   }) => {
   setName(name); 
   setUsername(login);
   setFollowers(followers);
   setFollowing(following);
   setRepos(public_repos);
   setAvatar(avatar_url);
 };


  /* useEffecr Hook
     -Used to fetch data from GitHub API
     - Takes in a function and dependency array
     - Only ran once
  */
  useEffect(() => {
    fetch('https://api.github.com/users/example')
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
    fetch(`https://api.github.com/users/${userInput}`)
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
      <h1>Conor's Website</h1>

      <div className='navbar'>
        GitHub API Search Profiles
      </div>

      <div className='search'>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Input placeholder="GitHub Username" name="github user" onChange={handleSearch}>

            </Form.Input>

            <FormButton content="Search">

            </FormButton>
          </Form.Group>
        </Form>

      </div> 
      { error ? (<h1>{error}</h1>)
       : (
      <div className="card">
      <Card>
        <Image src={avatar} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{name}</Card.Header>
          <Card.Header>{userName}</Card.Header>
        </Card.Content>

        <Card.Content extra>
        <a>
          <Icon name='user' />
           {followers} Followers
        </a>
        <a>
          <Icon name='user' />
           {repos} Repos
        </a>
        <a>
          <Icon name='user' />
           {following} Following
        </a>
        </Card.Content>
       </Card>
      </div>
      )}
      

    </div>
  )


}

export default App;
