import "./../css/model.css";

function Model({ isVisiable, messageError = null }) {
  if (isVisiable) {
    return (
      <div id="model">
        <div className="form-model">
          <h1 style={{ color: messageError ? "red" : "green" }}>
            {messageError != null
              ? messageError
              : "The Form Has Been Submited Successfully "}
          </h1>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}

export default Model;
