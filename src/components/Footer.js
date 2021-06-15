import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Footer() {
    return (
        <footer className="bg-secondary">
            <Container className="">
                <Row>
                    <Col className="text-center py-3">Copyright &copy; TechDomeTZ</Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
