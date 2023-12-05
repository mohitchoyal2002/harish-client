import React, { useState } from "react";
import axios from "axios";

const DataForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("Male");

  const submit = (e) => {
    e.preventDefault();
    console.log(name + email + phone + gender);
    const instance = axios.create({
      baseURL:
        "https://sheet.best/api/sheets/dad045db-d827-41be-a517-d7439ea93047",
      headers: {
        "Content-Type": "application/json",
        "X-Api-Key":
          "gkME$YOXlabQht1fsC#BvyhiT3B4X1JwqQSRsGi77li1xFFkxv#HXVn@fS!Xy%5O", // Set your API key here
      },
    });

    instance
      .post(
        "https://sheet.best/api/sheets/d3657925-5349-4243-b40a-65242d460be3",
        { Name: name, Email: email, Phone: phone, Gender: gender }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error)=> console.log(error));
  };

  return (
    <div className="flex lg:w-full bg-white justify-center items-center rounded-md m-8 pb-8 pt-8">
      <form
        onSubmit={submit}
        className="flex lg:px-10 flex-col gap-4 justify-center items-center w-full px-6"
      >
        <div className="flex flex-col w-full">
          <span className="font-semibold pl-2 lg:text-sm">Full Name</span>
          <input
            value={name}
            className="outline-none border rounded-lg text-base lg:text-lg px-2 py-1 border-gray-400"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="flex flex-col w-full">
          <span className="font-semibold pl-2 lg:text-sm">Email</span>
          <input
            value={email}
            className="outline-none border rounded-lg text-base lg:text-lg px-2 py-1 border-gray-400"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="flex flex-col w-full">
          <span className="font-semibold pl-2 lg:text-sm">Phone No.</span>
          <input
            value={phone}
            className="outline-none border rounded-lg text-base lg:text-lg px-2 py-1 border-gray-400"
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
        </div>
        <div className="flex flex-col w-full">
          <span className="font-semibold pl-2 lg:text-sm">Gender</span>
          <select
            name="gender"
            value={gender}
            onChange={(e) => {
              setGender(e.target.value);
            }}
            className="py-1 px-2 rounded-lg border-gray-400 border outline-none text-base lg:text-lg"
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <button className="py-2 px-3 text-white font-bold bg-btn_red rounded-lg mt-2">
          Apply for Free
        </button>
      </form>
    </div>
  );
};

export default DataForm;
