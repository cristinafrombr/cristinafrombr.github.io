import React from "react";
import "./App.css";

const projects = [
  {
    id: 1,
    title: "Pamono website & vendor portal",
    description:
      "Developed and maintained a furniture e-commerce platform and a React.js app for vendor use",
    image: "./pamono.png",
    link: "https://www.pamono.com/",
  },
  {
    id: 2,
    title: "Super Dario",
    description:
      "A simple game built with CSS animations and vanilla JavaScript",
    image: "./dario.jpg",
    link: "https://cristinafrombr.github.io/super-dario",
  },
  {
    id: 3,
    title: "Circula's CMS & product",
    description:
      "Maintained the CMS and product web app for German fintech company",
    image: "./circula.jpg",
    link: "https://www.pamono.com/",
  },
  {
    id: 4,
    title: "Moss onboarding features",
    description:
      "Developed key features for customer onboarding forms and the main dashboard",
    image: "./moss.jpg",
    link: "https://www.getmoss.com/en-gb",
  },
  {
    id: 5,
    title: "SmartTV app for major channel in Brazil",
    description:
      "Contributed to development of a SmartTV app to stream educational content, supporting all major TV brands, tablets, phones, and the web",
    image: "./futura.png",
    link: "https://futura.frm.org.br/",
  },
];

function App() {
  return (
    <div className="portfolio-container">
      <header>
        <h1>
          ACS <span>Senior Frontend Engineer</span>
        </h1>
        <div class="social-links">
          <div class="social-btn" id="upwork">
            <a href="https://www.upwork.com/freelancers/~0191f73044c81603d1">
              <svg
                class="social-svg"
                viewBox="0 0 70 70"
                xmlns="http://www.w3.org/2000/svg"
                fill="#ffffff"
              >
                <title>upwork</title>
                <path d="M42.4,17.7c-5.3,0-9.3,3.5-10.9,9c-2.5-3.9-4.5-8.3-5.6-12.1h-5.6v14.7c0,2.9-2.4,5.3-5.3,5.3c-2.9,0-5.3-2.4-5.3-5.3V14.7  H4.3v14.7c0,6.1,4.9,11,10.9,11c6,0,10.9-4.9,10.9-11v-2.5c1.1,2.2,2.5,4.6,4,6.7l-3.5,16.3h5.7L34.7,38c2.2,1.4,4.7,2.2,7.7,2.2  c6.1,0,11.1-5,11.1-11.4C53.5,22.7,48.5,17.7,42.4,17.7z M42.4,34.6c-2.2,0-4.5-1-6.3-2.5l0.6-2.2v-0.1c0.4-2.4,1.7-6.4,5.8-6.4  c3.1,0,5.6,2.5,5.6,5.6C48,32.1,45.3,34.6,42.4,34.6z" />
              </svg>
            </a>
          </div>
          <div class="social-btn" id="linkedin">
            <a href="https://www.linkedin.com/in/acsfrontend/">
              <svg
                class="social-svg"
                viewBox="0 0 600 600"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>linkedin</title>
                <g class="social-group" fill="none" fill-rule="evenodd">
                  <circle
                    class="social-group__inner-circle"
                    fill="#ffffff"
                    cx="300"
                    cy="300"
                    r="252.5"
                  />
                  <path
                    class="social-group__icon"
                    d="M278.9308 253.1923h43.5769v20.0539h.5923c6.0923-11.5077 20.9-23.6077 43.0692-23.6077 46.0308 0 54.577 30.2923 54.577 69.723v80.2154h-45.4385v-71.1615c0-17.0077-.2539-38.8385-23.6077-38.8385-23.6923 0-27.2462 18.5308-27.2462 37.5693v72.4307h-45.4384l-.0846-146.3846zm-74.1231 0h45.523V399.577h-45.523V253.1923zm22.8461-72.7692c14.5539 0 26.4 11.8461 26.4 26.4 0 14.5538-11.8461 26.4-26.4 26.4-14.6384 0-26.4-11.8462-26.4-26.4 0-14.5539 11.7616-26.4 26.4-26.4z"
                    fill="#000"
                    fill-rule="nonzero"
                  />
                </g>
              </svg>
            </a>
          </div>
          <div class="social-btn" id="github">
            <a href="https://github.com/cristinafrombr">
              <svg
                class="social-svg"
                viewBox="0 0 600 600"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>github</title>
                <g class="social-group" fill="none" fill-rule="evenodd">
                  <path
                    class="social-group__icon"
                    d="M300 150c-82.8348 0-150 68.8393-150 153.817 0 67.9687 42.991 125.558 102.5893 145.9151 7.5 1.4063 10.2455-3.3482 10.2455-7.433 0-3.683-.134-13.3259-.2009-26.183-41.7187 9.308-50.558-20.625-50.558-20.625-6.8304-17.7456-16.6741-22.5-16.6741-22.5-13.5938-9.576 1.0044-9.375 1.0044-9.375 15.067 1.0714 22.9688 15.8705 22.9688 15.8705 13.3929 23.5045 35.0893 16.741 43.6607 12.7902 1.3393-9.9107 5.2232-16.741 9.509-20.558-33.2813-3.884-68.3036-17.076-68.3036-76.0045 0-16.808 5.8259-30.5357 15.4018-41.25-1.5402-3.884-6.6965-19.5536 1.4732-40.7143 0 0 12.5893-4.1518 41.25 15.7366 11.9866-3.4152 24.7768-5.0893 37.567-5.1562 12.7231.067 25.5803 1.741 37.5669 5.1562 28.6607-19.8884 41.183-15.7366 41.183-15.7366 8.1697 21.1607 3.0134 36.8304 1.4733 40.7143 9.5758 10.7812 15.4017 24.509 15.4017 41.25 0 59.0625-35.0892 72.0536-68.5044 75.8705 5.3571 4.7545 10.1785 14.1295 10.1785 28.4598 0 20.558-.2009 37.1652-.2009 42.1875 0 4.0849 2.6786 8.9063 10.3125 7.3661C407.076 429.308 450 371.7187 450 303.817 450 218.8393 382.8348 150 300 150z"
                    fill="#FFF"
                    fill-rule="nonzero"
                  />
                </g>
              </svg>
            </a>
          </div>
          <div class="social-btn" id="curriculum">
            <a href="https://cristinafrombr.github.io/ACS_Front-End.pdf">
              <svg
                fill="#ffffff"
                class="social-svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384.97 384.97"
              >
                <title>download CV</title>
                <g>
                  <g>
                    <path
                      d="M192.485,0C86.185,0,0,86.173,0,192.485c0,106.3,86.185,192.485,192.485,192.485
			c106.312,0,192.485-86.185,192.485-192.485C384.97,86.173,298.797,0,192.485,0z M192.485,360.909
			c-93.018,0-168.424-75.406-168.424-168.424S99.467,24.061,192.485,24.061s168.424,75.406,168.424,168.424
			S285.503,360.909,192.485,360.909z"
                    />
                    <path
                      d="M268.095,209.243l-63.46,62.558V84.212c0-6.641-5.438-12.03-12.151-12.03c-6.713,0-12.151,5.39-12.151,12.03v187.589
			l-63.46-62.558c-4.74-4.692-12.439-4.692-17.179,0c-4.74,4.704-4.74,12.319,0,17.011l84.2,82.997
			c2.25,2.25,5.414,3.537,8.59,3.537c3.164,0,6.328-1.299,8.59-3.525l84.2-82.997c4.752-4.704,4.74-12.319,0-17.011
			C280.535,204.551,272.835,204.551,268.095,209.243z"
                    />
                  </g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                </g>
              </svg>
            </a>
          </div>
        </div>
      </header>

      {projects.map((project) => (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          key={project.id}
          className="project-item"
        >
          <img
            src={project.image}
            alt={project.title}
            className="project-image"
          />
          <div className="project-details">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
          </div>
        </a>
      ))}
    </div>
  );
}

export default App;
