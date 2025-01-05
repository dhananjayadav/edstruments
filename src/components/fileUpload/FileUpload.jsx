import React, { useRef, useState } from "react";
import "./fileUpload.css";

export const FileUpload = ({
  title = "Upload your file",
  description,
  onFileChange,
  selectedFile,
}) => {
  const fileInputRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  const readFile = async (file) =>
    new Promise((res, rej) => {
      try {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => res(fileReader.result);
        fileReader.onerror = (err) => rej(err);
      } catch (err) {
        rej(err);
      }
    });

  const onChange = async (event) => {
    const file = event.target.files[0];
    try {
      const url = await readFile(file);
      onFileChange &&
        onFileChange({
          url,
          file,
        });
    } catch (err) {
      console.error("Unable to read file:", err);
    }
  };

  const onDrop = async (event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(false);

    if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
      const file = event.dataTransfer.files[0];
      try {
        const url = await readFile(file);
        onFileChange &&
          onFileChange({
            url,
            file,
          });
      } catch (err) {
        console.error("Unable to read file:", err);
      }
    }
  };

  const onDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(true);
  };

  const onDragLeave = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(false);
  };

  return (
    <div
      className={`file-upload-container ${
        isDragging ? "file-upload-container-dragging" : ""
      }`}
      onDrop={onDrop}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
    >
      {selectedFile ? (
        <img
          className="file-upload-container-main-img"
          src={selectedFile}
          alt="img"
        />
      ) : (
        <>
          <div className="file-upload-main-section">
            <div className="file-upload-heading-container">
              <span className="file-upload-title">{title}</span>
              <span className="file-upload-description">{description}</span>
            </div>
            <img
              className="file-upload-img"
              src="https://s3-alpha-sig.figma.com/img/16b9/71b5/374d35591cf107df0cbf15334675279b?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HOm0N8kwEjYLyLRnohYhRbb0qDMDTqQcnmu~ixW~D-jucpU1XcGE80kbQhMEY~yW19mWjo7M3BVMa5qp3d67egt~2pl69GMy8tw3bWdM93GlLhPrN16sXCnmhiX5ixM0mq1Sm4yUhQly~8Q1Lyhrb8fq~7nSHyS1BtvXzCEMVtNjr4yocSfZe8IYxFbWLQOdwgTFp2Pwiwx-3PnuFb08ogmlz8P0RaYGsmnYLJwM9bRhd4roXMKMH9VTM6abI7DxqLML21I8Yz~wS~XejsRKjnYMUrfZzYmn~ZMfXihVc5GWuc2BaGhmj-52F6iHdL6HC-8tqW7HyQ146hLhL62Gbw__"
              alt="Placeholder"
            />
            <div className="file-upload-footer">
              <button
                onClick={() => fileInputRef.current?.click()}
                className="file-upload-button"
              >
                Upload File{" "}
                <img
                  className="file-upload-button-img"
                  src="/images/up-arrow.svg"
                  alt="img"
                />{" "}
              </button>
              <div className="file-upload-instruction-box">
                <a
                  className="file-upload-instruction-box-link"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    fileInputRef.current?.click();
                  }}
                >
                  Click to upload
                </a>
                <span> or Drag and drop</span>
              </div>
            </div>
          </div>
          <input
            onChange={onChange}
            ref={fileInputRef}
            className="file-upload-input"
            type="file"
            accept="image/*"
          />
        </>
      )}
    </div>
  );
};
