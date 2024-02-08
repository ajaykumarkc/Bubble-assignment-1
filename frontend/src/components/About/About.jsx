import React from "react";
import "./aboutSection.css";
import { Typography, Avatar } from "@material-ui/core";
import { TiSocialLinkedin } from "react-icons/ti";

const About = () => {

  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About </Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://media.licdn.com/dms/image/D4D03AQEKAyJ7qzpBPw/profile-displayphoto-shrink_200_200/0/1679565411885?e=1712188800&v=beta&t=WIYDw_KQtC_Pc2phjrUfmoDZcACOqpmztVze5al6ojU"
              alt="Founder"
            />
            <Typography>Ajay Kumar</Typography>

            <span>
              This is a simple UserFeedBack Portal made by @ajaykumar.It is made using ReactJs,NodeJs,MongoDB and Tailwind Css.
              User Authentication APIs are Available in the Backend Folder Which can be Implented in this.
              We can also add forget password feature using nodemailer and jwtTokens.
              Use Cloudinary for image uploading and show user profiles.I Have Used vanilla Redux instead of Redux-toolkit for state
              management.The backend is complete and all the REST APIs are well tested on Postman.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Connect</Typography>
            <a
              href="https://www.linkedin.com/in/ajay-kumar-koilathachetta-369675252/"
              target="blank"
            >
              <TiSocialLinkedin className="youtubeSvgIcon" />
            </a>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;