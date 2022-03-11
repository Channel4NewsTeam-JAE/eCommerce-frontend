import React from "react";

const Team = () => {
  return (
    <div className="carouselContainer">
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="http://moviefail.com/wp-content/uploads/2015/10/missionimpossibleroguenation-4.jpg"
              className="d-block w-100"
              alt="Ethan-Averbukh-Photo"
            />
            <div className="carousel-caption d-none d-md-block">
              <a href="#">Ethan Averbukh</a>
              <p>Ethans contribution to the project</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://i.imgur.com/rsAnbL3.jpeg"
              className="d-block w-100"
              alt="Adel-Hasan-Photo"
            />
            <div className="carousel-caption d-none d-md-block">
              <a href="#">Adel Hasan</a>
              <p>Adels Contribution to the project</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://c4.wallpaperflare.com/wallpaper/1019/924/969/jason-statham-celebrities-star-man-suit-tie-photography-dark-background-wallpaper-thumb.jpg"
              className="d-block w-100"
              alt="Jason Hensleys Photo"
            />
            <div className="carousel-caption d-none d-md-block">
              <a href="#">Jason Hensley</a>
              <p>Jasons Contribution the project</p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};
export default Team;
