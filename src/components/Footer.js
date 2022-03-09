
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';

const Footer = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isOpen2, setIsOpen2] = React.useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };

  const showModal2 = () => {
    setIsOpen2(true);
  };

  const hideModal2 = () => {
    setIsOpen2(false);
  };
  return (
    <>
    
    <a onClick={showModal}>Contact Us</a>
    <Modal show={isOpen} onHide={hideModal}>
      <Modal.Header>
        <Modal.Title>Contact</Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <form>
            <input type='text' placeholder="Enter Full Name"></input>
            <br />
            <br />
            <input type='text' placeholder="Enter Phone Number"></input>
            <br />
            <label for="message">Leave Message</label>
            <textarea id="message" name="message" rows="4" cols="40"></textarea>
          </form>        
      </Modal.Body>
      <Modal.Footer>
        <button onClick={hideModal} type="submit" class="btn btn-primary">Send Message</button>
      </Modal.Footer>
    </Modal>
    
    <a onClick={showModal2}>Newsletter</a>
    <Modal show={isOpen2} onHide={hideModal2}>
      <Modal.Header>
        <Modal.Title>Please Enter Your Email</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>   
          <input type='text'></input>
          <button type="submit" class="btn btn-primary">Subscribe to newsletter!</button>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={hideModal2} class="btn btn-primary">Hide</button>
      </Modal.Footer>
    </Modal>
  </>
  )
}


//newsletter
//modal display different information on click
export default Footer