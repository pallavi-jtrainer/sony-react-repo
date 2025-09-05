import { useState } from "react";

export default function Demo1() {
    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        phone: '',
        enquiry: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleChange(e)
        console.log(formData)
    }

    return (
        <>
            <div>
                <form className="form-horizontal" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="fullname" className="form-label">Full Name:</label>
                        <input type="text" className="form-control"
                            id="fullname"
                            name="fullname"
                            value={formData.fullname}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" className="form-label">Email:</label>
                        <input type="email" className="form-control"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone" className="form-label">Contact #:</label>
                        <input type="tel" className="form-control"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="enquiry" className="form-label">Your Enquiry:</label>
                        <textarea cols="10" rows="5"
                            id="enquiry" name="enquiry"
                            className="form-control"
                            value={formData.enquiry}
                            onChange={handleChange}></textarea>
                    </div>
                    <div>
                        <button className="btn btn-success" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}