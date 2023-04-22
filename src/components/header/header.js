import { Link } from "react-router-dom";
import Topbar from "../topbar/topbar";


function Header(){
         
    return <>
     <header>
       <Topbar/>
       <div className="main-menu-area d-md-none d-none d-lg-block sticky-header-1" id="header-sticky">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="menu-area">
                            <nav>
                                <ul>
                                    <li className="active"><Link to='/'>Home<i className="fa fa-angle-down"></i></Link>
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
                                    <li><a href="#">MyAccount<i className="fa fa-angle-down"></i></a>
                                        <div className="sub-menu sub-menu-2">
                                            <ul>
                                                <li><Link to='signup'>SignUp</Link></li>
                                                <li><Link to='signin'>SignIn</Link></li>
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