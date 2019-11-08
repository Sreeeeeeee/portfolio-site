import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import './App.css';


import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import ProjectPage from './pages/ProjectPage';
import ContactPage from './pages/ContactPage';

class App extends React.Component{
  
  constructor(props)
  {
    super(props);
    this.state={
      title: 'Sreelekha Srinivasan',
      headerLinks:[
        { title: 'Home', path:'/'},
        { title: 'About', path:'/about'},
        { title: 'Contact', path:'/contact'}
      ],
      home: {
        title: '404 Not Found. (Kadal la ye ilayam)',
        caption: 'With Great Coding Skills comes Great Errors',
        text: 'Scroll down to Stalk me'
      },
      about: {
        title: 'About Me'
      },
      contact: {
        title: 'Call Me.. Maybe?'
      }
    }
  }

  
  render(){
    return (
    <Router>
      <Container className="p-0" fluid={true}>
        <Navbar className="border-bottom" bg="transparent" expand="lg">
          <Navbar.Brand><Link className="nav-link nav-link1" to="/">Sreelekha Srinivasan</Link></Navbar.Brand>
          <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
          <Navbar.Collapse id="navbar-toggle">
            <Nav className="ml-auto">
              <Link className="nav-link nav-link1" to="/">Home</Link>
              <Link className="nav-link nav-link1" to="/about">About</Link>
              <Link className="nav-link nav-link1" to="/projects">Projects</Link>
              <Link className="nav-link nav-link1" to="/contact">Contact</Link>

            </Nav>
            </Navbar.Collapse>
        </Navbar>
        <Route path="/" exact render={() => <HomePage title={this.state.home.title} caption={this.state.home.caption} text={this.state.home.text}/>}/>
        <Route path="/about" exact render={() => <AboutPage title={this.state.about.title}/>}/>
        <Route path="/projects" exact render={() => <ProjectPage/>}/>
        <Route path="/contact" exact render={() => <ContactPage title={this.state.contact.title}/>}/>
        <Footer/>
      </Container>
    </Router>
  );
  }
}

export default App;
