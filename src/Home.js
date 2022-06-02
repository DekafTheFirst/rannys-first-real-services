import React from "react";
import { Swiper, SwiperSlide  } from 'swiper/react';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import SwiperCore, {Navigation, Pagination, Autoplay  } from 'swiper';
import { Link } from "react-router-dom";
import { MdCall, MdEmail } from 'react-icons/md';
import { MessengerChat } from "react-messenger-chat-plugin";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const Home = () => {
    return (
    <div id="home">
    
        <div className="landing-page">
            <div className="wrapper">
                <h1 className="title">
                    Rannys first real services
                </h1>
                <h3 className="subheading">We add taste to your event with our menu of different amazing dishes And quality service.</h3>
                <Link to="/contact-us" className="button">BOOK US</Link>
            </div>
            <div className="scroll-down">
                <span></span>
                <span></span>
                <span></span>
            </div>         
        </div>
        
        <section className="container" id="our-services">
            <div className="row title-row">
                <h3>AMAZING <span className="food">FOOD</span> <span className="plus-sign">+</span> <br /> 
                RELIABLE <span className="service">SERVICE</span></h3>

                <p>We offer a wide range of catering services, from drop-off to full-service catering, launch parties to weddings.<br/><br/>Browse our sample menus for mouth-watering ideas for your next event.</p>
            </div>
            <div className="row mt-4">
                    <div className="card">
                        <img src={process.env.PUBLIC_URL+"/images/card1.jpeg"} alt="" className="card-img-top" />
                        <div className="card-body">
                        <h3> Birthda Parties</h3>
                        <h4>From Small Get Togethers to Large Parties</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse placerat nunc dapibus, varius enim sed, venenatis sem. Nam auctor tortor faucibus urna cursus aliquet. Aenean eu lorem massa. Sed dapibus vel massa eu ornare.</p>
                    </div>
                </div>
                <div className="card">
                    <img src={process.env.PUBLIC_URL+"/images/card2.webp"} alt="" className="card-img-top" />
                    <div className="card-body">
                    <h3> Birthda Parties</h3>
                    <h4>From Small Get Togethers to Large Parties</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse placerat nunc dapibus, varius enim sed, venenatis sem. Nam auctor tortor faucibus urna cursus aliquet. Aenean eu lorem massa. Sed dapibus vel massa eu ornare.</p>
                </div>
                </div>      
                    <div className="card">
                        <img src={process.env.PUBLIC_URL+"/images/card3.jpg"} alt="" className="card-img-top" />
                        <div className="card-body">
                        <h3> Birthda Parties</h3>
                        <h4>From Small Get Togethers to Large Parties</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse placerat nunc dapibus, varius enim sed, venenatis sem. Nam auctor tortor faucibus urna cursus aliquet. Aenean eu lorem massa. Sed dapibus vel massa eu ornare.</p>
                    </div>
                </div>                      
            </div>
        </section>
        <section className="swiper">
        <Swiper
          loop={true}
          spaceBetween={10}
          slidesPerView={3}
          pagination={{
            el: '.my-custom-pagination-div',
            clickable: true,
          }}

          autoplay={{ delay: 3000 }}
        className="mySwiper"
        >
          <SwiperSlide><img src={process.env.PUBLIC_URL+"/images/main/1.jpg"} alt="" className="swiper-img"/></SwiperSlide>
          <SwiperSlide><img src={process.env.PUBLIC_URL+"/images/main/2.jpg"} alt="" className="swiper-img"/></SwiperSlide>
          <SwiperSlide><img src={process.env.PUBLIC_URL+"/images/main/4.jpg"} alt="" className="swiper-img"/></SwiperSlide>
          <SwiperSlide><img src={process.env.PUBLIC_URL+"/images/main/5.jpg"} alt="" className="swiper-img"/></SwiperSlide>
          <SwiperSlide><img src={process.env.PUBLIC_URL+"/images/main/1.jpg"} alt="" className="swiper-img"/></SwiperSlide>
          <SwiperSlide><img src={process.env.PUBLIC_URL+"/images/main/7.jpg"} alt="" className="swiper-img"/></SwiperSlide>
          <SwiperSlide><img src={process.env.PUBLIC_URL+"/images/main/8.jpg"} alt="" className="swiper-img"/></SwiperSlide>
        </Swiper>
        <div className="my-custom-pagination-div"></div>
        <div className="my-prev-nav" />
        <div className="my-next-nav" />
        </section>
        
        <section id="about-us">
            <div className="container-fluid">
                <div className="row">
                   <div className="col-12 col-lg-6 author">
                       <h3 className="heading text-dark mb-4">About Us</h3>

                       <img src={process.env.PUBLIC_URL+"/images/ranny kefas, cropped.jpg"} alt="" className="circular-img"/>
                       <h3>Meet Ranny</h3>
                       <h4>The brains behind our amazing catering service</h4>
                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse placerat nunc dapibus, varius enim sed, venenatis sem. Nam auctor tortor faucibus urna cursus aliquet. Aenean eu lorem massa. Sed dapibus vel massa eu ornare.</p>
                   </div>
                   <div className="col-12 col-lg-6 footer">
                       <div className="row">
                        <div className="col-12 footer-heading">
                             <h2>RANNY'S FIRST REAL SERVICES</h2>
                             <p>Have An Event Coming Up?</p>
                             <Link to="/contact-us" className="btn">BOOK US</Link>
                         </div>
                         <div className="col-12 contacts-and-socials">
                             <div className="row ">
                                 <div className="col-6 contacts">
                                    <h4>Contact Us</h4>
                                    
                                    <p><MdCall /> 09662947634</p>

                                    <p><MdEmail /> dekeji1@gmail.com</p>
                                        
                                 </div>
                                  <div className="col-6 socials">
                                    <h4>Follow Us</h4>
                                    <div className="icons">
                                    <img src={process.env.PUBLIC_URL+"/icons/circle/facebook.png"} alt="" />                                                                      
                                    <img src={process.env.PUBLIC_URL+"/icons/circle/instagram.png"} alt="" />                                    
                                    <img src={process.env.PUBLIC_URL+"/icons/circle/twitter.png"} alt="" />                                    
                                    <img src={process.env.PUBLIC_URL+"/icons/circle/github.png"} alt="" />
                                    </div>                                
                                 </div>
                             </div>
                         </div>
                       </div>                       
                   </div>                   
                </div>
                <div className="row">
                    <div className="col-12 map">
                       <img src={process.env.PUBLIC_URL+"/images/gmap.jpg"} alt="" />
                    </div>
                </div>
            </div>
        </section>    
        <MessengerChat
    pageId="109657494753220"
    language="sv_SE"
    themeColor={"#000000"}
    bottomSpacing={300}
    loggedInGreeting="loggedInGreeting"
    loggedOutGreeting="loggedOutGreeting"
    greetingDialogDisplay={"show"}
    debugMode={true}
    onMessengerShow={() => {
      console.log("onMessengerShow");
    }}
    onMessengerHide={() => {
      console.log("onMessengerHide");
    }}
    onMessengerDialogShow={() => {
      console.log("onMessengerDialogShow");
    }}
    onMessengerDialogHide={() => {
      console.log("onMessengerDialogHide");
    }}
    onMessengerMounted={() => {
      console.log("onMessengerMounted");
    }}
    onMessengerLoad={() => {
      console.log("onMessengerLoad");
    }}
  />
        </div>);
}
 
export default Home;