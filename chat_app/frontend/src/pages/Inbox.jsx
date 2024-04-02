import React from "react";
import user from "../assets/user1.png";
import user2 from "../assets/user2.png";
import attachement from "../assets/attachment.png";
import trash from "../assets/trash.png";
const Inbox = () => {
  return (
    <>
      <div className="chat-container my-10">
        <div className="search-container">
          <input type="text" placeholder="Search" />
        </div>
        <div className="conversation-list">
          <div className="conversation active">
            <img src={user} alt="Sumit" />
            <div className="title-text">Kazi Ariyan</div>
            <di className="created-date"> Nov 16 </di>
            <div className="conversation-message">This is a message</div>
          </div>
          <div className="conversation">
            <img src={user2} alt="Sumit" />
            <div className="title-text">Kazi Ariyan</div>
            <div className="created-date"> Nov 16 </div>
            <div className="conversation-message">This is a message</div>
          </div>
        </div>
        <div className="new-message-container">
          <a href="#">+</a>
        </div>
        <div className="chat-title">
          <span> Ariyan</span>
          <img src={trash} alt="Delete Conversation" />
        </div>
        <div className="chat-message-list">
          <div className="message-row other-message">
            <div className="message-content">
              <img src={user} alt="Sumit" />
              <div className="message-text">Ok then</div>
              <div className="message-time">Nov 16</div>
            </div>
          </div>
          <div className="message-row you-message">
            <div className="message-content">
              <div className="message-text">Lorem ipsum dolor sit amet</div>
              <div className="message-time">Nov 16</div>
            </div>
          </div>
        </div>
        <div className="chat-form">
          <img src={attachement} alt={""} />
          <input type="text" placeholder="Type a message" />
        </div>
      </div>

      <div className="modal-wrapper">
        <div className="modal">
          <a href="#" className="modal-close">
            +
          </a>
          <div className="modal-title">
            <h2>Create New Conversation</h2>
          </div>
          <div className="modal-body">
            <form>
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Username" />
              <input type="button" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Inbox;
