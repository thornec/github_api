import React, { useEffect, useState } from 'react';
//import ReactDOM from "react-dom";
import './App.css';
import { Form, FormButton, Card, Image, Icon } from 'semantic-ui-react';

function user(){

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
  const githubAPI = "https://api.github.com";
  const commitsEndpoint = "/repos/facebook/react/commits?simple=yes&per_page=100&page=1";
  var commitsURL = githubAPI+commitsEndpoint;
  var names =[];
  
  /* Async Function to search all commiters from an entire year of a repo */
  async function getCommits(){
    
    /* Compute Query URL */
    const githubAPI = "https://api.github.com";
    const commitsEndpoint = "/repos/facebook/react/commits?simple=yes&per_page=100&page=1";

    var commitsURL = githubAPI+commitsEndpoint;

    /* Array to store contributors */
    var names = [];

    /* Code to get link page */
    fetch(commitsURL, names)
        .then(response => response.json())
        .then(commits => {
            for (var i = 0; i < commits.length; i++) {
                if (!names.includes(commits[i].commit.author.name)){  
                    names.push(commits[i].commit.author.name);
                    console.log(commits[i].commit.author.name + i);
                    
                }
            }
         
    });
  }


  return (
    <div>
    

    getCommits();
      <div className='search'>
        <Form onSubmit={handleSubmit} >
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

export default user;
