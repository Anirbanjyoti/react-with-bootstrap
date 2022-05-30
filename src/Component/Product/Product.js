import React from 'react';
import {Card, Col} from 'react-bootstrap';

const Product = (props) => {
    const {title, des} = props.product;
    // console.log(title, des);
   
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {des}
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
         </Col>
    );
};

export default Product;