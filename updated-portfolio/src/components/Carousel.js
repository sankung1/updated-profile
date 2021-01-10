import React,{Component} from "react";
import {Container, Row} from "react-bootstrap";

import traveler from "../assests/images/traveler.png";
import planner from "../assests/images/planner.png";
import dayPlanner from "../assests/images/dayPlanner.png";
import Card from "./Card";




class Carousel extends Component {

    constructor(props){
        super(props);
        this.state = {
            items:[
                {
                    id: 0,
                    title: "The Traveler's Memoir",
                    subTitle: "A hub where traveler's share their experiences",
                    imgSrc: traveler,
                    demo: "https://project-2-vasd.herokuapp.com/",
                    repo: "https://github.com/sankung1/project-2",
                    selected: false,
                },
                {
                    id: 1,
                    title: "Vacation Planner",
                    subTitle: "Traveling made easy",
                    imgSrc: planner,
                    demo: "https://seahopki12.github.io/vacation_planner/",
                    repo: "https://github.com/sankung1/vacation_planner",
                    selected: false,
                },
                {
                    id: 2,
                    title: "Day Planner",
                    subTitle: "Don't miss any event with our day planner",
                    imgSrc: dayPlanner,
                    demo: "https://sankung1.github.io/day-planner/Develop/index.html",
                    repo: "https://github.com/sankung1/day-planner",
                    selected: false,
                },
            ]
        }
    }

    handleCardClick = (id, card) =>{
        console.log(id);
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item =>{
            if(item.id !== id){
                item.selected = false;
            }
        });

        this.setState({
            items
        })
    }


    makeItems = (items) =>{
        return items.map(item =>{
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id}/>
        })
    }

    render(){

        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        )
    }
}

export default Carousel;