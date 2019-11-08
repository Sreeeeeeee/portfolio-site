import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/ButtonToolbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import Hero from '../components/Hero';
import Content from '../components/Content';


function AboutPage(props){
    return(
        <div>
            <Hero title={props.title}/>
            <Content>
                <p>With nearly 5 years of experience in the IT industry,  I've upskilled to be a Sharepoint Developer with experience of 3 years. Worked both as a SharePoint and .NET Developer</p>

                <p>I am a quick learner and an early adapter and currently learning Sharepoint Online and React</p>

                <p><b><i>Short Term Goals:</i></b> To become a Sharepoint Architect, and provide optimized solution for business needs</p>

                <p><b><i>Long Term Goals:</i></b> To branch out as an O365/M365 Developer and be updated with the current IT Trends</p>
                <br/>
                <p><b><i>Skills & Tools</i></b></p>

                <p><i>Languages :</i> Sharepoint Object Models, C#, SQL, HTML/CSS, Stored Procedures, Javascript/jQuery</p>
                <p><i>Technologies :</i> Sharepoint, .NET</p>
                <p><i>RDBMS :</i> MS SQL Server 2008 R2/2012 R2</p>
                <p><i>Development Tools :</i> Visual Studio, SharePoint Designer, SQL Server Management Studio, Visual Studio Code</p>
            </Content>

            <Container  className="justify-content-md-center"><Row>
                    <Col>
                    <Button variant="light" href="https://github.com/Sreeeeeeee/Resume/raw/master/Resume.pdf">Download My Resume</Button>
                    </Col></Row></Container>
        </div>
    );
}
export default AboutPage;