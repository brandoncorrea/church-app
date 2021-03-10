import './navigation.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import config from '../config/config';

const Nothing = <></>;
const IsNullOrEmpty = (coll) =>
  coll == null || 
  coll === undefined ||
  coll.length === 0;

const GetLink = (id) => "/location/" + id;

const GetNavLink = (campus) =>
  <Nav.Link 
    href={GetLink(campus.id)}
    >{campus.name}</Nav.Link>

const GetDropdownLocations = (campuses) =>
  <NavDropdown title="Locations" id="basic-nav-dropdown">
    {
      campuses.map(i => 
        <NavDropdown.Item 
          href={GetLink(i.id)}
          >{i.name}</NavDropdown.Item>)
    }
  </NavDropdown>

const GetCampusLinks = () =>
  IsNullOrEmpty(config.campuses)
    ? Nothing
  : config.campuses.length === 1
    ? GetNavLink(config.campuses[0])
  : GetDropdownLocations(config.campuses);
  
function Navigation() {
  return (
    <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">{config.churchName}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
              { GetCampusLinks() }
            </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
