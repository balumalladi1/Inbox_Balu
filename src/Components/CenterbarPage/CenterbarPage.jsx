import React, { useEffect, useState } from "react";
import { MdOutlineExpand } from "react-icons/md";
import { FaReply } from "react-icons/fa";
import { SlArrowDown } from "react-icons/sl";
import { GoDotFill } from "react-icons/go";
import CustomMail from "../CustomMail/CustomMail";
import DeletePopUp from "../DeletePopUp/DeletePopUp";
import "./CenterbarPage.css"

const CenterPage = ({ selectedThread }) => {
  const [showPopUp, setShowPopUp] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [selectedMail, setSelectedMail] = useState([]);

  const togglePopUp = () => setShowPopUp(!showPopUp);

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem("token");
      await fetch(
        `https://hiring.reachinbox.xyz/api/v1/onebox/messages/${selectedThread}`,
        {
          method: "DELETE",
          headers: {
            Authorization: token,
          },
        }
      );
      setShowDelete(false);
    } catch (error) {
      console.error("Error deleting mail:", error);
    }
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "d" || event.key === "D") {
        setShowDelete(!showDelete);
        console.log("Pressed D");
      }
      if (event.key === "r" || event.key === "R") {
        setShowPopUp(!showPopUp);
        console.log("Pressed R");
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [showDelete, showPopUp]);

  useEffect(() => {
    const fetchMail = async () => {
      if (selectedThread) {
        try {
          const token = localStorage.getItem("token");
          const response = await fetch(
            `https://hiring.reachinbox.xyz/api/v1/onebox/messages/${selectedThread}`,
            {
              headers: {
                Authorization: token,
              },
            }
          );
          const data = await response.json();
          setSelectedMail(data.data || []);
        } catch (error) {
          console.error("Error fetching mail:", error);
        }
      } else {
        setSelectedMail([
          {
            id: 0,
            fromName: "",
            fromEmail: "jeanne@icloud.com",
            toName: "",
            toEmail: "lennon.j@mail.com",
            subject: "New Product Launch",
            body: "I would like to introduce you to SaaSgrow, a productized design service specifically tailored for saas startups. Our aim is to help you enhance the user experience and boost the visual appeal of your software products.",
            sentAt: "2022-01-01T00:00:00.000Z",
          },
        ]);
      }
    };
    fetchMail();
  }, [selectedThread, showDelete]);

  return (
    <div className="center-page">
      <div className="header">
        <div>
          <div className="header-title">Orlando</div>
          <div className="header-subtitle">orladom@gmail.com</div>
        </div>
        <div className="header-actions">
          <div className="header-action">
            <GoDotFill className="yellow-dot" /> Meeting Completed <SlArrowDown />
          </div>
          <div className="header-action">Move <SlArrowDown /></div>
          <div className="header-action">...</div>
        </div>
      </div>

      <div className="timeline">
        <div className="timeline-line"></div>
        <div className="timeline-label">Today</div>
      </div>

      <div className="mail-list">
        {selectedMail.map((mail) => (
          <Mail key={mail.id} {...mail} />
        ))}
      </div>

      <div >
        <div className="timeline-line"></div>
        <div className="timeline-expand">
          <MdOutlineExpand className="expand-icon" /> View all <span className="highlight">4</span> replies
        </div>
      </div>

      {showPopUp && (
        <CustomMail threadId={selectedThread} onClose={() => setShowPopUp(false)} />
      )}

      <div className="reply-button" onClick={togglePopUp}>
        <FaReply className="reply-icon" /> Reply
      </div>

      {showDelete && (
        <DeletePopUp onCancel={() => setShowDelete(false)} onDelete={handleDelete} />
      )}
    </div>
  );
};

const Mail = ({ fromEmail, toEmail, subject, body }) => (
  <div className="mail-item">
    <div className="mail-content">
      <div className="mail-header">
        <div className="mail-info">
          <div className="mail-subject">{subject}</div>
          <div className="mail-from">from: {fromEmail}</div>
          <div className="mail-to">to: {toEmail}</div>
        </div>
        <div className="mail-date">05 August 2024 : 9:16AM</div>
      </div>
      <div className="mail-body" dangerouslySetInnerHTML={{ __html: body }} />
    </div>
  </div>
);

export default CenterPage;