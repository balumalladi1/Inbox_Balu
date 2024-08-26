import { CiSearch } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { IoIosSend } from "react-icons/io";
import { TbReload } from "react-icons/tb";
import React from 'react'
import "./AllInbox.css"

const AllInbox = ({ data, loadMail }) => {
  const reloadHandler = async () => {
    const token = localStorage.getItem("token");
    await fetch("https://hiring.reachinbox.xyz/api/v1/onebox/reset", {
      headers: {
        Authorization: token,
      },
    });

    console.log("clicked");
  };

  if (!Array.isArray(data)) {
    console.error("Data is not an array:", data);
    return null;
  }

  return (
    <div className="inbox-container">
      <div className="inbox-header">
        <div>
          <h2 className="inbox-title">
            All Inbox(s)
            <FaAngleDown className="inbox-dropdown-icon" />
          </h2>
          <div className="inbox-count">
            {data.length}/25 Inboxes selected
          </div>
        </div>
        <div className="reload-icon" onClick={reloadHandler}>
          <TbReload />
        </div>
      </div>

      <div className="inbox-search">
        <div className="search-bar">
          <input placeholder=" Search" className="search-input" />
          <CiSearch className="search-icon" />
        </div>
        <div className="inbox-stats">
          <div className="new-replies">{data.length} New Replies</div>
          <div className="sort-dropdown">
            Newest <FaAngleDown />
          </div>
        </div>
      </div>

      <div className="inbox-list">
        {data.map((email) => (
          <Mail
            key={email.id}
            fromEmail={email.fromEmail}
            subject={email.subject}
            threadId={email.threadId}
            loadMail={loadMail}
          />
        ))}
      </div>
    </div>
  );
};

const Mail = ({ fromEmail, subject, threadId, loadMail }) => {
  const trimSubject = (subject, wordCount) => {
    const words = subject.split(" ");
    return words.length > wordCount
      ? words.slice(0, wordCount).join(" ") + " ..."
      : subject;
  };

  const handleMailClick = () => {
    loadMail(threadId);
  };

  return (
    <div className="mail-item" onClick={handleMailClick}>
      <div className="mail-header">
        <div className="mail-from">{fromEmail}</div>
        <div className="mail-date">AUG 9</div>
      </div>
      <div className="mail-subject">
        {trimSubject(subject, 7)}
      </div>
      <div className="mail-tags">
        <div className="tag tag-interested">
          <GoDotFill /> Interested
        </div>
        <div className="tag tag-campaign">
          <IoIosSend /> Campaign Name
        </div>
      </div>
    </div>
  );
};

export default AllInbox;