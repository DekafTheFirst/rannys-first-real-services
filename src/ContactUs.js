import React from 'react'
const ContactUs = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return ( 
    <section className="contact-us">
        <div className="landing-page">
            <div className="wrapper">
                <h1 className="title">
                    RANNY'S FIRST REAL SERVICES
                </h1>
            </div>
            {/* <div className="scroll-down">
                <span></span>
                <span></span>
                <span></span>
            </div>          */}
        </div>
        <div className="form">
            <form onSubmit={e => {handleSubmit(e)}}>
                <label htmlFor="">First Name:</label>
                <br/>
                <input
                    name="firstName"
                    type="text" />
                <br />
                <label htmlFor="">First Name:</label>
                <br/>
                <input
                    name="lastName"
                    type="text" />
                <br />
                <label htmlFor="">First Name:</label>
                <br/>
                <input
                    name="phoneNumber"
                    type="text" />
                <br />
                <label htmlFor="">First Name:</label>
                <br/>
                <input
                    name="email"
                    type="email" />
                <br />
                <div className="row">
                <div className="col-6">
                <label htmlFor="">Event Type:</label>
                    <br />
                    <label class="container">
                      <input type="checkbox" checked="checked" />
                      <span class="checkmark"></span>
                      Weddings
                    </label>

                    <label class="container">
                      <input type="checkbox" />
                      <span class="checkmark"></span>
                      Birthday Parties
                    </label>

                    <label class="container">
                        <span class="checkmark"></span>
                        <input type="checkbox" />
                        Corporate Events
                    </label> 
                </div>

                <div className="col-6">
                    <fieldset>
                    <label htmlFor="">Service Type: </label>

                    <div>
                      <input type="radio" id="huey" name="drone" value="huey"
                             checked />
                      <label for="huey">Huey</label>
                    </div>
                            
                    <div>
                      <input type="radio" id="dewey" name="drone" value="dewey" />
                      <label for="dewey">Dewey</label>
                    </div>
                            
                    <div>
                      <input type="radio" id="louie" name="drone" value="louie" />
                      <label for="louie">Louie</label>
                    </div>
                    </fieldset>    
                </div>  
                </div>
                   
                                   

                
            </form>
            <br /><br /><br /><br /><br /><br /><br />
        </div>
        
    </section>
);
}
 
export default ContactUs;