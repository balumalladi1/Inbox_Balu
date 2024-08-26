import React from "react";
import { IoIosSend } from "react-icons/io";
import { IoMailOpen } from "react-icons/io5";
import "./index.css"

const RighrSidebar = () => {
  return (
    <div className="right-section">
      <div className="section-title">Lead Details</div>
      <div className="lead-details">
        <div className="detail-row">
          <div>Name</div>
          <div>Orlando</div>
        </div>
        <div className="detail-row">
          <div>Contact No</div>
          <div>+54-9062827869</div>
        </div>
        <div className="detail-row">
          <div>Email ID</div>
          <div>orlando@gmail.com</div>
        </div>
        <div className="detail-row">
          <div>LinkedIn</div>
          <div> :linkedin.com/in/timvadde/</div>
        </div>
        <div className="detail-row">
          <div>Company Name</div>
          <div>Reachinbox</div>
        </div>
      </div>

      <div className="section-title">Activities</div>

      <div className="activities">
        <div className="activity-title">Campaign Name</div>
        <div className="campaign-description">3 Steps | 5 Days in Sequence</div>

        <div className="activity-step">
          <img src="https://raw.githubusercontent.com/Imayush798/ReachInbox.ai_Assignment/8d911de752167b8117f2b7958e8d38eee2436a5f/src/assets/mail.svg" className="step-icon" alt="Mail icon" />
          <div className="step-details">
            <div>Step 1: Email</div>
            <div className="step-status">
              <IoIosSend className="status-icon" /> Sent 7th, Aug
            </div>
          </div>
        </div>

        <div className="activity-step">
          <img src="https://raw.githubusercontent.com/Imayush798/ReachInbox.ai_Assignment/8d911de752167b8117f2b7958e8d38eee2436a5f/src/assets/mail.svg" className="step-icon" alt="Mail icon" />
          <div className="step-details">
            <div>Step 2: Email</div>
            <div className="step-status">
              <IoMailOpen className="status-icon open" /> Open 9th, Aug
            </div>
          </div>
        </div>

        <div className="activity-step">
          <img src="https://raw.githubusercontent.com/Imayush798/ReachInbox.ai_Assignment/8d911de752167b8117f2b7958e8d38eee2436a5f/src/assets/mail.svg" className="step-icon" alt="Mail icon" />
          <div className="step-details">
            <div>Step 3: Email</div>
            <div className="step-status">
              <IoMailOpen className="status-icon open" /> Open 9th, Aug
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RighrSidebar;