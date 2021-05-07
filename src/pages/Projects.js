import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function Projects() {
  return (
    <div>

      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Projects</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <div className="card-first" >
              <div class="card-header">
                Project 1: Group Collaboration
              </div>
              <div className="card-body">
                <blockquote class="blockquote mb-0">
                  <p>(babysittr)</p>
                  <a href="https://github.com/tfletch3018/project-1" class="btn-project" alt="" >Github repo</a>
                  <a href="https://polysnacktyl.github.io/project-1/" class="btn-project" alt="" >Deployed application</a>
                  <footer class="blockquote-footer">
                    <figcaption class="text-center">Photo by
                <a href="https://unsplash.com/@picsbyjameslee?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" alt="" >James Lee</a> on
                <a href="/t/textures-patterns?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" alt="" >Unsplash</a>
                    </figcaption>
                  </footer>
                </blockquote>
              </div>
            </div>

            <div class="card-second">
              <div class="card-body">
                <h5 class="card-title">Workout Tracker</h5>
                <p class="card-text">JavaScript/ CSS/ HTML</p>
                <a href="https://github.com/tfletch3018/Workout-Tracker" class="btn-project">Github repo</a>
                <a href="https://sleepy-fortress-48942.herokuapp.com/?id=6088694a92342e0015fb5d32" class="btn-project">Deployed application</a>
                <footer class="blockquote-footer">
                  <figcaption class="text-center">Photo by
                <a href="https://unsplash.com/@nickkane?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Nick Kane</a> on
                <a href="/t/textures-patterns?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                  </figcaption>
                </footer>
              </div>
            </div>

            <div class="card-third">
              <div class="card-body">
                <h5 class="card-title">Project 2: Groupie</h5>
                <p class="card-text">CSS/ JavaScript/ Handlebars/ HTML</p>
                <a href="https://github.com/tfletch3018/Project-2" class="btn-project">Github repo</a>
                <a href="http://sleepy-headland-27879.herokuapp.com/" class="btn-project">Deployed application</a>
                <footer class="blockquote-footer">
                  <figcaption class="text-center">Photo by
                <a href="https://unsplash.com/@iswanto?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Iswanto Arif</a> on
                <a href="/t/textures-patterns?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                  </figcaption>
                </footer>
              </div>
            </div>

            <div class="card-fourth">
              <div class="card-body">
                <h5 class="card-title">Note Taker</h5>
                <p class="card-text">JavaScript/ CSS/ HTML</p>
                <a href="https://github.com/tfletch3018/Note-Taker" class="btn-project">Github repo</a>
                <a href="https://tfletchnote-taker.herokuapp.com/" class="btn-project">Deployed application</a>
                <footer class="blockquote-footer">
                  <figcaption class="text-center">Photo by
                    <a href="https://unsplash.com/@eberhardgross?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Photo by
                    <a href="https://unsplash.com/@cfitz?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Cody Fitzgerald</a> on <a href="/t/nature?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></a>
                  </figcaption>
                </footer>
              </div>
            </div>

            <div class="card-fifth">
              <div class="card-body">
                <h5 class="card-title">Weather Dashboard</h5>
                <p class="card-text">JavaScript/ CSS/ HTML</p>
                <a href="https://github.com/tfletch3018/Weather-Dashboard" class="btn-project">Github repo</a>
                <a href="https://tfletch3018.github.io/Weather-Dashboard/" class="btn-project">Deployed application</a>
                <footer class="blockquote-footer">
                  <figcaption class="text-center">Photo by
                      <a href="https://unsplash.com/@jeisblack?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jason Blackeye</a> on
                      <a href="/t/nature?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                  </figcaption>
                </footer>
              </div>
            </div>

            <div class="card-sixth">
              <div class="card-body">
                <h5 class="card-title">Offline Budget Trackers</h5>
                <p class="card-text">JavaScript/ HTML/ CSS</p>
                <a href="https://github.com/tfletch3018/Offline-Budget-Trackers" class="btn-project">Github repo</a>
                <a href="https://agile-bastion-05761.herokuapp.com/" class="btn-project">Deployed application</a>
                <footer class="blockquote-footer">
                  <figcaption class="text-center">Photo by
                        <a href="https://unsplash.com/@stavrialena?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Stavrialena Gontzou</a> on
                        <a href="https://unsplash.com/t/textures-patterns?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
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