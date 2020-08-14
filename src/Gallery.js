import React from "react";
import "./App.css";

function About() {
  const styleObj = {
    fontSize: 18,
    textAlign: "left",
    paddingTop: "5px",
    paddingLeft: "20px",
    paddingRight: "20px",
  };
  return (
    <div className="App">
      <div class="container">
        <div>
          <br /> <br /> <br /> <br />
        </div>
        <div className="d-flex justify-content-center">
          <img
            src={require("./Phabian3.jpg")}
            alt="CEO/Director Kibali-Tech"
            height="300"
            width="400"
            className="float-left img-responsive"
          />
          <p>
            <font face="arial" size="+2" color="#6699ff">
              Bwire Phabiano, Co-Founder/CEO/Director
            </font>
            <p style={styleObj}>
              Phabiano holds a BS in Science with Education from (Busitema
              University), a Diploma in Secondary Education- Biology/ Chemistry
              (Kyambogo University), and a Certificate in Computer Education
              (Moi University Eldoret – Kenya). He has taught and examined
              Bio/Chem for 10 years and is intimately familiar with the issues
              regarding deficiencies in access to education especially in rural
              areas. He and a colleague started Kibali-Tech to provide access to
              computer programming education in Busia in March 2019.
            </p>
          </p>
        </div>
        <br /> <br /> <br /> <br /> <br />
        <div className="clearfix justify-content-center">
          <img
            src={require("./Newton.jpg")}
            alt="Programs Cordinator"
            height="300"
            width="300"
            className="float-right img-responsive"
          />
          <p>
            <font face="Times New Roman" size="+2" color="#6699ff">
              Wafula Newton, Programs Cordinator
            </font>
            <p style={styleObj}>
              Newton is a senior student of Computer Science ( Makerere
              University). Before joining Kibali-Tech, he worked with Diamond
              trust bank as a networking officer.
            </p>
          </p>
        </div>
        <br /> <br /> <br /> <br />
        <div className="clearfix justify-content-center">
          <img
            src={require("./Moses.JPG")}
            alt="Team Lead Flutter"
            height="300"
            width="400"
            className="float-left img-responsive"
          />
          <p>
            <font face="Times New Roman" size="+2" color="#6699ff">
              Odwori Moses, Team Lead
            </font>
            <p style={styleObj}>
              Moses holds a BA degree in Education with Economics (Makerere
              University). He previously taught in high schools for over 5
              years.
            </p>
          </p>
        </div>
        <br /> <br /> <br /> <br />
        <div className="clearfix justify-content-center">
          <img
            src={require("./Tabitha.jpg")}
            alt="Secretary Finance"
            height="400"
            width="400"
            className="float-right img-responsive"
          />
          <p>
            <font face="Times New Roman" size="+2" color="#6699ff">
              Logose Tabitha, Secretary Finance
            </font>
            <p style={styleObj}>
              Tabitha holds a certificate in accounts and finance (UDBS) UCC
              Tororo. She also runs the Kibali-Tech Café.
            </p>
          </p>
        </div>
        <br /> <br /> <br /> <br />
        <div className="clearfix justify-content-center">
          <img
            src={require("./Job.JPG")}
            alt="Assistant Programs Cordinator"
            height="300"
            width="400"
            className="float-left img-responsive"
          />
          <p>
            <font face="Times New Roman" size="+1" color="#6699ff">
              Masinde Joel, Assistant Programs Cordinator
            </font>
            <p style={styleObj}>
              Joel is an undergraduate of Medicine and Surgery at Makerere
              University, He also holds an Online BS degree in Computer Science.
              He leads the Enterprise Application development.
            </p>
          </p>
        </div>
        <br /> <br /> <br /> <br />
        <div className="clearfix justify-content-center">
          <img
            src={require("./hellen.jpg")}
            alt="General Secretary"
            height="300"
            width="300"
            className="float-right img-responsive"
          />
          <p>
            <font face="Times New Roman" size="+2" color="#6699ff">
              Nabwire Hellen, General Secretary
            </font>
            <p style={styleObj}>
              Nabwire holds a BA in Social Arts and Social Sciences plus a
              certificate in Computer Studies both from (Makerere University)
            </p>
          </p>
        </div>
        <br /> <br /> <br /> <br />
        <div className="clearfix justify-content-center">
          <img
            src={require("./lilian.jpg")}
            alt="Team Lead Mobile Development"
            height="300"
            width="300"
            className="float-left img-responsive"
          />
          <div>
            <font face="Times New Roman" size="+2" color="#6699f">
              Anyango Lilian, Team Lead Mobile Development
            </font>
            <p style={styleObj}>
              Lilian holds an advanced certificate of education.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
