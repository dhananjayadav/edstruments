import React from "react";
import "./fileUpload.css";
export const FileUpload = ({
    title = 'Upload your file',
    description
}) => {
  return (
    <div className="file-upload-container">
      <div className="file-upload-main-section">
        <div className="file-upload-heading-container">
          <span className="file-upload-title">{title}</span>
          <span className="file-upload-description">
            {description}
          </span>
        </div>
        <img
          className="file-upload-img"
          src="https://s3-alpha-sig.figma.com/img/16b9/71b5/374d35591cf107df0cbf15334675279b?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HOm0N8kwEjYLyLRnohYhRbb0qDMDTqQcnmu~ixW~D-jucpU1XcGE80kbQhMEY~yW19mWjo7M3BVMa5qp3d67egt~2pl69GMy8tw3bWdM93GlLhPrN16sXCnmhiX5ixM0mq1Sm4yUhQly~8Q1Lyhrb8fq~7nSHyS1BtvXzCEMVtNjr4yocSfZe8IYxFbWLQOdwgTFp2Pwiwx-3PnuFb08ogmlz8P0RaYGsmnYLJwM9bRhd4roXMKMH9VTM6abI7DxqLML21I8Yz~wS~XejsRKjnYMUrfZzYmn~ZMfXihVc5GWuc2BaGhmj-52F6iHdL6HC-8tqW7HyQ146hLhL62Gbw__"
          alt="img"
        />
        <div className="file-upload-footer">
          <button className="file-upload-button">
            Upload File{" "}
            <img
              className="file-upload-button-img"
              src="/images/up-arrow.svg"
              alt="img"
            />{" "}
          </button>
          <div className="file-upload-instruction-box">
            <span className="file-upload-instruction-box-link">
              Click to upload
            </span>
            <span> or Drag and drop</span>
          </div>
        </div>
      </div>
    </div>
  );
};
