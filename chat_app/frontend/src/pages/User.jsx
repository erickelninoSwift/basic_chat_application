import React from "react";
import { useState } from "react";
import user from "../assets/user1.png";
import trash from "../assets/trash.png";
import RegisterModal from "./RegisterModal";

const User = () => {
  const [modal, setModal] = useState(false);

  return (
    <>
      <div className="manageUser-container my-10">
        <div className="title">
          <h2>Manage Users</h2>
        </div>

        <div className="new-message-container new-user">
          <a href="#" onClick={() => setModal(!modal)}>
            +
          </a>
        </div>

        <div className="users-table">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Manage</th>
              </tr>
            </thead>
            <tbody className="">
              <tr className="">
                <td className="name">
                  <img src={user} />
                  <span>User 1</span>
                </td>
                <td className="">email@email.com</td>
                <td className="manage">
                  <img src={trash} alt="Delete" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {modal ? <RegisterModal modal1={modal} modalClose={setModal} /> : ""}
    </>
  );
};

export default User;
