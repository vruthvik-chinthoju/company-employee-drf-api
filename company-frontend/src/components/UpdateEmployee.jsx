import { useState, useEffect } from "react";
import { updateEmployee } from "../services/api";
import "./Comapny.css";

function UpdateEmployee({ employee, reload, onClose }) {

    const [formData, setFormData] = useState({
        name: "",
        email_id: "",
        phone_no: "",
        position: "",
        about: "",
        address: ""
    });

    useEffect(() => {
        if (employee) {
            setFormData(employee);
        }
    }, [employee]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        await updateEmployee(employee.emp_id, formData);

        reload();
        onClose();
    };

    return (
        <div className="modalOverlay">

            <div className="modalBox">

                <h2>Update Employee</h2>

                <form onSubmit={handleSubmit}>

                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Name"
                    />

                    <input
                        type="email"
                        name="email_id"
                        value={formData.email_id}
                        onChange={handleChange}
                        placeholder="Email"
                    />

                    <input
                        type="text"
                        name="phone_no"
                        value={formData.phone_no}
                        onChange={handleChange}
                        placeholder="Phone"
                    />

                    <input
                        type="text"
                        name="position"
                        value={formData.position}
                        onChange={handleChange}
                        placeholder="Position"
                    />

                    <textarea
                        name="about"
                        value={formData.about}
                        onChange={handleChange}
                        placeholder="About"
                    />

                    <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="Address"
                    />

                    <div className="buttons">
                        <button type="submit" id="up">Update</button>
                        <button type="button" onClick={onClose} id="ca">Cancel</button>
                    </div>


                </form>

            </div>

        </div>
    );
}

export default UpdateEmployee;