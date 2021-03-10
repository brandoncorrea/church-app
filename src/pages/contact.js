import config from '../config/config';
import ContactCard from '../components/contactCard';
import { Row, Col } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'

const commonMargin = { margin: '1em 0' };

const GetContactCards = (coll) =>
  coll.map(i => 
    <Col style={commonMargin}>
      <ContactCard contact={i} />
    </Col>);

const Header = (text) =>
  <h3 style={commonMargin}>{text}</h3>;

const GetFluidContainer = (title, coll) =>
  <>
    { Header(title) }
    <Container fluid>
      <Row>
        { GetContactCards(coll) }
      </Row>
    </Container>
  </>

function Contact() {
  return (
    <>
      <h1>Contact Us</h1>
      { GetFluidContainer("Pastors", config.pastors) }
      { GetFluidContainer("Staff", config.staff) }
    </>
  );
}

export default Contact;