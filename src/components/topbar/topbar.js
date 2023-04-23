
function Topbar() {
    return <>
        <div className="header-top-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="language-area">
                            <ul>
                                <li><img src="img/flag/1.jpg" alt="flag" /><a href="#">English<i className="fa fa-angle-down"></i></a>
                                    <div className="header-sub">
                                        <ul>
                                            <li>
                                                <a href="#"><img src="img/flag/2.jpg" alt="flag" />france</a>
                                            </li>
                                            <li>
                                                <a href="#"><img src="img/flag/3.jpg" alt="flag" />croatia</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li><a href="#">USD $<i className="fa fa-angle-down"></i></a>
                                    <div className="header-sub dolor">
                                        <ul>
                                            <li><a href="#">EUR €</a></li>
                                            <li><a href="#">USD $</a></li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="account-area text-end">
                            <ul>
                                <li><a href="my-account.html">My Account</a></li>
                                <li><a href="checkout.html">Checkout</a></li>
                                <li><a href="login.html">Sign in</a></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div className="header-mid-area ptb-40">
            <div className="container">
                <div className="row">
                  
                    <div className="col-lg-3 col-md-5 col-12">

                        <div className="header-search">
                            <form action="#">
                                <input type="text" placeholder="Search entire store here..." />
                                <a href="#"><i className="fa fa-search"></i></a>
                            </form>
                        </div>
                    </div>
                    {/* <div className="col-lg-6 col-md-4 col-12">
                        <div className="logo-area text-center logo-xs-mrg">
                            <a href="index.html"><img src="img/logo/logo.png" alt="logo" /></a>
                        </div>
                    </div> */}
                    <div className="col-lg-3 col-md-3 col-12">
                        <div className="my-cart">
                            <ul>
                                <li><a href="#"><i className="fa fa-shopping-cart"></i>My Cart</a>
                                    <span>2</span>
                                    <div className="mini-cart-sub">
                                        <div className="cart-product">
                                            <div className="single-cart">
                                                <div className="cart-img">
                                                    <a href="#"><img src="img/product/1.jpg" alt="book" /></a>
                                                </div>
                                                <div className="cart-info">
                                                    <h5><a href="#">Joust Duffle Bag</a></h5>
                                                    <p>1 x £60.00</p>
                                                </div>
                                                <div className="cart-icon">
                                                    <a href="#"><i className="fa fa-remove"></i></a>
                                                </div>
                                            </div>
                                            <div className="single-cart">
                                                <div className="cart-img">
                                                    <a href="#"><img src="img/product/3.jpg" alt="book" /></a>
                                                </div>
                                                <div className="cart-info">
                                                    <h5><a href="#">Chaz Kangeroo Hoodie</a></h5>
                                                    <p>1 x £52.00</p>
                                                </div>
                                                <div className="cart-icon">
                                                    <a href="#"><i className="fa fa-remove"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="cart-totals">
                                            <h5>Total <span>£12.00</span></h5>
                                        </div>
                                        <div className="cart-bottom">
                                            <a className="view-cart" href="cart.html">view cart</a>
                                            <a href="checkout.html">Check out</a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Topbar;