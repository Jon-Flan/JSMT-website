import React from 'react'
import PropTypes from 'prop-types'

import pic01 from '../images/intro.jpg'
import pic02 from '../images/therapies.jpg'
import pic03 from '../images/reviews.jpg'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Intro</h2>
          <span className="image main"><img src={pic01} alt="" /></span>
          <p>Jade is a registered Sports Massage therapist specializing in chronic and acute musculoskeletal issues that arise either from every day activities or athletic training. </p>
          <p>Jade works with Deep tissue techniques such as Trigger Point therapy, Myofascial release and fundamentals of kinetic swedish massage therapy. With more than 10 years of training in anatomy, dance, yoga and somatic bodywork Jade is ready to support you back to health and well-being.</p>
          <p>Awards:</p>
          <p>CULTMTL #2 Top Massage Therapist Montreal 2018</p>
          <p>CULTMTL #4 Top Massage Therapist Montreal 2017</p>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Therapies</h2>
          <span className="image main"><img src={pic02} alt="" /></span>
          <h4>Deep Tissue/ Therapeutic</h4>
          <p>Deep tissue massage essentially aims to address chronic pain and injury. This soothing, therapeutic treatment releases toxins, tension and pain by releasing resistant knots to create a better range of motion for joints and muscles.
             This technique is not just for athletes but any person suffering with chronic or acute pain. Using appropriate pressure to promote the healing of scar tissue as well as relief from soft tissue injuries, chronic conditions, stress and tension.</p>
          <h6>Pricing</h6>
          <p>1hr/$85.00 or 90 mins/$115.00</p>
          <br/>
          <br/>
          <h4>Swedish/Relaxation</h4>
          <p>Swedish massage therapy involves mostly mild and moderate; sometimes deeper maneuvers to target tissues and muscles for maximal pain relief, stress release and relaxation. Allow yourself to drink in a deep state of unwinding and calm.</p>
          <h6>Pricing</h6>
          <p>1hr/$85.00 or 90 mins/$115.00 </p>
          <br/>
          <br/>
          <h4>Onsite Sports Massage</h4>
          <p>30 minutes and over. Jade is able to be present at any onsite sporting event either before, during or after an event. Helping prep any athlete of any caliber to get you game ready, help you cool down to prepare for next event or even relax and release tissues, muscles and articulations to help recovery.</p>
          <h6>Pricing</h6>
          <p>Please inquire for pricing</p>
          <br/>
          <br/>
          <h4>Payment methods accepted:</h4>
          <p>Credit Card, Cash, E-transfer or Cheque.</p>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Testimonials</h2>
          <span className="image main"><img src={pic03} alt="" /></span>
          <h4>Mary Wassef</h4>
          <p>Jade provided me with a sports massage as my lower back was pinching. She was very knowledgeable and precise in her explanation prior to the massage, giving me reassurance that I was in good hands. I felt much better after the massage and for some time after. Thanks Jade!</p>
          <br/>
          <h4>Alison Louder</h4>
          <p>I have chronic pain and deep scar tissue as a result of multiple injuries, and I also enjoy the relaxation a massage can provide. Jade's treatment was excellent!! With a perfect balance of therapeutic techniques and gentleness, she allowed me to let go of tension and walk away feeling blissful. 10/10</p>
          <br/>
          <h4>Masha Smushkevitch​ ​</h4>
          <p>Best massage I ever had. I used to think tiny women couldn't give hard deep tissue massage for 90 mins straight, but boy did she prove me wrong. She'll find all your sore spots and make you suffer oh-so-good. You might be a little tender the next day or 2 but after that, the nagging pain will abate and you will wonder why you waited so long to go see Jade. She's got strong hands, very attentive to even the smallest feedback and responds accordingly. I'm spending all my massage insurance in one place.</p>
          <br/>
          <h4>Arron Spall-Hancy</h4>
          <p>Superb - knowledgeable, comforting and wholly therapeutic!</p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <form method="post" action="mailto:jonflanagan.jf@gmail.com" enctype="text/plain">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="submit" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
          <h3>Contact Details:</h3>
          <p>Phone: 514-647-1841</p>
          <p>Email: jade.salter@gmail.com</p>
          <h4>Address:</h4>
          <p>1980 Rue Sherbrooke Ouest<br/>
          Montreal, QC<br/>
          H3H 1E8<br/>
          Canada</p>
          <ul className="icons">
            <li><a href="https://www.facebook.com/jadesaltersmt/" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
            <li><a href="https://www.instagram.com/jadesalter_smt/?hl=en" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main