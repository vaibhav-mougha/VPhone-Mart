import React from 'react'
import Product from "./Product"

const Home = () => {
  return (
    <div>
      <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="/assets/images/home/img1.jpg" class="d-block w-100" alt="VPhone" height="550px" />
    </div>
    <div class="carousel-item">
      <img src="/assets/images/home/img2.jpg" class="d-block w-100" alt="VPhone" height="550px" />
    </div>
    <div class="carousel-item">
      <img src="/assets/images/home/img3.jpg" class="d-block w-100" alt="VPhone" height="550px"/>
    </div>
    <div class="carousel-item">
      <img src="/assets/images/home/img4.jpg" class="d-block w-100" alt="VPhone" height="550px" />
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
<Product />
    </div>
  )
}

export default Home
