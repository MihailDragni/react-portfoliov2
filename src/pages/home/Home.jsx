import React from 'react'
import Photo from '../../assets/photo.jpg'
import './home.css'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation'

const Home = () => {
  return (
    <section className="section home grid">
      <img src={Photo} alt="" className="home__img" />
      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>I'm Dragni Mihail.</span>
            <TypeAnimation
              sequence={[
                'Frontend Developer',
                2000,
                'UI Designer',
                2000,
                'Youtuber',
                2000,
              ]}
              speed={10}
              wrapper="span"
              repeat={Infinity}
              style={{ color: 'hsl(0, 0%, 40%)' }}
            />
          </h1>

          <p className="home__description">
            Hi there, I'm a frontend developer who is dedicated to continuous
            learning and striving for success in the IT industry. I have a
            passion for programming and make a daily effort to improve my skills
            and expand my knowledge of technologies. I'm ready to invest my
            potential and energy to solve any tasks that are assigned to me. I
            firmly believe that hard work, perseverance, and a desire for
            excellence will help me achieve my career goals as a developer.
          </p>

          <Link to="/about" className="button">
            More About Me
            <span className="button__icon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>
      <div className="color__block"></div>
    </section>
  )
}

export default Home
