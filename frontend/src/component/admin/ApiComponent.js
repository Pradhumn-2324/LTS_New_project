import React, { useState, useEffect } from 'react';
import lwlogo from "../../images/frontend/WebSiteImg_livewirelogo.png"
import logo from "../../images/frontend/Blue Geometric Technology LinkedIn Banner (1).png"
import logo1 from "../../images/frontend/NEW BANNER.png"
import axios from 'axios';

function ApiComponent() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/')
      .then(response => {
        setMessage(response.data.pradhumn);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
        <h1>welcome {message}</h1>
      <div className="text-center bg-light bg-opacity-10">
        <img src={lwlogo} className="rounded w-25 mt-5 mb-5" alt="Logo" />
      </div>

      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        {<div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src={logo1} class="d-block w-100" alt="..."/>
      </div>
      <div class="carousel-item">
        <img src={logo} class="d-block w-100" alt="..."/>
      </div>
      <div class="carousel-item">
        <img src={logo} class="d-block w-100" alt="..."/>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying"
      data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"
      data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>}
      </div>

      <div className="bg-warning bg-opacity-10">
        <div className="container text-center mt-5 text-justify">
          <h1 className="mb-4 display-4">ABOUT US</h1>
          <p className="p-5">
            {/* ... About Us content ... */}
          </p>
        </div>
      </div>

      {/* ... CORE TEAM section ... */}

      <div className="mt-5 bg-success bg-opacity-10">
        <div className="d-grid gap-2 col-2 mx-auto">
          <button className="btn btn-danger mb-5 mt-5" type="button" data-bs-toggle="collapse" data-bs-target=".multi-collapse"
            aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2 multiCollapseExample3 multiCollapseExample4 multiCollapseExample5 multiCollapseExample6">
            <b>Our Courses</b>
          </button>
        </div>

        <div className="row me-0 mb-5">
          {/* ... Our Courses buttons and collapses ... */}
        </div>

        {/* ... OUR ASSOCIATION WITH section ... */}

        <div className="container mb-5">
          <div id="carouselExampleFade" className="carousel slide carousel-fade">
            {/* ... Carousel items for association ... */}
          </div>
        </div>
      </div>

      <div className="card-footer border-0 rounded-0 bg-black p-3">
        <div className="card-body text-white">
          <center>
            © 2023 LiveWire. All Rights Reserved
            <a href="" className="float-end text-light"> @Contributers</a>
          </center>
        </div>
      </div>
    </div>
  );
}

export default ApiComponent;
