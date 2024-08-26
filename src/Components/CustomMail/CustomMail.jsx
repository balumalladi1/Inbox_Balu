import React from 'react'
import "./CustomMail.css";
import axios from "axios";
import { useState } from "react";
import { BsLightningChargeFill } from "react-icons/bs";
import { FaCaretDown, FaEye, FaImage, FaRegSmile, FaUserMinus } from "react-icons/fa";
import { IoMdCode } from "react-icons/io";
import { IoLinkSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { TbSquareLetterA } from "react-icons/tb";
import "./CustomMail"

function CustomMail({ threadId, onClose }) {
  const [replyData, setReplyData] = useState({
    to: "",
    from: "",
    subject: "",
    body: "",
  });

  const handleSendReply = async () => {
    const token = localStorage.getItem("token");
    try {
      await axios.post(
        `https://hiring.reachinbox.xyz/api/v1/onebox/reply/${threadId}`,
        {
          to: replyData.to,
          from: replyData.from,
          subject: replyData.subject,
          body: replyData.body,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
    } catch {
      console.log("Reply sent successfully");
      onClose();
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReplyData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleTextAreaChange = (e) => {
    const { name, value } = e.target;
    setReplyData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="custom-mail-container">
      <div className="custom-mail-box">
        <div className="custom-mail-header">
          <div className="text-sm">Reply</div>
          <div onClick={onClose}>
            <RxCross2 className="custom-mail-close-button" />
          </div>
        </div>
        <div className="custom-mail-input-container">
          <div className="custom-mail-input-label">To :</div>
          <input
            className="custom-mail-input"
            placeholder="Recipient's Email"
            name="to"
            value={replyData.to}
            onChange={handleInputChange}
          />
        </div>

        <div className="custom-mail-input-container">
          <div className="custom-mail-input-label">From :</div>
          <input
            className="custom-mail-input"
            placeholder="Your Email"
            name="from"
            value={replyData.from}
            onChange={handleInputChange}
          />
        </div>

        <div className="custom-mail-input-container">
          <div className="custom-mail-input-label">Subject :</div>
          <input
            className="custom-mail-input"
            placeholder="Subject"
            name="subject"
            value={replyData.subject}
            onChange={handleInputChange}
          />
        </div>

        <div className="custom-mail-textarea-container">
          <textarea
            className="custom-mail-textarea"
            placeholder="Message Body"
            name="body"
            value={replyData.body}
            onChange={handleTextAreaChange}
          />
        </div>

        <div className="custom-mail-footer">
          <div className="custom-mail-send-button" onClick={handleSendReply}>
            Send <FaCaretDown className="ml-4" />
          </div>
          <div className="custom-mail-footer-icon-group">
            <BsLightningChargeFill className="custom-mail-footer-icon" />
            Variables
          </div>
          <div className="custom-mail-footer-icon-group">
            <FaEye className="custom-mail-footer-icon" />
            Preview Email
          </div>
          <div className="custom-mail-icon-group">
            <TbSquareLetterA />
            <IoLinkSharp />
            <FaImage />
            <FaRegSmile />
            <FaUserMinus />
            <IoMdCode />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomMail;