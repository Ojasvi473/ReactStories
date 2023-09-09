import React from "react";
import "./Card.css";
const Card = () => {
  return (
    <div className="main">
      <div className="card-container">
        <div className="card">
          <img
            src="https://edyoda.s3.amazonaws.com/media/blog-images/learn_machine_learning_courses_online.png"
            className="card-img-top"
            alt="..."
          />
          <div className="card-content">
            <h3>Typical day of Data Scientist - An insider</h3>
            <h4 className="code">
              Edyoda<span className="time"> | 05 Jul 2019</span>
            </h4>

            <p>
              I’ve been a Data Scientist for three years now and I can only say
              that Chris Lynch was right - “ Big Data and Data Science are the
              foundation of all the trends that Data
            </p>
          </div>
        </div>

        <div className="card">
          <img
            src="https://edyoda.s3.amazonaws.com/media/blog-images/what_is_isa_blog_1.png"
            className="card-img-top"
            alt="..."
          />
          <div className="card-content">
            <h3>Amazon Web Services (AWS) Cloud Day -</h3>
            <h4 className="code">
              Edyoda<span class="time"> | 09 Jul 2019</span>
            </h4>

            <p>
              It was indeed a hectic day with back to back session sandwiched by
              good food and tea on a lighter note, need to investigate the
              tactics behind the 5-star hotels.
            </p>
          </div>
        </div>

        <div className="card">
          <img
            src="https://edyoda.s3.amazonaws.com/media/blog-images/automation-testing-an-overview-2.png"
            className="card-img-top"
            alt="..."
          />
          <div className="card-content">
            <h3>From identity crisis to the Success Scientist Story</h3>
            <h4 className="code">
              Arman Ahmed<span className="time"> | 07 Jul 2020</span>
            </h4>

            <p>
              Did you ever dream a world where computers are connected and will
              communicate with one another to ultimately make decisions without
              human.
            </p>
          </div>
        </div>
      </div>
      <div className="card-container">
        <div className="card">
          <img
            src="https://edyoda.s3.amazonaws.com/media/blog-images/7.png"
            className="card-img-top"
            alt="..."
          />
          <div className="card-content">
            <h3>Success Amazon Web Services (AWS) Cloud Day -</h3>
            <h4 className="code">
              Edyoda<span className="time"> | 03 Jul 2019</span>
            </h4>

            <p>
              Starting a career as a software developer obviously requires one
              to undertake a programming languages course that can cover
              everything from the basics to programming
            </p>
          </div>
        </div>
        <div className="card">
          <img
            src="https://edyoda.s3.amazonaws.com/media/blog-images/3.png"
            class="card-img-top"
            alt="..."
          />
          <div className="card-content">
            <h3>edYoda Meetup #01 : A Date with Cloud Scientist</h3>
            <h4 className="code">
              Edyoda<span className="time"> | 01 Jul 2020</span>
            </h4>

            <p>
              The google analytics dashboard was firing up, the whole team, each
              one of us was on the edges — half elated, half anxious and a
              little worried. And it happened,
            </p>
          </div>
        </div>
        <div className="card">
          <img
            src="https://edyoda.s3.amazonaws.com/media/blog-images/6.png"
            className="card-img-top"
            alt="..."
          />
          <div className="card-content">
            <h3>Master your General Aptitude Job Interview</h3>
            <h4 className="code">
              Arman Ahmed<span className="time"> | 05 Aug 2019</span>
            </h4>
            <p>
              If you learn cloud computing then you can make things much easier
              for your projects. You do not have to rely on multiple hard drives
              or data storage devices for with
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
