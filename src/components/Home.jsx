import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import i1 from '../Images/i1.jpg';
import i2 from '../Images/i3.jpg';
import i3 from '../Images/i4.jpg';
import i4 from '../Images/card9.png';
import i5 from '../Images/card10.png';
import i6 from '../Images/card11.png';
import i7 from '../Images/card8.png';
const Home = () => {
  return (
    <div>
       {/* CAROUSEL START */}
<div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={i2} class="d-block w-100" alt="..." height={500}></img>
    </div>
    <div class="carousel-item">
      <img src={i1} class="d-block w-100" alt="..." height={500}></img>
    </div>
    <div class="carousel-item">
      <img src={i3} class="d-block w-100" alt="..." height={500}></img>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
{/* CAROUSEL END */}
<br /><br />
<div class="row">
  <div class="col-sm-6">
              <div class="card" style={{width: '18rem'}}>
              <img src={i4} class="card-img-top" alt="..."></img>
              <div class="card-body">
                <p class="card-text">Managing personal finances is crucial for achieving financial stability and meeting financial goals.

                </p>
              </div>
            </div>
  </div>
  <div class="col-sm-6">
            <div class="card" style={{width: '18rem'}}>
              <img src={i5} class="card-img-top" alt="..."></img>
              <div class="card-body">
                <p class="card-text">Our proposed Personal Finance Management Application, FinSnap, aims to simplify and streamline financial management for users.
                </p>
              </div>
            </div>
  </div>         
</div>
<br /><br />
<div class="row">
<div class="col-sm-6">
<div class="card" style={{width: '18rem'}}>
  <img src={i6} class="card-img-top" alt="..."></img>
  <div class="card-body">
    <p class="card-text">FinSnap will provide tools to track income, expenses, savings, and investments, and offer insights into spending habits.
    </p>
  </div>
</div>
</div>
<div class="col-sm-6">
<div class="card" style={{width: '18rem'}}>
  <img src={i7} class="card-img-top" alt="..."></img>
  <div class="card-body">
    <p class="card-text">Unique Feature: Integrates with WhatsApp API for easy expense updates and automated report generation.
    </p>
  </div> 
</div>
</div>
</div>




    </div>
  )
}

export default Home