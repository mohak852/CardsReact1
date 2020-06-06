import React from "react";
import {Card,Container,CardBody,CardTitle,CardText, Row} from "reactstrap";
import {FaEnvelope,FaMapMarkedAlt,FaPhone,FaPortrait} from "react-icons/fa"


const MyCard = ({details})=>{
    return(
        <Card>
            <CardBody className="text-center">
                <img 
                height="150"
                width="150"
                className="rounded-circle img-thumbnail border-danger"
                src={details.picture?.large}
                />
                <CardTitle className="text-primary">
                    <Row>
                        <h1><FaPortrait className="pr-3"/></h1>
                        <h1>
                            <span className="pr-2">{details.name?.title}</span>
                            <span className="pr-2">{details.name?.first}</span>
                            <span>{details.name?.last}</span>
                        </h1>
                    </Row>
                </CardTitle>
                <CardText className="text-info">
                    <Row>
                    <h1><FaMapMarkedAlt className="pr-2"/></h1>
                        <h1>{details.location?.city}</h1>
                    </Row>
                    <Row><h1><FaEnvelope className="pr-2"/></h1>
                    <h2>{details.email}</h2>
                    </Row>
                </CardText>
            </CardBody>
        </Card>
    )
}



export default MyCard;