import React, { useState } from "react";
import { Col, Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import styles from "../../styles/Home.module.css";

const paymentData = [
  {
    addType: "➕ Add Sale",
    addItems: [
      {
        lbl: "Customer Name",
        placeHolder: "Customer Name",
        type: "text",
        eMsg: "Please input right value!",
        styleClass: "item_name",
      },
      {
        lbl: "Customer Number",
        placeHolder: "Customer Mobile Number",
        type: "tel",
        eMsg: "Please input right value!",
        styleClass: "item_tel",
      },
      {
        lbl: "Customer Address",
        placeHolder: "Type Customer Address",
        type: "text",
        eMsg: "Please input right value!",
        styleClass: "item_address",
      },
      {
        lbl: "Name of Medicines",
        placeHolder: "Type Name of Medicines",
        type: "text",
        eMsg: "Please input right value!",
        styleClass: "item_m_name",
      },
      {
        lbl: "Sale Price",
        placeHolder: "Type Price",
        type: "number",
        eMsg: "Please input right value!",
        styleClass: "item_s_price",
      },
      {
        lbl: "Discount",
        placeHolder: "Type Discount Amount",
        type: "number",
        eMsg: "Please input right value!",
        styleClass: "item_discount",
      },
      {
        lbl: "Quantity",
        placeHolder: "Quantity of medicine",
        type: "number",
        eMsg: "Please input right value!",
        styleClass: "item_qun",
      },
      {
        lbl: "Cash",
        name: "payType",
        type: "radio",
        eMsg: "Please input right value!",
        styleClass: "item_cash",
        isCash: [
          {
            lbl: "Cash Amount",
            placeHolder: "Enter Cash Amount",
            type: "number",
            styleClass: "item_cash_amount",
          },
        ],
      },
      {
        lbl: "Due",
        name: "payType",
        type: "radio",
        eMsg: "Please input right value!",
        styleClass: "item_due",
        isCash: [
          {
            lbl: "Due Amount",
            placeHolder: "Enter Due Amount",
            type: "number",
            styleClass: "item_due_amount",
          },
        ],
      },
      {
        lbl: "Cash and Due",
        name: "payType",
        type: "radio",
        eMsg: "Please input right value!",
        styleClass: "item_cash_due",
        isCash: [
          {
            lbl: "Cash Amount",
            placeHolder: "Enter Cash Amount",
            type: "number",
            styleClass: "item_cash_cash_amount",
          },
          {
            lbl: "Due Amount",
            placeHolder: "Enter Due Amount",
            type: "number",
            styleClass: "item_due_due_amount",
          },
        ],
      },
    ],
  },
  {
    addType: "➕ Add Stock",
    addItems: [
      {
        lbl: "Sr / Company Name",
        placeHolder: "Sr / Company Name",
        type: "text",
        eMsg: "Please input right value!",
        styleClass: "item_name",
      },
      {
        lbl: "Sr / Company Number",
        placeHolder: "Sr / Company Name Mobile Number",
        type: "tel",
        eMsg: "Please input right value!",
        styleClass: "item_tel",
      },
      {
        lbl: "Sr / Company Address",
        placeHolder: "Type Customer Address",
        type: "text",
        eMsg: "Please input right value!",
        styleClass: "item_address",
      },
      {
        lbl: "Name of Medicines",
        placeHolder: "Type Name of Medicines",
        type: "text",
        eMsg: "Please input right value!",
        styleClass: "item_m_name",
      },
      {
        lbl: "Medicines Price",
        placeHolder: "Medicines Price",
        type: "number",
        eMsg: "Please input right value!",
        styleClass: "item_s_price",
      },
      {
        lbl: "Quantity",
        placeHolder: "Quantity",
        type: "number",
        eMsg: "Please input right value!",
        styleClass: "item_discount",
      },
      {
        lbl: "Purchase Date",
        placeHolder: "purchase date",
        type: "date",
        eMsg: "Please input right value!",
        styleClass: "item_qun",
      },
      {
        lbl: "Cash",
        name: "payType",
        type: "radio",
        eMsg: "Please input right value!",
        styleClass: "item_cash",
        isCash: [
          {
            lbl: "Cash Amount",
            placeHolder: "Enter Cash Amount",
            type: "number",
            styleClass: "item_cash_amount",
          },
        ],
      },
      {
        lbl: "Due",
        name: "payType",
        type: "radio",
        eMsg: "Please input right value!",
        styleClass: "item_due",
        isCash: [
          {
            lbl: "Due Amount",
            placeHolder: "Enter Due Amount",
            type: "number",
            styleClass: "item_due_amount",
          },
        ],
      },
      {
        lbl: "Cash and Due",
        name: "payType",
        type: "radio",
        eMsg: "Please input right value!",
        styleClass: "item_cash_due",
        isCash: [
          {
            lbl: "Cash Amount",
            placeHolder: "Enter Cash Amount",
            type: "number",
            styleClass: "item_cash_cash_amount",
          },
          {
            lbl: "Due Amount",
            placeHolder: "Enter Due Amount",
            type: "number",
            styleClass: "item_due_due_amount",
          },
        ],
      },
    ],
  },
];

const AddButtons = () => {
  const [show, setShow] = useState(false);
  const [modalData, setModalData] = useState([]);
  const [payType, setPayType] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (event, value) => {
    setIsChecked(event.target.checked);
    setPayType(value.isCash);
  };

  const handleClose = () => setShow(false);

  const handleShow = (dt) => {
    let modalData = [dt];
    setModalData((item) => [1, ...modalData]);

    return setShow(true);
  };

  return (
    <>
      <Col
        md={6}
        sm={12}
        className="d-flex justify-content-around bg_dark w-100"
      >
        {paymentData?.map((dt) => {
          //
          return (
            <>
              <button
                onClick={() => handleShow(dt)}
                className="border-0 px-3 py-2 bg-primary color_light fw-bold rounded m-2"
              >
                {dt.addType}
              </button>
            </>
          );
        })}

        {/* // modal code  */}
        {modalData?.map((dt) => {
          return (
            <>
              <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
              >
                <Modal.Header closeButton>
                  <Modal.Title>{dt?.addType}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <form>
                    {dt?.addItems?.map((item, index) => {
                      return (
                        <div key={index} className="form_control">
                          <div className={item.styleClass}>
                            <label htmlFor={item.lbl}>{item.lbl}</label>
                            <input
                              placeholder={item.placeHolder}
                              id={item.lbl}
                              type={item.type}
                              name={item.name}
                              onChange={
                                item.type === "radio"
                                  ? () => handleChange(event, item)
                                  : ""
                              }
                            />
                          </div>
                        </div>
                      );
                    })}
                    <div className="item_pay">
                      {payType?.map((pay) => {
                        return (
                          <>
                            <div className={pay.styleClass}>
                              {isChecked && (
                                <>
                                  <label htmlFor={pay.lbl}>{pay.lbl}</label>
                                  <input
                                    type={pay.type}
                                    placeholder={pay.placeHolder}
                                  />
                                </>
                              )}
                            </div>
                          </>
                        );
                      })}
                    </div>
                  </form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" type="submit">
                    SUB
                  </Button>
                </Modal.Footer>
              </Modal>
            </>
          );
        })}
      </Col>
    </>
  );
};

export default AddButtons;
