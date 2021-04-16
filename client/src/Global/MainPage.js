import React from 'react'
import './MainPage.css'
export const MainPage = () => {
  return (
    <section id="hero">
      <div
        className="container pt-7 pb-6 text-center text-md-left">
        <div className="row align-items-center">
          <div className="col-lg-5 offset-lg-1 order-2 hero-image">
            <img src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/spirit/hero/6a3ccd8e5c9a0e8ebea4235d12da6b24/hero.png" width="931" height="1205" className="img-fluid" alt="" />
          </div>
          <div className="col-lg-7">
            <h1>My Project's helps you to move work forward.</h1>
            <p>Create, manage projects, and reach new productivity peaks.
               From high rises to the home office, the way your team works is unique—accomplish it all with "My Projects".</p>
            <div className="col-md-5 pl-md-2">
              <button type="submit" className="btn btn-wrap btn-primary btn-block px-4">Sign up—it’s free!</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
