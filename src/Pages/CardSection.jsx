import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function CardSection() {

    const cardValue = [
        {
            id: 1, title: "CSS Templates", descp: "TemplateMo website is the best for you to explore and download free website templates."
        },
        {
            id: 2, title: "HTML5 Web Pages", descp: "Templates are based on Bootstrap 5 CSS framework. You can easily adapt or modify based on your"
        },
        {
            id: 3, title: "Responsive Designs", descp: "All of our CSS templates are 100% free to use for commercial or business websites."
        },
        {
            id: 4, title: "Mobile and Tablet ready!", descp: "Our HTML CSS templates are well-tested on mobile, tablet, and desktop compatibility."
        },
        {
            id: 5, title: "Responsive Designs", descp: "All of our CSS templates are 100% free to use for commercial or business websites."
        },
        {
            id: 7, title: "Mobile and Tablet ready!", descp: "Our HTML CSS templates are well-tested on mobile, tablet, and desktop compatibility."
        }
    ];


    return (
        <div className='cardsection p-4'>
            <Row xs={1} md={2} className="g-4">
                {cardValue.map((card) => (
                    <Col key={card.id}>
                        <Card>
                            <Card.Body>
                                <Card.Title>{card.title}</Card.Title>
                                <Card.Text>
                                    {card.descp}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default CardSection