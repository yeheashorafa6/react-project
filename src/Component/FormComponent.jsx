import { useState } from "react";
import "./../css/formComponent.css";
import Model from "./Model";
function FormComponent() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [formInput, setFormInput] = useState({
    name: "",
    phoneNumber: "",
    age: "",
    isEmployee: false,
    salary: "",
  });

  const buttonIsDisable =
    formInput.name == "" || formInput.phoneNumber == "" || formInput.age == "";

  function saveFormInput(event) {
    event.preventDefault();
    setShowModal(true);
    setErrorMessage(null);
    const { age, phoneNumber } = formInput;
    if (age < 15 || age > 70) {
      setErrorMessage("This Age Is Not Allawed");
    } else if (phoneNumber.length < 7 || phoneNumber.length > 12) {
      setErrorMessage("This Number Format Is Not Allawed");
    }
  }

  function handelDivClick() {
    console.log("clicked");
    if (showModal == true) {
      setShowModal(false);
    }
  }

  return (
    <>
      <div className="form-section" onClick={handelDivClick}>
        <div className="head">
          <h1 className="title">Requesting A Loan</h1>
        </div>
        <hr />
        <form method="post">
          <label htmlFor="name" className="form-label">
            Name :{" "}
          </label>
          <br />
          <input
            value={formInput.name}
            onChange={(event) => {
              setFormInput({ ...formInput, name: event.target.value });
            }}
            type="text"
            id="name"
            className="form-controll name"
            placeholder="Enter Your Name"
          />
          <br />
          <label htmlFor="phone" className="form-label">
            Phone Number :{" "}
          </label>
          <br />
          <input
            value={formInput.phoneNumber}
            onChange={(event) => {
              setFormInput({ ...formInput, phoneNumber: event.target.value });
            }}
            type="text"
            id="phone"
            className="form-controll"
            placeholder="Enter Your Phone Number"
          />
          <br />
          <label htmlFor="age" className="form-label">
            Age :{" "}
          </label>
          <br />
          <input
            value={formInput.age}
            onChange={(event) => {
              setFormInput({ ...formInput, age: event.target.value });
            }}
            type="text"
            id="age"
            className="form-controll"
            placeholder="Enter Your Age"
          />
          <br />
          <label htmlFor="isEmployee" className="form-label">
            Are You An Employee :{" "}
          </label>
          <br />
          <input
            checked={formInput.isEmployee}
            onChange={(event) => {
              setFormInput({ ...formInput, isEmployee: event.target.checked });
            }}
            type="checkbox"
            id="isEmployee"
            className="form-controll"
          />
          <br />
          <label htmlFor="salary" className="form-label">
            Salary :{" "}
          </label>
          <br />

          <select
            value={formInput.salary}
            onChange={(event) => {
              setFormInput({ ...formInput, salary: event.target.value });
            }}
            id="salary"
            className="form-controll select"
          >
            <option value="less Than 500$">Less Than 500$</option>
            <option value="between 500$ and 2000$">
              Between 500$ and 2000$
            </option>
            <option value="above 2000$">Above 2000$</option>
          </select>
          <br />
          <button
            type="submit"
            className={buttonIsDisable ? "disable" : "btn"}
            onClick={saveFormInput}
            disabled={buttonIsDisable}
          >
            Save
          </button>
        </form>
      </div>
      <Model messageError={errorMessage} isVisiable={showModal} />
    </>
  );
}

export default FormComponent;
