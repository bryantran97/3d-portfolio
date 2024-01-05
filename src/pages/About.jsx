import React from "react";
import "react-vertical-timeline-component/style.min.css";
import CTA from "../components/CTA";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm{" "}
        <span className="bg-gradient-to-r from-orange-500 via-red-400 to-orange-400 inline-block text-transparent bg-clip-text font-semibold drop-shadow">
          Manh Dinh
        </span>
        &nbsp;👋🏻
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          I'm a <b>Full Stack Software Engineer</b>. 👨🏻‍💻
          <br />I also happen to be based in <b>Dallas, Texas</b>! 📍
          <br /> <br />
          In short, I'm <i>creative</i> developer who enjoys creating cute web
          portfolios as a hobby. But... I also dabble in many different hobbies
          such as digital art, video editing, fitness, nutrition, fashion, and
          many more! Last thing you need to know about me is that I am also a
          fan of pineapple on pizza! 🍕
        </p>
      </div>
      <div className="py-10">
        <h3 className="subhead-text">Work Experience</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            I've got 5 years of experience in the Software Engineering field,
            and I've worked with many different teams. I have general experience
            in Infrastructure and Back End but I am highly passionate about
            Front End development. 🥂
          </p>
          <br />
          <div>
            • Software Engineer @ <b>Current Company</b> (July 2021 - Present)
            <div className="text-sm px-8">
              - Lead a team of 5 engineers on a new MFE (Micro Front End)
              project in LitElement and TypeScript which provided car trade in
              valuations, on the front page of the website
              <br />
              - Optimized MFE builds to reduce their bundle size, increase
              performance, and improve first load speed
              <br />- Owned and maintained existing Front End Angular
              applications and Back-end Java applications
              <br />- Created and managed RESTful APIs in Java and Spring Boot
              <br />- Amazon Web Services Solutions Architect - Associate
              (Credential ID: 5S2ZBGTBPM4EQ15W)
            </div>
          </div>
          <div>
            • Software Engineer @ <b>Previous Company</b> (June 2019- July 2021)
            <div className="text-sm px-8">
              - Developed and maintained front end applications using React &
              JavaScript
              <br />
              - Built RESTful APIs for applications in Kotlin, Java, and Spring
              Boot
              <br />- Created and managed internal repositories (NPM, PyPi,
              Docker, etc.) for the organization Created and managed alerting,
              monitoring, and data visualization around the organization’s
              applications
            </div>
          </div>
          <div>
            • Software Engineer Intern @ <b>USAA</b> (Summer 2018)
            <div className="text-sm px-8">
              - Developed a chrome extension in React to determine whether or
              not third party libraries are safe to use internally
            </div>
          </div>
          <div>
            • Software Engineer Intern @ <b>Walmart Labs</b> (Winter 2017)
            <div className="text-sm px-8">
              - Developed a log in portal in React for logging and monitoring
              user check ins at Walmart offices
            </div>
          </div>
        </div>
      </div>
      <hr className="border-slate" />
      <CTA />
    </section>
  );
};

export default About;
