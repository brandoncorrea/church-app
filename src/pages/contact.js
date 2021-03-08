import config from '../config/config';
import ContactCard from '../components/contactCard';

const GetContactCards = (coll) =>
    coll.map(i => <ContactCard contact={i} />);

const Header = (text) =>
    <h4 style={{ marginBottom: '25px' }}>{text}</h4>;

function Contact() {
  return (
    <div>
        <h2>Contact Us</h2>

        { Header("Pastors") }
        { GetContactCards(config.pastors) }

        { Header("Staff") }
        { GetContactCards(config.staff) }
    </div>
  );
}

export default Contact;