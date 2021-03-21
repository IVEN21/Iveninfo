import React, { Component } from "react";
import { Waypoint } from "react-waypoint";
import { ClimbingBoxLoader } from "react-spinners";
import "font-awesome/css/font-awesome.css";
import axios from "axios";
import { toast } from "react-toastify";
class Contact extends Component {
  state = {
    loading: false,
  };

  onchange = (value, spe) => {
    this.setState({ [spe]: value });
  };

  validate = () => {
    const { name, email, subject, content } = this.state;
    if (
      name &&
      name.length > 0 &&
      email &&
      email.length > 0 &&
      subject &&
      subject.length > 0 &&
      content &&
      content.length > 0
    )
      return true;
    return false;
  };
  onSubmit = async () => {
    const { name, email, subject, content } = this.state;
    this.setState({ loading: true });
    try {
      await axios.post("https://pornloapi.herokuapp.com/contact", {
        name: name,
        email: email,
        subject: subject,
        content: content,
      });
      this.setState({ loading: false });
      toast.success("Thank you for contact me!");
    } catch (error) {
      console.log("Server Down");
    }
    this.setState({ loading: false });
  };
  render() {
    const input_div = [
      { cs: "name div_input", ph: "Name*" },
      { cs: "email div_input", ph: "Email*" },
      { cs: "subject div_input", ph: "Subject*" },
      { cs: "content content_input", ph: "Content*" },
    ];
    return (
      <Waypoint
        topOffset="34%"
        bottomOffset="65%"
        onEnter={() => this.props.setActive_nav("contact")}
      >
        <div className="contact main" id="contact">
          {this.state.loading && (
            <div className="contact_loading">
              <ClimbingBoxLoader color="#d1f7c6" />
            </div>
          )}
          <div className="contact_field">
            <div className="title">
              <h1>Say Hello!</h1>
            </div>
            {input_div.map((item) =>
              item.ph !== "Content*" ? (
                <div className={item.cs} key={item.ph}>
                  <input
                    placeholder={item.ph}
                    onChange={({ currentTarget: { value } }) =>
                      this.onchange(value, item.cs.split(" ")[0])
                    }
                  />
                </div>
              ) : (
                <div className={item.cs} key={item.ph}>
                  <textarea
                    placeholder={item.ph}
                    onChange={({ currentTarget: { value } }) =>
                      this.onchange(value, item.cs.split(" ")[0])
                    }
                  />
                </div>
              )
            )}
            <div
              className={this.validate() ? "btn active" : "btn disabled"}
              onClick={() => this.onSubmit()}
            >
              <label>Submit</label>
            </div>
          </div>
        </div>
      </Waypoint>
    );
  }
}

export default Contact;
