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
            <h1>Welcome To Projects!</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
      <div className="col-sm-9">
        <div class="card-first">
          <div class="card-header">
            Project 1: Group Collaboration
              </div>
          <div class="card-body">
            <blockquote class="blockquote mb-0">
              <p>(babysittr)</p>
              <a href="https://github.com/tfletch3018/project-1" class="btn-project" alt="" >Projects</a>
              <footer class="blockquote-footer">
                {/* <figcaption class="text-center">Photo by <a
                        // href="https://unsplash.com/@picsbyjameslee?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">James
                        // Lee</a> on <a
                        // href="/t/textures-patterns?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" alt="" >Unsplash</a> */}

              </footer>
            </blockquote>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-6">
          <div class="card-second">
            <div class="card-body">
              <h5 class="card-title">Team Profile Generator</h5>
              <p class="card-text">JavaScript</p>
              <a href="https://github.com/tfletch3018/Team-Profile-Generator" class="btn-project">Projects</a>
              <footer class="blockquote-footer">
                {/* <figcaption class="text-center">Photo by <a
                          href="https://unsplash.com/@nickkane?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Nick
                          Kane</a> on <a
                          href="/t/textures-patterns?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a> */}

              </footer>
            </div>
          </div>
        </div>
      </div>

      <div class="col-sm-6">
        <div class="card-third">
          <div class="card-body">
            <h5 class="card-title">Employee Tracker</h5>
            <p class="card-text">JavaScript</p>
            <a href="https://github.com/tfletch3018/Employee-Tracker" class="btn-project">Projects</a>
            <footer class="blockquote-footer">
              {/* <figcaption class="text-center">Photo by <a
                          href="https://unsplash.com/@iswanto?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Iswanto
                          Arif</a> on <a
                          href="/t/textures-patterns?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a> */}
            </footer>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-6">
          <div class="card-fourth">
            <div class="card-body">
              <h5 class="card-title">Note Taker</h5>
              <p class="card-text">JavaScript/ CSS/ HTML</p>
              <a href="https://github.com/tfletch3018/Note-Taker" class="btn-project">Projects</a>
              <footer class="blockquote-footer">
                {/* <figcaption class="text-center">Photo by <a
                          href="https://unsplash.com/@eberhardgross?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Photo
                          by <a
                            href="https://unsplash.com/@cfitz?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Cody
                            Fitzgerald</a> on <a
                            href="/t/nature?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a> */}
              </footer>
            </div>
          </div>
        </div>
      </div>

      <div class="col-sm-6">
        <div class="card-fifth">
          <div class="card-body">
            <h5 class="card-title">Weather Dashboard</h5>
            <p class="card-text">JavaScript/ CSS/ HTML</p>
            <a href="https://github.com/tfletch3018/Weather-Dashboard" class="btn-project">Projects</a>
            <footer class="blockquote-footer">
              {/* <figcaption class="text-center">Photo by <a
                          href="https://unsplash.com/@jeisblack?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jason
                          Blackeye</a> on <a
                          href="/t/nature?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a> */}
            </footer>
          </div>
        </div>
      </div>
      </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Projects;
