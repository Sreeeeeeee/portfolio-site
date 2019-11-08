import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import Hero from '../components/Hero';
import Content from '../components/Content';


function ContactPage(props){
    return(
        <div>
            <Hero title={props.title}/>
            <Content>
            <Container fluid={true}>
                <Row>
                    <Col>
                    <h6>Mail ID : <h7><a href='mailto:sreesrini72@gmail.com'>sreesrini72@gmail.com</a></h7></h6>
                    <br/>
                    <h6>Call me : <h7>+91-735-846-8893</h7></h6>
                    <br/>
                    </Col>
            </Row>
            </Container>
            </Content>
        </div>
    );
}
export default ContactPage;