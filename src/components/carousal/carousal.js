function Carousal()
 {
    return <> <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
      <div class="single-slider pt-125 pb-130 bg-img ban" >
       
                    <div class="row ">
                        <div class="col-lg-5 ">
                            <div class="slider-content slider-animated-1 text-center ">
                                <h1>Huge Sale</h1>
                                <h2>Pushtakalaya</h2>
                                <h3>Now starting at Rs 99.00</h3>
                                <a href="# ">Shop now</a>
                            </div>
                        </div>
                    </div>
                    </div>
            
      </div>
      <div class="carousel-item">
      <div class="single-slider slider-h1-2 pt-215 pb-100 bg-img  ban1" >
       
        <div class="container ">
                    <div class="slider-content slider-content-2 slider-animated-1 ">
                        <h1>We can help get your</h1>
                        <h2>Books in Order</h2>
                        <a href="# ">Contact Us Today!</a>
                    </div>
                </div>
                </div>

      </div>
      <div class="carousel-item">
        <img class="d-block w-100" style={{height:"400px"}} src="https://www.mypustak.com/_next/image?url=https%3A%2F%2Fd239pyg5al708u.cloudfront.net%2Fuploads%2Fhomebanner%2FHOME_1_2_79.webp&w=3840&q=75" alt="First slide"/>

        {/* <img class="d-block w-100" style={{height:"400px"}} src="" alt="Third slide" /> */}
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
    </>
} 


export default Carousal;