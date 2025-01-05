import React, { useState } from "react";
import { AmountInput } from "../../components/amountInput/AmountInput";
import { DateInput } from "../../components/dateInput/DateInput";
import { FileUpload } from "../../components/FileUpload/FileUpload";
import { Header } from "../../components/header/Header";
import { Select } from "../../components/select/Select";
import "./createInvoice.css";

export const CreateInvoice = () => {
  const [selectedImage, setSelectedImage] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");
  const onFileChange = ({ url }) => {
    setSelectedImage(url);
  };
  const vendorOptions = [
    {
      label: "A-1 Exterminators",
      value: "A-1 Exterminators",
    },
  ];
  return (
    <div className="create-invoice-container">
      <Header heading="Create New Inovoice" />
      <div className="create-invoice-main-container">
        <FileUpload
          title="Upload Your Invoice"
          description="To auto-populate fields and save time"
          selectedFile={selectedImage}
          onFileChange={onFileChange}
        />
        <div className="create-inv-detail-container">
          <div className="create-inv-detail-heading-container">
            <img
              src="/images/vendor.svg"
              className="create-inv-detail-img"
              alt="vendor"
            />
            <span className="create-inv-detail-heading">Invoice Details</span>
          </div>
          <div className="inv-detail-sub-heading">Invoice Details</div>
          <div className="inv-detail-options">
            <div className="inv-detail-options-sub-container">
              <Select
                label="Invoice Number"
                required
                options={vendorOptions}
                placeholder="Select Vendor"
              />
              <AmountInput label="Total Amount" required />
              <DateInput label="Invoice Due Date" required />
            </div>
            <div className="inv-detail-options-sub-container">
              <DateInput label="Invoice Date" required />
              <Select
                label="Payment terms"
                required
                placeholder="Select Vendor"
              />
              <DateInput label="GL Post Date" required />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
