 import "./description.css"
function ViewDescription(){
    return <>
              {/* Hello world */}
                <div id="layoutSidenav">
                    <div id="layoutSidenav_nav">
                        {/* side nav  */}
                        {/* side nav end  */}
                    </div>
                    <div id="layoutSidenav_content">
                        <main>
                            <div className="container-fluid px-4">
                                <div className="container-fluid" id="main_wrapper">
                                    <div className="container" id="container_wrapper">
                                        <div className="mid_wrapper">
                                            <div id="div1">
                                                <div id="main_image" className="image">
                                                    <img
                                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjwR_qwwP-PgM2uGa5crh8YvIhpV_yc7LNXA&usqp=CAU"
                                                        alt=""
                                                        id="mainImage"
                                                    />
                                                </div>
                                                {/* image array */}
                                                <div className="img_collaction" style={{ marginTop: 10 }}>
                                                    <div className=" image1">
                                                        <img
                                                            onclick="changeImage(this)"
                                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK30LkGqZEASURehCGGm4zhq0K6whNTDMTjQ&usqp=CAU"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className=" image1">
                                                        <img
                                                            onclick="changeImage(this)"
                                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK30LkGqZEASURehCGGm4zhq0K6whNTDMTjQ&usqp=CAU"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className=" image1">
                                                        <img
                                                            onclick="changeImage(this)"
                                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK30LkGqZEASURehCGGm4zhq0K6whNTDMTjQ&usqp=CAU"
                                                            alt=""
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="div2">
                                             <div>
                                            <p className="dectitel">Chaz Kangeroo Hoodie3</p>
                                                
                                            <p className="desprice">&#8377; 100</p>
                                            <span className="decauther">By:  <span className="authername"> James Clear  </span>  (Author)  </span>
                                             <p  className="bookdescription">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet.</p>
                                             </div>
                                               
                                                <div className="discriptionbuttons">
                                                    <a>
                                                        <button className="discriptionbtn">Add to cart</button>
                                                    </a>
                                                    <a href>
                                                <button      className="discriptionbtn2 ml-3">add to wishlist</button>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </main>
                        {/* footer */}
                        {/* footer end */}
                    </div>
                </div>
            </>


    
}

export default ViewDescription;