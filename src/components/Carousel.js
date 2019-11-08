import React from 'react';
import Row from 'react-bootstrap/Row';

import Card from '../components/Card';

import girlsWhoCode from '../assets/images/girlsWhoCode.png';
import ideas from '../assets/images/ideas.png';
import learning from '../assets/images/learning.png';
import Container from 'react-bootstrap/Container';


class Carousel extends React.Component {
    constructor(props){
        super(props);
        this.state={
            items:[
                {
                    id: 0,
                    title: 'LinkedIn',
                    subTitle: '',
                    imgSrc:girlsWhoCode,
                    link:'https://www.linkedin.com/in/sreelekha-srinivasan-369a17142/',
                    selected: false
                },
                {
                    id: 1,
                    title: 'GitHub',
                    subTitle: '',
                    imgSrc:ideas,
                    link:'https://github.com/Sreeeeeeee',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Instagram',
                    subTitle: '',
                    imgSrc:learning,
                    link:'https://www.instagram.com/sreelekha_1993/?hl=en',
                    selected: false
                }
            ]
        }
    }

    handleCardClick = (id,card) => {
        let items=[...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item=> {
            if(item.id !== id){
                item.selected=false;
            }
        });

        this.setState({
            items
        });
    }

    makeItems = (items) =>{
        return items.map(item => {
            return(<Card item={item} click ={(e=> this.handleCardClick(item.id, e))} key= {item.id}/>)
        })
    }

    render()
    {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }
}

export default Carousel;