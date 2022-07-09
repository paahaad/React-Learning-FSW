import React from "react";
import { useState } from "react";

function Form() {
  const initValue = {
    name: "",
    email: "",
    phone: "",
  };
  const [formValue, setformValue] = useState(initValue);
  const handleChange = (e) => {
    // console.log(e.target);
    const { value, name } = e.target;
    setformValue({ ...formValue, [name]: value });
  };
  return (
    <div>
      <h2>Form</h2>
      <form>
        <div>
          <input
            type="text"
            placeholder="Name"
            onChange={handleChange}
            name="name"
            value={formValue.name}
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            onChange={handleChange}
            name="email"
            value={formValue.email}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Phone No."
            onChange={handleChange}
            name="phone"
            value={formValue.phone}
          />
        </div>
      </form>
      <div>
        <h2>Name:{formValue.name}</h2>
        <h2>Email:{formValue.email}</h2>
        <h2>Phone: {formValue.phone}</h2>
      </div>
    </div>
  );
}

export default Form;
