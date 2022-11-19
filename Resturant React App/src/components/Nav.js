import React from 'react'
import{Link} from 'react-router-dom'
function Nav() {
  return (
<>
{/* <!-- Navbar & Hero Start --> */}
        <div class="container-xxl position-relative p-0">
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
                <Link to="/" class="navbar-brand p-0">
                    <h1 class="text-primary m-0"><i class="fa fa-utensils me-3"></i>Restoran</h1>
                   <img src="img/logo.png" alt="Logo"/> 
                </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span class="fa fa-bars"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav ms-auto py-0 pe-4">
                        <Link to="/" class="nav-item nav-link active">Home</Link>
                        <Link to="/about" class="nav-item nav-link">About</Link>
                        <Link to="/menu" class="nav-item nav-link">Menu</Link>
                        {/* <div class="nav-item dropdown">
                            <Link to="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</Link>
                            <div class="dropdown-menu m-0">
                                <Link to="booking.html" class="dropdown-item">Booking</Link>
                                <Link to="team.html" class="dropdown-item">Our Team</Link>
                                <Link to="testimonial.html" class="dropdown-item">Testimonial</Link>
                            </div>
                        </div> */}
                        <Link to="/contact" class="nav-item nav-link">Contact</Link>
                    </div>
                    <Link to="" class="btn btn-primary py-2 px-4">Book A Table</Link>
                </div>
            </nav>

            <div class="container-xxl py-5 bg-dark hero-header mb-5">
                <div class="container my-5 py-5">
                    <div class="row align-items-center g-5">
                        <div class="col-lg-6 text-center text-lg-start">
                            <h1 class="display-3 text-white animated slideInLeft">Enjoy Our Delicious Meal</h1>
                            <p class="text-white animated slideInLeft mb-4 pb-2">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                            <Link to="" class="btn btn-primary py-sm-3 px-sm-5 me-3 animated slideInLeft">Book A Table</Link>
                        </div>
                        <div class="col-lg-6 text-center text-lg-end overflow-hidden">
                            <img class="img-fluid" src="img/hero.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Navbar & Hero End --> */}
</>
  )
}

export default Nav