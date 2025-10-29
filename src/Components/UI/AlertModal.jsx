import React from "react";
import "../CSS/AlertModal.css";

export default function AlertModal({
  isOpen,
  title,
  message,
  confirmText,
  cancelText,
  onConfirm,
  onClose,
  showCloseIcon = true, // optional prop
}) {
  if (!isOpen) return null;

  return (
    <div className="alert-overlay">
      <div className="alert-modal">
        {/*  Conditionally show the close icon */}
        {showCloseIcon && (
          <button className="close-btn" onClick={onClose}>
            ×
          </button>
        )}

        <h2>{title}</h2>
        <p>{message}</p>

        <div className="alert-actions">
          {cancelText && (
            <button className="cancel-btn" onClick={onClose}>
              {cancelText}
            </button>
          )}
          {confirmText && (
            <button className="confirm-btn" onClick={onConfirm}>
              {confirmText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
