import React, { Component } from 'react';
import { Waypoint } from 'react-waypoint';
import "font-awesome/css/font-awesome.css";
class Contact extends Component {
    state = {}

    onchange = (value, spe) => {
        this.setState({ [spe]: value })
    }

    validate = () => {
        const { name, email, subject, content } = this.state
        if (
            name && name.length > 0 &&
            email && email.length > 0 &&
            subject && subject.length > 0 &&
            content && content.length > 0
        ) return true
        return false
    }

    render() {
        const input_div = [

            { cs: "name div_input", ph: "Name*" },
            { cs: "email div_input", ph: "Email*" },
            { cs: "subject div_input", ph: "Subject*" },
            { cs: "content div_input ", ph: "Content*" },

        ]
        return (
            <Waypoint topOffset="34%"
                bottomOffset="65%"

                onEnter={() => this.props.setActive_nav("contact")}>
                <div className="contact main" id="contact">
                    <div className="contact_field">
                        <div className="title">
                            <h1>Say Hello!</h1>

                        </div>
                        {input_div.map((item) => item.ph !== "Content*" ? <div className={item.cs} key={item.ph}>
                            <input placeholder={item.ph} onChange={({ currentTarget: { value } }) => this.onchange(value, item.cs.split(" ")[0])} />
                        </div> : <div className={item.cs} key={item.ph}>
                                <textarea placeholder={item.ph} onChange={({ currentTarget: { value } }) => this.onchange(value, item.cs.split(" ")[0])} />
                            </div>

                        )}
                        <div className={this.validate() ? "btn active" : "btn disabled"}><label>Submit</label></div>
                    </div>
                </div></Waypoint >
        );
    }
}


export default Contact;