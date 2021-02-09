import React, { Component } from 'react'
import {Container,Row,Col,Button,Form,} from 'react-bootstrap';

export default class Page5 extends Component {
    render() {
        return (
            <div className="page5" id="page5">
                <Container>
                    <Row className="page5Row">
                        <Col lg={8} xs={10}>
                        <Form>
                        <Form.Group>
    <Form.Label>Enter name</Form.Label>
    <Form.Control type="text" placeholder="Enter name" />

  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />

  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary">
    Submit
  </Button>
</Form>
                        </Col>
                    </Row>
                </Container>
                
            </div>
        )
    }
}
