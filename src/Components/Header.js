import React from 'react'
import { Link  } from 'react-router-dom'

export default class Header extends React.Component{
    render(){
        return(
         <div>
<div class="container-fluid top_block">
    	<div class="row">
    	<div class="container">
        	<div class="phone_no">hbelectricals9004@gmail.com  |  <strong>0124-2970578</strong></div>
            <ul class="social_top">
                <li><a href="" target="_blank"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                <li><a href="" target="_blank"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                <li><a href="" target="_blank"><i class="fa fa-youtube" aria-hidden="true"></i></a></li>
                <li><a href="" target="_blank"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
            </ul>
        </div>
        </div>
    </div>
    <div class="container-fluid logo_block">
    	<div class="row">
    	<div class="container">
        	<div class="logo"><a href="index.html"><img src="images/logo.png"  alt=""/></a></div>
            <a href="javascript:void();" class="mobile_menu">Menu</a>
        	<div class="navigation">
            	<ul>
                     <li><Link to="/Index">Home</Link></li>          
                    <li><Link to="/Who">Who We are</Link></li>          
                    <li><Link to="/Product">Products</Link></li>                   
                    <li><Link to="/enquery">Enquire Now</Link></li>          
                    <li><Link to="/Contact">Contact Us</Link></li>
                </ul>
            </div> 
        </div>
        </div>
    </div>
         </div>
        )
    }
}