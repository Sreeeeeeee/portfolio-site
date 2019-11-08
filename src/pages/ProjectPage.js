import React from 'react';

import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Accordion from 'react-bootstrap/accordion';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../App.css';


class ProjectPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            project1: {
                title : 'KnowHub',
                caption:'A Recommendation Engine that drives Knowledge and Asset Reuse in the organization',
                desc:'Extensively customized 2013 SharePoint sites with add on features (such as Customized BI Reports, Gamification, Subscription alerts to Content Types etc.,) that is used for managing and reusing project related assets across BU, accounts and at an organization level.',
                award1:'Winner of Watts Humphrey Awards - 2018',
                award2:'Currently Participating in the MIKE (Most Innovative Knowledge Enterprise) Award for 2019',
                technology: 'Traditional Topology SP2013 with 2010 Designer Workflow powered by Enterprise Search'
            },
            project2: {
                title : 'DECorpus',
                caption:'An application under KnowHub allows user to post, contribute and edit articles related to organizational policies',
                technology:'MVC, HTML/CSS3, SQL'
            },
            project3 : {
                title : 'My Wizard',
                caption:'A recommendation Engine that combines data from multiple applications and provides assets and data based on logged in User’s project',
                technology:'.NET Core application, SharePoint 2013 and SharePoint Online'
            },
            project4 : {
                title : 'Case Study Builder',
                caption:'A sub tool that comes under KnowHub for Content Standardization tool in Creating Case Studies across Organization',
                desc:'',
                technology:'.NET application with SP2013 Document Libraries as backend storage. JSOM with REST API implementation in SharePoint'
            },
        }
    }


    render(){
        return(
        <Accordion defaultActiveKey="0">
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="0" className="card-hdr">
            <h5>{this.state.project1.title} <Badge pill variant="success"> {this.state.project1.award1} </Badge></h5>
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
      <Container className="p-0" fluid={true}>
          <Row className="justify-content-left">
          <Col>
          <h5>{this.state.project1.caption}</h5>
          <br/>
          <h6><i>Technology Used : {this.state.project1.technology}</i></h6>
          <br/>
          <h7>{this.state.project1.desc}</h7>
          <br/>
          <h7>{this.state.project1.award2}</h7>
          <br/>
          <br/>
          <h6><i>Responsibilities : </i></h6>
          <br/>
          <ListGroup variant="flush">
              <ListGroup.Item>•	Customization and Branding of Sites and Custom Feature configuration for sites</ListGroup.Item>
              <ListGroup.Item>•	Custom Webpart Development for a Landing Page</ListGroup.Item>
              <ListGroup.Item>•	Customization of Refiner Display Template</ListGroup.Item>
              <ListGroup.Item>•	Create 2010 workflows using SharePoint designer</ListGroup.Item>
              <ListGroup.Item>•	Manage CSS styling in Web Parts, Page Layouts and master page</ListGroup.Item>
              <ListGroup.Item>•	Provide Assistance to Support team on any Production Issues</ListGroup.Item>
              <ListGroup.Item>•	Co-ordinate with external teams such as Testing, Admin, Functional Owners, Security and Performance teams in case of development activities</ListGroup.Item>
              <ListGroup.Item>•	Issue and Batch Analysis on existing system</ListGroup.Item>
          </ListGroup>
          <br/>
          <h7><i>Value Addd Ons - Reduced Site Storage by creating a batch application that deletes the major/minor version of documents for better performance of sites</i></h7>
          <br/>
          <br/>
          <p>Awards :  <b>‘PAT On the Back’ – 2018</b> award for adaptability and for quick deliverables</p>
          </Col>
          </Row></Container>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="1" className="card-hdr">
    <h5>{this.state.project2.title}</h5>
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="1">
    <Container fluid={true}>
          <Row className="justify-content-left">
          <Col>
          <br/>
          <h5>{this.state.project2.caption}</h5>
          <br/>
          <h6><i>Technology Used : {this.state.project2.technology}</i></h6>
          <br/>
          <h6><i>Responsibilities : </i></h6>
          <br/>
          <ListGroup variant="flush">
              <ListGroup.Item>•	Created Admin functionality for Bulk Upload of Articles</ListGroup.Item>
              <ListGroup.Item>• Built Admin Front End Page with HTML, CSS</ListGroup.Item>
              <ListGroup.Item>• Provided Support on Performance and Testing Sign Offs</ListGroup.Item>
          </ListGroup>
          </Col>
          </Row></Container>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="2" className="card-hdr">
    <h5>{this.state.project3.title}</h5>
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="2">
    <Container fluid={true}>
          <Row className="justify-content-left">
          <Col>
          <br/>
          <h5>{this.state.project3.caption}</h5>
          <br/>
          <h6><i>Technology Used : {this.state.project3.technology}</i></h6>
          <br/>
          <h7>{this.state.project3.desc}</h7>
          <br/>
          <h6><i>Responsibilities : </i></h6>
          <br/>
          <ListGroup variant="flush">
              <ListGroup.Item>•	Created Result Source queries to Integrate KnowHub</ListGroup.Item>
              <ListGroup.Item>•	Involved in Integration of a SP Online site (Amplify)</ListGroup.Item>
              <ListGroup.Item>•	As SP Online and .NET core has compatibility issues, did a POC to port SP Online data with batch to port Data</ListGroup.Item>
          </ListGroup>
          </Col>
          </Row></Container>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="3" className="card-hdr" > 
    <h5>{this.state.project4.title}</h5>
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="3">
    <Container fluid={true}>
          <Row className="justify-content-left">
          <Col>
          <br/>
          <h5>{this.state.project4.caption}</h5>
          <br/>
          <h6><i>Technology Used : {this.state.project4.technology}</i></h6>
          <br/>
          <h7>{this.state.project4.desc}</h7>
          <br/>
          <h6><i>Responsibilities : </i></h6>
          <br/>
          <ListGroup variant="flush">
              <ListGroup.Item>•	Development in both .NET and SharePoint application</ListGroup.Item>
              <ListGroup.Item>•	Development of Approver Screen for uploaded documents</ListGroup.Item>
              <ListGroup.Item>•	Existing sites workflow modification</ListGroup.Item>
              <ListGroup.Item>•	Post Production Support</ListGroup.Item>
              <ListGroup.Item>•	Implemented Code Reusability in the forthcoming CRs for performance tweaks</ListGroup.Item>
          </ListGroup>
          </Col>
          </Row></Container>
    </Accordion.Collapse>
  </Card>
</Accordion>
    )};
}

export default ProjectPage;