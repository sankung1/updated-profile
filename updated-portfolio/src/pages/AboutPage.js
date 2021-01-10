import React from "react";
import Content from "../components/Content";
import Message from "../components/Message";

function AboutPage(props) {
  return (
    <div>
      <Message title={props.title} />
      <Content>
        I am a Full-stack developer with a solid background in both front-end
        and back-end development. I have skills in JavaScript, CSS3, HTML5,
        React.js, jQuery, Node.js and data-base skills in MySQL and MongoDb
        which I use to create responsive and dynamic client side apps as well as
        server side applications. I pride myself as a fast learner and always
        eager to learn. I work excellently in teams as I've worked in several
        group projects with my team to build apps with a sole focus in mobile
        first designs.
      </Content>
    </div>
  );
}

export default AboutPage;
