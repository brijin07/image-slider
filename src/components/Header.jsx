import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Header = () => {
  return (
    <>
       <Navbar expand="lg" className="bg-secondary ">
      <Container>
        <Navbar.Brand href="#" className='fw-bolder' >IMAGE SLIDER<i class="fa-regular fa-image fa-beat fa-lg ps-2"></i></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          
          <button className='btn btn-dark p-1'>Login</button>
          <button className='btn btn-dark p-1 pe-2 me-2'>sign up</button>
          </Nav>

          

          

        </Navbar.Collapse>
        
      </Container>
    </Navbar>
    </>
  )
}

export default Header