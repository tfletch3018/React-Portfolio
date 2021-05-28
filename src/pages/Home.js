import React from "react";
import profileImage from "../images/profileImage.jpg";

function Home() {
  return (
    <div>
      <div className="media">
        <div className="media-left">
          <img src={profileImage} className="media-object img-thumbnail" alt="" />
        </div>
        <div className="media-body">
          <div>

          </div>
          <div className="about">
            <h1 className="home">About Me</h1>
            <p className="about-me">
              I am a former hospitality and service industry professional with a background in Business Administration, and
              recent graduate of the Full-Stack Bootcamp hosted by the University of Pennsylvania. Effective at utilizing
              the strong organizational and planning skills attained from my experience as a customer service manager, as well as
              my creativity and desire to be challenged by a new endeavor.  Known to have an incredibly strong work ethic and the
              ability to place intense focus on the task at hand with the goal of seeing it through to completion.
          </p>
            <p className="about-me">
              I have been playing the piano since I was young, and really enjoy doing so in my spare time. And if I am not
              attempting to crack some code, I am probably taking a run, trying out a new recipe in the kitchen, or just
              hanging around with my two cats Lynx and Malley.
          </p>
          </div>

          <div className="about">
            <h1 className="home">Skills/ Technologies</h1>
            <ul className="skills">HTML</ul>
            <ul className="skills">CSS</ul>
            <ul className="skills">JavaScript</ul>
            <ul className="skills">NodeJS</ul>
            <ul className="skills">Git</ul>
            <ul className="skills">Express</ul>
            <ul className="skills">jQuery</ul>
            <ul className="skills">Bootstrap</ul>
            <ul className="skills">React</ul>
            <ul className="skills">MySQL</ul>
            <ul className="skills">NoSQL</ul>
            <ul className="skills">MongoDB</ul>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Home;
