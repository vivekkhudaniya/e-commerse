import React from 'react'

export default class Footer extends React.Component{
    render(){
        return(
            <div>
            <div class="container-fluid footer_block">
    	<div class="row">
    	<div class="container">
        	<div class="bottom_links">
            	<h3>Info Pages</h3>
                <ul>
                    <li><a href="index.html">Home</a></li>          
                    <li><a href="who-we-are.html">Who We are</a></li>          
                    <li><a href="product-range.html">Products</a></li>                   
                    <li><a href="enquiry.html">Enquire Now</a></li>          
                    <li><a href="contacts.html">Contact Us</a>, </li>
                </ul>
            </div>
            <div class="bottom_links">
            	<h3>Product Range</h3>
                <ul>
                    <li><a href="product-range.html">Switches & Switchgear</a></li>
                    <li><a href="product-range.html">Appliances</a></li>
                    <li><a href="product-range.html">Flexible cables</a></li>
                    <li><a href="product-range.html">Fans & Lighting</a></li>
                    <li><a href="product-range.html">Water Heater</a></li>
                    <li><a href="product-range.html">View All</a></li>
                </ul>
            </div>
            <div class="bottom_links">
            	<h3>Brands</h3>
                <ul>
                    <li><a href="pdf/eon_price_list.pdf">Eon Led Lightining</a></li>
                    <li><a href="pdf/eon_wire_price_list.pdf">EON Wires</a></li>
                    <li><a href="pdf/akg_price_list.pdf">A.K.G</a></li>
                    <li><a href="pdf/crabtree_price_list.pdf">Crabtree</a></li>
                    <li><a href="pdf/hager_price_list.pdf">Hager</a></li>
                    <li><a href="pdf/northwest_price_list.pdf">North West</a></li>
                </ul>
            </div>
            <div class="bottom_links">
            	<h3>Contact us</h3>
                <ul>
                    <li><i class="fa fa-phone-square" aria-hidden="true"></i> hbelectricals9004@gmail.com</li>
                    <li class="phone"><i class="fa fa-envelope-o" aria-hidden="true"></i> 0124-2970578</li>
                    <li><i class="fa fa-map-marker" aria-hidden="true"></i> A-313, 1st Floor, Palam Vihar Extension Gurgaon Haryana</li>
                </ul>
            </div>
        </div>
        </div>
    </div>
    <div class="container-fluid copyright_block">
    	<div class="row">
    	<div class="container">
        	<div class="copyright">All  @ Copyright reserved to HB Electricals</div>
        	<ul class="social_top">
                <li><a href="" target="_blank"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                <li><a href="" target="_blank"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                <li><a href="" target="_blank"><i class="fa fa-youtube" aria-hidden="true"></i></a></li>
                <li><a href="" target="_blank"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
            </ul>
        </div>
        </div>
    </div>
    </div>
        )
    }
}