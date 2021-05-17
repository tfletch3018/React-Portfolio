import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function Projects() {
  return (
    <div>
<h1 className="text-center">Projects</h1>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <div className="card-first" >
              <div className="card-header">
                Project 1: Group Collaboration
              </div>
              <div className="card-body">
                <blockquote className="blockquote mb-0">
                  <p>(babysittr)</p>
                  <a href="https://github.com/tfletch3018/project-1" className="btn-project" alt="" >Github repo</a>
                  <a href="https://polysnacktyl.github.io/project-1/" className="btn-project" alt="" >Deployed application</a>
                  <footer className="blockquote-footer">
                    <figcaption className="text-center">Photo by
                <a className="links" href="https://unsplash.com/@picsbyjameslee?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" alt="" >James Lee</a> on
                <a className="links" href="/t/textures-patterns?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" alt="" >Unsplash</a>
                    </figcaption>
                  </footer>
                </blockquote>
              </div>
            </div>

            <div className="card-second">
              <div className="card-body">
                <h5 className="card-title">Workout Tracker</h5>
                <p className="card-text">JavaScript/ CSS/ HTML</p>
                <a href="https://github.com/tfletch3018/Workout-Tracker" className="btn-project">Github repo</a>
                <a href="https://sleepy-fortress-48942.herokuapp.com/?id=6088694a92342e0015fb5d32" className="btn-project">Deployed application</a>
                <footer className="blockquote-footer">
                  <figcaption className="text-center">Photo by
                <a className="links" href="https://unsplash.com/@nickkane?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Nick Kane</a> on
                <a className="links" href="/t/textures-patterns?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                  </figcaption>
                </footer>
              </div>
            </div>

            <div className="card-third">
              <div className="card-body">
                <h5 className="card-title">Project 2: Groupie</h5>
                <p className="card-text">CSS/ JavaScript/ Handlebars/ HTML</p>
                <a href="https://github.com/tfletch3018/Project-2" className="btn-project">Github repo</a>
                <a href="http://sleepy-headland-27879.herokuapp.com/" className="btn-project">Deployed application</a>
                <footer className="blockquote-footer">
                  <figcaption className="text-center">Photo by 
                  <a className="links" href="https://unsplash.com/@t_lipke?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Thomas Lipke</a> on 
                  <a className="links" href="https://unsplash.com/s/photos/red?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                  </figcaption>
                </footer>
              </div>
            </div>

            <div className="card-fourth">
              <div className="card-body">
                <h5 className="card-title">Note Taker</h5>
                <p className="card-text">JavaScript/ CSS/ HTML</p>
                <a href="https://github.com/tfletch3018/Note-Taker" className="btn-project">Github repo</a>
                <a href="https://tfletchnote-taker.herokuapp.com/" className="btn-project">Deployed application</a>
                <footer className="blockquote-footer">
                  <figcaption className="text-center">Photo by
                    <a className="links" href="https://unsplash.com/@cfitz?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Cody Fitzgerald</a> on 
                    <a className="links" href="/t/nature?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                  </figcaption>
                </footer>
              </div>
            </div>

            <div className="card-fifth">
              <div className="card-body">
                <h5 className="card-title">The Employee Directory</h5>
                <p className="card-text">JavaScript/ CSS/ HTML</p>
                <a href="https://github.com/tfletch3018/the-employee-directory" className="btn-project">Github repo</a>
                <a href="https://tfletch3018.github.io/the-employee-directory/" className="btn-project">Deployed application</a>
                <footer className="blockquote-footer">
                   <figcaption className="text-center">Photo by 
                   <a className="links" href="https://unsplash.com/@ej1209_?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">EJ Li</a> on 
                   <a className="links" href="https://unsplash.com/s/photos/orchids?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>   
                  </figcaption>
                </footer>
              </div>
            </div>

            <div className="card-sixth">
              <div className="card-body">
                <h5 className="card-title">Offline Budget Trackers</h5>
                <p className="card-text">JavaScript/ HTML/ CSS</p>
                <a href="https://github.com/tfletch3018/Offline-Budget-Trackers" className="btn-project">Github repo</a>
                <a href="https://agile-bastion-05761.herokuapp.com/" className="btn-project">Deployed application</a>
                <footer className="blockquote-footer">
                  <figcaption className="text-center">Photo by
                        <a className="links" href="https://unsplash.com/@stavrialena?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Stavrialena Gontzou</a> on
                        <a className="links" href="https://unsplash.com/t/textures-patterns?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                  </figcaption>
                </footer>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Projects;