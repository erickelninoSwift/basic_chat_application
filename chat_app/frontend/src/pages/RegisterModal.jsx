import React from "react";

const RegisterModal = ({ modal1, modalClose }) => {
  return (
    <div className="modal">
      <a href="#" onClick={() => modalClose(!modal1)} className="modal-close">
        +
      </a>
      <div className="modal-title">
        <h2>Create New User</h2>
      </div>
      <div className="modal-body">
        <form className="add-user-form">
          <input type="text" placeholder="enter name" name="name" />
          <p className="error show">This is error</p>
          <input type="text" placeholder="enter email" name="email" />
          <input type="text" placeholder="enter mobile" name="mobile" />
          <input type="password" placeholder="enter password" name="password" />
          <input type="file" name="avatar" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default RegisterModal;
