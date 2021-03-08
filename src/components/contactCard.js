import { Card } from 'react-bootstrap';

const Nothing = <></>;
const EmailLink = (email) => "mailto:" + email;
const EmailTag = (email) => <a href={EmailLink(email)}>{email}</a>;
const IsNullOrWhiteSpace = (text) =>
    text == null || 
    text === undefined || 
    text.trim().length < 1;

function ContactCard(props) {
    var contact = props.contact;
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={contact.photo} />
            <Card.Body>
                <Card.Title>{contact.name}</Card.Title>
                {
                    IsNullOrWhiteSpace(contact.title)
                    ? Nothing
                    : <Card.Title>{contact.title}</Card.Title>
                }
                {
                    IsNullOrWhiteSpace(contact.email)
                    ? Nothing
                    : <Card.Text>Email: {EmailTag(contact.email)}</Card.Text>
                }
                {
                    IsNullOrWhiteSpace(contact.phone)
                    ? Nothing
                    : <Card.Text>Phone: {contact.phone}</Card.Text>
                }
            </Card.Body>
        </Card>
    )
}

export default ContactCard;