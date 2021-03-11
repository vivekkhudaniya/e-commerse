
import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
export default class Enquery extends React.Component {
    render() {
        return (
            <div>
                <div class="wrapper">
                <Header/>
                    <div class="container-fluid">
                        <div class="row">
                            <img src="images/enquire_now.jpg" alt="" />
                        </div>
                    </div>
                    <div class="container-fluid">
                        <div class="row">
                            <div class="container">
                                <div class="content_page">
                                    <div class="enquire_forms">
                                        <h6>Our team is always available to answer your queries. Be sure to go through FAQ before sending the question to find the solution as fast as possible.</h6>
                                        <form name="formenquiry" action="contact-us.php" method="post">

                                            <input type="text" name="fname" placeholder="Your Name" />
                                            <input type="text" name="email" placeholder="Email Address" />
                                            <input type="text" name="phone" placeholder="Phone Number" />
                                            <textarea name="message" placeholder="Your Message"></textarea>
                                            <input name="submit" type="submit" value="SUBMIT YOUR QUERY" onClick="return enquiry();" />
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer/>

                </div>
                </div>
        )
    }
}
