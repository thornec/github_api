import React from 'react'
import './App.css';
import { Card, Image, Icon } from 'semantic-ui-react';
import userlogo from './userlogo.png';
import facebook from './facebook.png';
import { Link } from 'react-router-dom'

const Home = () => (



<div className="card">

    
<hr></hr>
<Card>
    <hr></hr>
 <Link to='/user'><Image src={userlogo} wrapped ui={true}/></Link>
  <Card.Content>
    <Card.Header>Search Users</Card.Header>
  </Card.Content>

  <Card.Content extra>
  <a>
    Search any user profile on GitHub!
  </a>
  </Card.Content>
</Card>
<hr></hr>
<Card>
 <Link to='/Repos'><Image src={facebook} wrapped ui={true}/></Link>
  <Card.Content>
    <Card.Header>Search Repositories</Card.Header>
  </Card.Content>

  <Card.Content extra>
  <a>
    Search any repository on GitHub!
  </a>
  </Card.Content>
  </Card>
<hr></hr>
</div>

)
export default Home