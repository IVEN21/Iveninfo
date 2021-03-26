import React, { Component } from "react";
import { Waypoint } from "react-waypoint";
import { ClimbingBoxLoader } from "react-spinners";
import "font-awesome/css/font-awesome.css";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import Joi from "joi-browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
class Contact extends Component {
  state = {
    loading: false,
    error: "",
  };

  onchange = (value, spe) => {
    this.setState({ [spe]: value });
  };

  schema = {
    name: Joi.string().min(3).max(50).required(),
    email: Joi.string().min(3).max(50).email().required(),
    subject: Joi.string().min(3).max(50).required(),
    content: Joi.string().min(3).max(255).required(),
  };

  input_div = [
    {
      classname: "section-contact__form-input --name ",
      placeholder: "Name*",
      id: "name",
    },
    {
      classname: "section-contact__form-input --email ",
      placeholder: "Email*",
      id: "email",
    },
    {
      classname: "section-contact__form-input --subject ",
      placeholder: "Subject*",
      id: "subject",
    },
    {
      classname: "section-contact__form-textarea --content",
      placeholder: "Content*",
      id: "content",
    },
  ];

  validate = () => {
    const { name, email, subject, content } = this.state;
    const { error } = Joi.validate(
      {
        name,
        email,
        subject,
        content,
      },
      this.schema
    );
    this.setState({ error: error && error.details[0].message });
    return error && error.details[0].message;
  };

  onSubmit = async () => {
    const { name, email, subject, content } = this.state;
    if (this.validate()) return;
    this.setState({ loading: true });
    try {
      await axios.post("https://pornloapi.herokuapp.com/contact", {
        name: name,
        email: email,
        subject: subject,
        content: content,
      });
      this.setState({ loading: false });
      toast.success("Thank You for the Contact!");
    } catch (error) {
      toast.error("Server Down");
    }
    this.setState({ loading: false });
  };

  render() {
    return (
      <Waypoint
        topOffset="34%"
        bottomOffset="65%"
        onEnter={() => this.props.setActive_nav("contact")}
      >
        <section className="section-contact" id="contact">
          <ToastContainer />
          {this.state.loading && (
            <div className="section-contact__loader">
              <ClimbingBoxLoader color="#d1f7c6" />
            </div>
          )}
          <div className="section-contact__form-grid" data-aos="fade-up">
            <header className="section-contact__header">
              <h1>Say Hello!</h1>
            </header>
            {this.input_div.map((item) =>
              item.placeholder !== "Content*" ? (
                <div className={item.classname} key={item.placeholder}>
                  <input
                    placeholder={item.placeholder}
                    onChange={({ currentTarget: { value } }) =>
                      this.onchange(value, item.id.split(" ")[0])
                    }
                  />
                </div>
              ) : (
                <div className={item.classname} key={item.placeholder}>
                  <textarea
                    placeholder={item.placeholder}
                    onChange={({ currentTarget: { value } }) =>
                      this.onchange(value, item.id.split(" ")[0])
                    }
                  />
                </div>
              )
            )}
            {this.state.error && (
              <div className="section-contact_form-error">
                <p>
                  <FontAwesomeIcon icon={faExclamationCircle} />
                  {this.state.error}
                </p>
              </div>
            )}
            <button
              className="form-btn"
              onClick={() => {
                this.validate();
                this.onSubmit();
              }}
            >
              Submit
            </button>
          </div>
        </section>
      </Waypoint>
    );
  }
}

export default Contact;
