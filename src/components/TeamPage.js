import React from "react";

const Team = () => {
    return (
      <div className="carouselContainer">
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src="https://th.bing.com/th/id/R.a8f6826502f5b009ff4db1bbd17760d6?rik=HTzJpwZdf9a1tA&pid=ImgRaw&r=0" className="d-block w-100" alt="Ethan Averbukh's Photo"/>
                <div className="carousel-caption d-none d-md-block">
                    <a href="#">Ethan Averbukh</a>
                    <p>Ethans contribution to the project</p>
                </div>
                </div>
                <div className="carousel-item">
                <img src="https://ca.slack-edge.com/T0351JZQ0-U02QR4J2XQW-abce7c044f36-512" className="d-block w-100" alt="Adel Hasan's Photo"/>
                <a href="#">Adel Hasan</a>
                    <p>Adels Contribution to the project</p>
                </div>
                </div>
                <div className="carousel-item">
                <img src="https://th.bing.com/th/id/R.9641c4956c05b474164e84e85c7be589?rik=78I%2bO6PphQoOtA&pid=ImgRaw&r=0" className="d-block w-100" alt="Jason Hensley's Photo"/>
                <div className="carousel-caption d-none d-md-block">
                <a href="#">Jason Hensley</a>
                    <p>Jasons Contribution the project</p>
                </div>
                </div>
            </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
    )
}
export default Team;