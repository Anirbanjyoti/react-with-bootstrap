import React from 'react';
import { CardGroup, Col, Container, Row } from 'react-bootstrap';
import Cart from '../Cart/Cart';
import Graps from '../Graps/Graps';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const products =[
        {id: 1, title:"iphone", des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, assumenda?" },
        {id: 2, title:"Samsung", des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, assumenda?" },
        {id: 3, title:"Xiaomi", des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, assumenda?" },
        {id: 4, title:"Voda", des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, assumenda?" }
    ];
    // console.log(products);
    return (

            <Container>
                <Row>
                    <Col xs={12} md={8}>
                    <CardGroup>
                    <Row xs={1} md={3} className="g-4">
                    
                            {
                                products.map(product => <Product key={product.id} product={product}></Product>)
                            }     
                    
                    </Row>
                    </CardGroup>
                     </Col>

                    <Col xs={6} md={4}>
                    <div className="cart-summary">
                                    <Cart></Cart>
                                </div>
                    </Col>
                </Row>
                            <Row>
                                <Col>
                                     <Graps></Graps>
                                </Col>
                            </Row>
             </Container>
    );
};

export default Shop;