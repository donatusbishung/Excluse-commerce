import { useState } from "react";
import Account from "../../pages/Account";

function EditDetails() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    address: "",
    current_password: "",
    new_password: "",
    confirm_password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // API call to update the details
    console.log(formData);
  };
  return (
    <Account>
      <div className="p-5 shadow-sm shadow-slate-300">Hello</div>
    </Account>
  );
}

export default EditDetails;
