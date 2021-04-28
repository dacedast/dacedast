import React, {useEffect} from 'react'
import "./Work.css"
import Aos from 'aos'
import "aos/dist/aos.css"
import {motion} from 'framer-motion'


const Work = () => {
  useEffect(() => {
        Aos.init({duration: 700, easing: 'ease-in-quad'});
    },[])
    const fadingOut = {
        hidden: {opacity: 0, y: '-100vh', scale: 0.1},
        visible: {opacity: 1, y: 0, scale: 1}
    }
    return (
        <motion.div className="wrapper" 
            variants={fadingOut}
            initial='hidden'
            animate='visible'
            transition={{ duration: 1.3 }}
            >
          <h1>My Latest Works</h1>
        <main className="page-content">
  <div className="card" data-aos="zoom-in-down" data-aos-delay="600">
    <div className="content">
      <h2 className="title">Mountain View</h2>
      <p className="copy">Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains</p>
      <button className="btn">View Project</button>
    </div>
  </div>
  <div className="card" data-aos="zoom-in-down" data-aos-delay="600">
    <div className="content">
      <h2 className="title">To The Beach</h2>
      <p className="copy">Plan your next beach trip with these fabulous destinations</p>
      <button className="btn">View Project</button>
    </div>
  </div>
  
  <div className="card" data-aos="zoom-in-down" data-aos-delay="600">
    <div className="content">
      <h2 className="title">Desert Destinations</h2>
      <p className="copy">It's the desert you've always dreamed of</p>
      <button className="btn">View Project</button>
    </div>
  </div>
  <div className="card" data-aos="zoom-in-down" data-aos-delay="600">
    <div className="content">
      <h2 className="title">Explore The Galaxy</h2>
      <p className="copy">Seriously, straight up, just blast off into outer space today</p>
      <button className="btn">View Project</button>
    </div>
  </div>
  
</main>
</motion.div>
    )
}

export default Work
