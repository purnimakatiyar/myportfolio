import React from "react";
import "./Experience.css";

function Experience() {
  return (
    <div className="experience component__space" id="Experience">
      <div className="heading">
        <h1 className="heading">Work Experience</h1>
        <p className="heading p__color">Where I have worked & contributed</p>
      </div>

      <div className="container">
        <div className="row">

          {/* Job 1 */}
          <div className="col__3">
            <div className="experience__box pointer">
              <h2 className="experience__title">Software Engineer (Backend)</h2>
              <h4 className="experience__company">Abstrabit Technologies Pvt Ltd</h4>
              <p className="experience__duration">Sep 2024 – Present</p>
              <p className="experience__desc">
                • Designed and implemented job manager portal reducing manual errors by 30%. <br />
                • Built AWS architecture (EC2, RDS) with automated deployments. <br />
                • Fixed critical bugs boosting performance by 40%. <br />
                • Developed automated email notifications. <br />
                • Implemented RBAC for security and role-specific features. <br />
                • Enhanced audit tool system for easy reporting. <br />
                • Built REST APIs for a mentoring app. <br />
                • Handled domain setup and deployment on AWS Amplify.
              </p>
            </div>
          </div>

          {/* Job 2 */}
          <div className="col__3">
            <div className="experience__box pointer">
              <h2 className="experience__title">Software Development Engineer Intern</h2>
              <h4 className="experience__company">Syscore Solutions Pvt Ltd</h4>
              <p className="experience__duration">Jul 2024 – Sep 2024</p>
              <p className="experience__desc">
                • Enhanced IWBI WELL project with frontend & backend improvements. <br />
                • Integrated Google Maps API for interactive maps. <br />
                • Implemented Google OAuth for secure login. <br />
                • Improved UI/UX using Vue.js & TailwindCSS. <br />
                • Worked with Docker for containerized deployments.
              </p>
            </div>
          </div>

          {/* Job 3 */}
          <div className="col__3">
            <div className="experience__box pointer">
              <h2 className="experience__title">Software Development Engineer Intern</h2>
              <h4 className="experience__company">Watchguard Technologies Pvt Ltd</h4>
              <p className="experience__duration">Sep 2023 – Jul 2024</p>
              <p className="experience__desc">
                • Developed REST APIs using Flask & FastAPI for microservices. <br />
                • Built scalable backend services using AWS Lambda & API Gateway. <br />
                • Authored IaC templates for AWS resource automation. <br />
                • Increased test coverage from 72% to 89% with Pytest. <br />
                • Co-developed WG Car Pooling System (full-stack). <br />
              </p>
            </div>
          </div>

          {/* Job 4 */}
          <div className="col__3">
            <div className="experience__box pointer">
              <h2 className="experience__title">Web Developer Intern</h2>
              <h4 className="experience__company">Let’s Grow More</h4>
              <p className="experience__duration">Sep 2022 – Oct 2022</p>
              <p className="experience__desc">
                • Built responsive frontend apps using HTML, CSS, JS. <br />
                • Created projects like To-Do App and Calculator. <br />
                • Learned industry workflows & teamwork.
              </p>
            </div>
          </div>

          {/* Job 5 */}
          <div className="col__3">
            <div className="experience__box pointer">
              <h2 className="experience__title">Open Source Contributor</h2>
              <h4 className="experience__company">GirlScript Summer of Code</h4>
              <p className="experience__duration">Mar 2022 – May 2022</p>
              <p className="experience__desc">
                • Contributed to open-source projects. <br />
                • Fixed bugs, added features, and improved documentation. <br />
                • Collaborated with global developer community.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Experience;
