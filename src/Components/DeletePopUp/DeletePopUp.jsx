import React from "react";
import "./DeletePopUp.css"

const DeletePopUp = ({ onCancel, onDelete }) => {
  return (
    <div className="delete-popup-overlay">
      <div className="delete-popup-container">
        <h2 className="delete-popup-title">Are you sure?</h2>
        <p className="delete-popup-message">
          Are you sure you want to delete this mail?
        </p>
        <div className="delete-popup-actions">
          <button
            onClick={onCancel}
            className="delete-popup-button cancel-button"
          >
            Cancel
          </button>
          <button
            onClick={onDelete}
            className="delete-popup-button delete-button"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeletePopUp;