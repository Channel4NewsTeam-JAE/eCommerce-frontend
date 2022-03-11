
import React from 'react';

const Footer = () => {

  return (
  <div className="navbar navbar-dark bg-dark navbar-fixed-bottom" id="footer">
 
    <a className="primary col-6 nav-link text-center" data-bs-toggle="modal" data-bs-target="#myModal">Newsletter</a>

    <a className="primary col-6 nav-link active text-center" data-bs-toggle="modal" data-bs-target="#myModal2">Contact Us</a>

  <div className="modal" id="myModal">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">Register for Newsletter</h4>
          <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <div className="modal-body">
        <form>
            <input type='text' placeholder='Enter Full Name'></input>
            <input type='text' placeholder='Enter Phone Number'></input>
            <textarea id="message" rows='4' cols='40'></textarea>
          </form>
        </div>
        <div className="modal-footer">
          <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Submit</button>
        </div> 
      </div>
    </div>
  </div>


  <div className="modal" id="myModal2">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">Contact Us</h4>
          <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <div className="modal-body">
          <form>
            <input type='text' placeholder="enter email"></input>
          </form>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Register</button>
        </div>  
      </div>
    </div>
  </div>
</div>
  )
}


//newsletter
//modal display different information on click
export default Footer