import React from 'react'
import './App.css';
import { Card, Image, Icon } from 'semantic-ui-react';
import userlogo from './userlogo.png';
import { Link } from 'react-router-dom'

const Home = () => (



<div className="card">

    

<Card>
    <hr></hr>
 <Link to='/Repos'><Image src={userlogo} wrapped ui={true}/></Link>
  <Card.Content>
    <Card.Header>conor</Card.Header>
    <Card.Header>thorne</Card.Header>
  </Card.Content>

  <Card.Content extra>
  <a>
    <Icon name='user' />
  </a>
  </Card.Content>
</Card>
<Card>
 <hr></hr>
 <Link to='/Repos'><Image src={userlogo} wrapped ui={true}/></Link>
  <Card.Content>
    <Card.Header>conor</Card.Header>
    <Card.Header>thorne</Card.Header>
  </Card.Content>

  <Card.Content extra>
  <a>
    <Icon name='user' />
  </a>
  </Card.Content>
  </Card>
<hr></hr>
<Card>
 <Link to='/Repos'><Image src={userlogo} wrapped ui={true}/></Link>
  <Card.Content>
    <Card.Header>conor</Card.Header>
    <Card.Header>thorne</Card.Header>
  </Card.Content>

  <Card.Content extra>
  <a>
    <Icon name='user' />
  </a>
  </Card.Content>
 </Card>
</div>

)
export default Home