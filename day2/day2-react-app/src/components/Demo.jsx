import React from "react";

export default class Demo extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            fullname: this.props.name,
            email: "",
            phone: "",
            enquiry: ""
        }
        this.handleFullname = this.handleFullname.bind(this)
        this.handleButtonClick = this.handleButtonClick.bind(this)
    }

    handleFullname = (e) => {
        // console.log(e.target.value);
        this.setState({
            fullname: e.target.value
        })

        // this.setState(() => {
        //     this.state.fullname = e.target.value
        // })
        // console.log(this.state.fullname)
    }

    handleButtonClick(e) {
        e.preventDefault();
        console.log(this.state.fullname)
        // alert(this.state.fullname)
    }

    render() {
        return (
            <>
                <div>
                    <form className="form-horizontal" >
                        <div className="form-group">
                            <label htmlFor="fullname" className="form-label">Full Name:</label>
                            <input type="text" className="form-control"
                                id="fullname"
                                name="fullname"
                                value={this.state.fullname}
                                onChange={this.handleFullname}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email" className="form-label">Email:</label>
                            <input type="email" className="form-control"
                                id="email"
                                name="email"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone" className="form-label">Contact #:</label>
                            <input type="tel" className="form-control"
                                id="phone"
                                name="phone"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="enquiry" className="form-label">Your Enquiry:</label>
                            <textarea cols="10" rows="5"
                                id="enquiry" name="enquiry"
                                className="form-control"></textarea>
                        </div>
                        <div>
                            <button className="btn btn-success"
                                onClick={this.handleButtonClick}
                            >Submit</button>
                        </div>
                    </form>
                </div>
            </>
        )

    }
}