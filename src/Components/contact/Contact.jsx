import "./contact.scss";
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
// import GetAppIcon from "@material-ui/icons/GetApp";
import { useTranslation } from "react-i18next";
import reference from "../../reference.pdf";
import curriculum from "../../curriculum.pdf";
import { AiFillMail, AiFillPhone } from "react-icons/ai";
import { FcDownload } from "react-icons/fc";

export default function Contact() {
  const [message, setMessage] = useState(false);

  const form = useRef();

  const { t } = useTranslation();

  const sendEmail = (e) => {
    emailjs
      .sendForm(
        "gmail",
        "template_dgk7xfw",
        form.current,
        "user_1MQLI44eW61tRuBS7gdIC"
      )
      .then(
        (result) => {
          // console.log(result.text);
        },
        (error) => {
          // console.log(error.text);
        }
      );
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
    sendEmail();
  };

  return (
    <div className="contact" id="contact">
      <div className="leftContact">
        <div className="leftContainer">
          <div className="contactDesc">
            <div className="contactDescBlur">
              <h2>{t("Thank you for your Time!")}</h2>
              <p>
                {t(
                  "I have created this portfolio without any templates or tutorials and tried to include a bit of myself in it."
                )}
              </p>
              <p>
                {t(
                  "You can leave me a message through the contact form, I would love to hear from you!"
                )}
              </p>
            </div>
          </div>
          <div className="itemsContainer">
            <div className="itemsContainerBlur">
              <div className="itemContainerPhone">
              <AiFillPhone className="icon"/>
               
                <span>+32 494 846 838</span>
              </div>
              <div className="itemContainerMail">
              <AiFillMail className="icon"/>
                <span>
                  <a href="mailto:tiagofqaferreira@gmail.com">
                    tiagofqaferreira@gmail.com
                  </a>
                </span>
              </div>
              <div className="itemContainerLinkedIn">
                <span>
                  <a href={reference} target="_blank" rel="noreferrer noopener">
                    <button className="buttonLinkedIn">
                    
                     <FcDownload value={{color: "white"}} className="icon"/>
                      {t("References")}
                    </button>
                  </a>
                </span>
              </div>
              <div className="itemContainerCv">
                <a
                  href={curriculum}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                >
                  <button className="curriculumButton" id="curriculumButtonId">
                    
                  <FcDownload value={{color: "white"}} className="icon"/>
                    {t("Download CV")}
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <form
          ref={form}
          onSubmit={handleSubmit}
          className="formContact"
          id="module"
        >
          <h1>{t("Contact Form")}</h1>
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <textarea
            placeholder="Message"
            id=""
            cols="30"
            rows="8"
            name="message"
          ></textarea>
          <button type="submit" value="send">
            Send
          </button>
          {message && (
            <span className="submitMessage">
              {t(
                "Thank you for your message! I will reply at the earliest convenience!"
              )}
            </span>
          )}
        </form>
      </div>
      <div className="footer">{t("Created by ")}@FTWebDev2021</div>
    </div>
  );
}
