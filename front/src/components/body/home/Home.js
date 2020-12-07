import React from 'react'
import './home.css';


function Home() {
    return (
      <div>

         <div className="home_page">
            <h2 style={{textAlign:"center"}}>Welcome to Law Firm</h2>

           
            <section id="body">
                <div>
                <div className="wrapper breather-top">
                <p><img alt="9 Benefits of Hiring a Criminal Defense Lawyer" src="https://sorensenandedwards.com/images/legal.png"/></p>
                <p>
            A law firm is a business entity formed by one or more lawyers to engage in the practice of law.
             The primary service rendered by a law firm is to advise clients (individuals or corporations) 
             about their legal rights and responsibilities, and to represent clients in civil or criminal cases,
              business transactions, and other matters in which legal advice and other assistance are sought.
            </p>
<h3>Can save you money</h3>
<p>An experienced criminal defense lawyer can be pretty spendy, but when you weigh it against the time and money you can save by hiring one, it’s a no-brainer. The fees, fines, time out of work, and other costs all can be negotiated by your lawyer who will save you money in the long run.</p>
<p><img alt="9 Benefits of Hiring a Criminal Defense Lawyer" src="https://www.eduardojimenezlawfirm.com/wp-content/uploads/revslider/lawyer2/home_lawyer2_slider_bg.jpg
"/></p>
</div>
</div>
</section>
            </div>
            <footer className="flex-rw">
  <section className="footer-social-section flex-rw">
      <span className="footer-social-overlap footer-social-connect">
      CONNECT <span className="footer-social-small">with</span> US
      </span>
      <span className="footer-social-overlap footer-social-icons-wrapper">
      <a href="https://www.facebook.com" className="generic-anchor"  title="Facebook" itemprop="significantLink"><i className="fa fa-facebook"></i></a>
      <a href="https://twitter.com" className="generic-anchor"  title="Twitter" itemprop="significantLink"><i className="fa fa-twitter"></i></a>
      <a href="http://instagram.com" className="generic-anchor"  title="Instagram" itemprop="significantLink"><i className="fa fa-instagram"></i></a>
      <a href="https://plus.google.com" className="generic-anchor" title="Google Plus" itemprop="significantLink"><i className="fa fa-google-plus"></i></a>
      </span>
  </section>
  <section className="footer-bottom-section flex-rw">
<div class="footer-bottom-wrapper">   
<i class="fa fa-copyright" >
 
</i> 2020  Wassim Mokhtar <address className="footer-address" >  ,Tunis </address><span className="footer-bottom-rights"> - All Rights Reserved - </span>
    </div>
    <div className="footer-bottom-wrapper">
     <p >Privacy</p>
      </div>
  </section>
</footer>
        </div>
    )
}

export default Home