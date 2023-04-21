function Header(){

    return <>
     <header>
       
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
                    <div className="col-lg-6 col-md-4 col-12">
                        <div className="logo-area text-center logo-xs-mrg">
                            <a href="index.html"><img src="img/logo/logo.png" alt="logo" /></a>
                        </div>
                    </div>
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
       
        <div className="main-menu-area d-md-none d-none d-lg-block sticky-header-1" id="header-sticky">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="menu-area">
                            <nav>
                                <ul>
                                    <li className="active"><a href="index.html">Home<i className="fa fa-angle-down"></i></a>
                                        <div className="sub-menu">
                                            <ul>
                                                <li><a href="index.html">Home-1</a></li>
                                                <li><a href="index-2.html">Home-2</a></li>
                                                <li><a href="index-3.html">Home-3</a></li>
                                                <li><a href="index-4.html">Home-4</a></li>
                                                <li><a href="index-5.html">Home-5</a></li>
                                                <li><a href="index-6.html">Home-6</a></li>
                                                <li><a href="index-7.html">Home-7</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li><a href="product-details.html">Book<i className="fa fa-angle-down"></i></a>
                                        <div className="mega-menu">
                                            <span>
                                                <a href="#" className="title">Jackets</a>
                                                <a href="shop.html">Tops & Tees</a>
                                                <a href="shop.html">Polo Short Sleeve</a>
                                                <a href="shop.html">Graphic T-Shirts</a>
                                                <a href="shop.html">Jackets & Coats</a>
                                                <a href="shop.html">Fashion Jackets</a>
                                            </span>
                                            <span>
                                                <a href="#" className="title">weaters</a>
                                                <a href="shop.html">Crochet</a>
                                                <a href="shop.html">Sleeveless</a>
                                                <a href="shop.html">Stripes</a>
                                                <a href="shop.html">Sweaters</a>
                                                <a href="shop.html">hoodies</a>
                                            </span>
                                            <span>
                                                <a href="#" className="title">Bottoms</a>
                                                <a href="shop.html">Heeled sandals</a>
                                                <a href="shop.html">Polo Short Sleeve</a>
                                                <a href="shop.html">Flat sandals</a>
                                                <a href="shop.html">Short Sleeve</a>
                                                <a href="shop.html">Long Sleeve</a>
                                            </span>
                                            <span>
                                                <a href="#" className="title">Jeans Pants</a>
                                                <a href="shop.html">Polo Short Sleeve</a>
                                                <a href="shop.html">Sleeveless</a>
                                                <a href="shop.html">Graphic T-Shirts</a>
                                                <a href="shop.html">Hoodies</a>
                                                <a href="shop.html">Jackets</a>
                                            </span>
                                        </div>
                                    </li>
                                    <li><a href="product-details.html">Audio books<i className="fa fa-angle-down"></i></a>
                                        <div className="mega-menu">
                                            <span>
                                                <a href="#" className="title">Shirts</a>
                                                <a href="shop.html">Tops & Tees</a>
                                                <a href="shop.html">Sweaters </a>
                                                <a href="shop.html">Hoodies</a>
                                                <a href="shop.html">Jackets & Coats</a>
                                            </span>
                                            <span>
                                                <a href="#" className="title">Tops & Tees</a>
                                                <a href="shop.html">Long Sleeve </a>
                                                <a href="shop.html">Short Sleeve</a>
                                                <a href="shop.html">Polo Short Sleeve</a>
                                                <a href="shop.html">Sleeveless</a>
                                            </span>
                                            <span>
                                                <a href="#" className="title">Jackets</a>
                                                <a href="shop.html">Sweaters</a>
                                                <a href="shop.html">Hoodies</a>
                                                <a href="shop.html">Wedges</a>
                                                <a href="shop.html">Vests</a>
                                            </span>
                                            <span>
                                                <a href="#" className="title">Jeans Pants</a>
                                                <a href="shop.html">Polo Short Sleeve</a>
                                                <a href="shop.html">Sleeveless</a>
                                                <a href="shop.html">Graphic T-Shirts</a>
                                                <a href="shop.html">Hoodies</a>
                                            </span>
                                        </div>
                                    </li>
                                    <li><a href="product-details.html">children’s books<i className="fa fa-angle-down"></i></a>
                                        <div className="mega-menu mega-menu-2">
                                            <span>
                                                <a href="#" className="title">Tops</a>
                                                <a href="shop.html">Shirts</a>
                                                <a href="shop.html">Florals</a>
                                                <a href="shop.html">Crochet</a>
                                                <a href="shop.html">Stripes</a>
                                            </span>
                                            <span>
                                                <a href="#" className="title">Bottoms</a>
                                                <a href="shop.html">Shorts</a>
                                                <a href="shop.html">Dresses</a>
                                                <a href="shop.html">Trousers</a>
                                                <a href="shop.html">Jeans</a>
                                            </span>
                                            <span>
                                                <a href="#" className="title">Shoes</a>
                                                <a href="shop.html">Heeled sandals</a>
                                                <a href="shop.html">Flat sandals</a>
                                                <a href="shop.html">Wedges</a>
                                                <a href="shop.html">Ankle boots</a>
                                            </span>
                                        </div>
                                    </li>
                                    <li><a href="#">blog<i className="fa fa-angle-down"></i></a>
                                        <div className="sub-menu sub-menu-2">
                                            <ul>
                                                <li><a href="blog.html">blog</a></li>
                                                <li><a href="blog-details.html">blog-details</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li><a href="#">pages<i className="fa fa-angle-down"></i></a>
                                        <div className="sub-menu sub-menu-2">
                                            <ul>
                                                <li><a href="shop.html">shop</a></li>
                                                <li><a href="shop-list.html">shop list view</a></li>
                                                <li><a href="product-details.html">product-details</a></li>
                                                <li><a href="product-details-affiliate.html">product-affiliate</a></li>
                                                <li><a href="blog.html">blog</a></li>
                                                <li><a href="blog-details.html">blog-details</a></li>
                                                <li><a href="contact.html">contact</a></li>
                                                <li><a href="about.html">about</a></li>
                                                <li><a href="login.html">login</a></li>
                                                <li><a href="register.html">register</a></li>
                                                <li><a href="my-account.html">my-account</a></li>
                                                <li><a href="cart.html">cart</a></li>
                                                <li><a href="compare.html">compare</a></li>
                                                <li><a href="checkout.html">checkout</a></li>
                                                <li><a href="wishlist.html">wishlist</a></li>
                                                <li><a href="404.html">404 Page</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="safe-area">
                            <a href="product-details.html">sales off</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
        <div className="mobile-menu-area d-lg-none d-block fix">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="mobile-menu">
                            <nav id="mobile-menu-active">
                                <ul id="nav">
                                    <li><a href="index.html">Home</a>
                                        <ul>
                                            <li><a href="index.html">Home-1</a></li>
                                            <li><a href="index-2.html">Home-2</a></li>
                                            <li><a href="index-3.html">Home-3</a></li>
                                            <li><a href="index-4.html">Home-4</a></li>
                                            <li><a href="index-5.html">Home-5</a></li>
                                            <li><a href="index-6.html">Home-6</a></li>
                                            <li><a href="index-7.html">Home-7</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="product-details.html">Book</a>
                                        <ul>
                                            <li><a href="shop.html">Tops & Tees</a></li>
                                            <li><a href="shop.html">Polo Short Sleeve</a></li>
                                            <li><a href="shop.html">Graphic T-Shirts</a></li>
                                            <li><a href="shop.html">Jackets & Coats</a></li>
                                            <li><a href="shop.html">Fashion Jackets</a></li>
                                            <li><a href="shop.html">Crochet</a></li>
                                            <li><a href="shop.html">Sleeveless</a></li>
                                            <li><a href="shop.html">Stripes</a></li>
                                            <li><a href="shop.html">Sweaters</a></li>
                                            <li><a href="shop.html">hoodies</a></li>
                                            <li><a href="shop.html">Heeled sandals</a></li>
                                            <li><a href="shop.html">Polo Short Sleeve</a></li>
                                            <li><a href="shop.html">Flat sandals</a></li>
                                            <li><a href="shop.html">Short Sleeve</a></li>
                                            <li><a href="shop.html">Long Sleeve</a></li>
                                            <li><a href="shop.html">Polo Short Sleeve</a></li>
                                            <li><a href="shop.html">Sleeveless</a></li>
                                            <li><a href="shop.html">Graphic T-Shirts</a></li>
                                            <li><a href="shop.html">Hoodies</a></li>
                                            <li><a href="shop.html">Jackets</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="product-details.html">Audio books</a>
                                        <ul>
                                            <li><a href="shop.html">Tops & Tees</a></li>
                                            <li><a href="shop.html">Sweaters</a></li>
                                            <li><a href="shop.html">Hoodies</a></li>
                                            <li><a href="shop.html">Jackets & Coats</a></li>
                                            <li><a href="shop.html">Long Sleeve</a></li>
                                            <li><a href="shop.html">Short Sleeve</a></li>
                                            <li><a href="shop.html">Polo Short Sleeve</a></li>
                                            <li><a href="shop.html">Sleeveless</a></li>
                                            <li><a href="shop.html">Sweaters</a></li>
                                            <li><a href="shop.html">Hoodies</a></li>
                                            <li><a href="shop.html">Wedges</a></li>
                                            <li><a href="shop.html">Vests</a></li>
                                            <li><a href="shop.html">Polo Short Sleeve</a></li>
                                            <li><a href="shop.html">Sleeveless</a></li>
                                            <li><a href="shop.html">Graphic T-Shirts</a></li>
                                            <li><a href="shop.html">Hoodies</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="product-details.html">children’s books</a>
                                        <ul>
                                            <li><a href="shop.html">Shirts</a></li>
                                            <li><a href="shop.html">Florals</a></li>
                                            <li><a href="shop.html">Crochet</a></li>
                                            <li><a href="shop.html">Stripes</a></li>
                                            <li><a href="shop.html">Shorts</a></li>
                                            <li><a href="shop.html">Dresses</a></li>
                                            <li><a href="shop.html">Trousers</a></li>
                                            <li><a href="shop.html">Jeans</a></li>
                                            <li><a href="shop.html">Heeled sandals</a></li>
                                            <li><a href="shop.html">Flat sandals</a></li>
                                            <li><a href="shop.html">Wedges</a></li>
                                            <li><a href="shop.html">Ankle boots</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">blog</a>
                                        <ul>
                                            <li><a href="blog.html">Blog</a></li>
                                            <li><a href="blog-details.html">blog-details</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="product-details.html">Page</a>
                                        <ul>
                                            <li><a href="shop.html">shop</a></li>
                                            <li><a href="shop-list.html">shop list view</a></li>
                                            <li><a href="product-details.html">product-details</a></li>
                                            <li><a href="product-details-affiliate.html">product-affiliate</a></li>
                                            <li><a href="blog.html">blog</a></li>
                                            <li><a href="blog-details.html">blog-details</a></li>
                                            <li><a href="contact.html">contact</a></li>
                                            <li><a href="about.html">about</a></li>
                                            <li><a href="login.html">login</a></li>
                                            <li><a href="register.html">register</a></li>
                                            <li><a href="my-account.html">my-account</a></li>
                                            <li><a href="cart.html">cart</a></li>
                                            <li><a href="compare.html">compare</a></li>
                                            <li><a href="checkout.html">checkout</a></li>
                                            <li><a href="wishlist.html">wishlist</a></li>
                                            <li><a href="404.html">404 Page</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </header>
    </>
}

export default Header;