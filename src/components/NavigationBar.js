import {Navbar, Nav, Container, NavDropdown, Button} from "react-bootstrap"
import '../style/NavigationBar.css'

const NavigationBar = () => {
    return(
        <Navbar bg="light" expand="lg">
            <Container fluid className="px-5">
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="mx-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll >
                        <Nav.Link href="#action1" className="me-5">Home</Nav.Link>
                        <Nav.Link href="#action1" className="me-5">Resume</Nav.Link>
                        <Nav.Link href="#action2" className="me-5">Projects</Nav.Link>
                        <NavDropdown title="Contacts" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Intagram</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Facebook</NavDropdown.Item>
                            <NavDropdown.Item href="#action5">LinkedIn</NavDropdown.Item>
                            <NavDropdown.Divider />
                        </NavDropdown>
                    </Nav>
                    <Button variant="outline-primary" className="me-5">Hire Me</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavigationBar