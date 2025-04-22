import React, { useState } from "react";

function AddLiquidity(props) {
    const [toggleModal, setToggleModal] = useState(false);
    const [toggleModal2, setToggleModal2] = useState(false);
    const [fromToken, setFromToken] = useState("");
    const [toToken, settoToken] = useState("");
    const onModalToggled = () => {
        if (toggleModal) {
        setToggleModal(false);
        } else {
        setToggleModal(true);
        }
    };
    const onModalToggled2 = () => {
        if (toggleModal2) {
        setToggleModal2(false);
        } else {
        setToggleModal2(true);
        }
    };

    return (
        <div>
        <section className="forms-section">
            <div className="container">
            <div className="row justify-content-center align-items-center">
                <div className="checkout-form-centre">
                <div className="checkout-login-step">
                    <div className="product-body">
                    <a href="/#">
                        <h5>Add Liquidity</h5>
                    </a>
                    <a
                        href="/#"
                        className="label"
                        style={{ marginLeft: "10px" }}
                        data-toggle="modal"
                        data-target="#myModal3"
                    >
                        <i className="fa fa-clock-o"></i>
                    </a>
                    <div className="modal" id="myModal3">
                        <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                            <h4 className="modal-title">Recent Transactions</h4>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                            >
                                &times;
                            </button>
                            </div>

                            <div className="modal-footer">
                            {props.isConnected ? (
                                <div>
                                <a
                                    href="/#"
                                    className="btn btn-danger"
                                    data-dismiss="modal"
                                    data-target="#myModal"
                                >
                                    Wallet Connected
                                </a>
                                </div>
                            ) : (
                                <a
                                className="btn btn-danger"
                                data-dismiss="modal"
                                data-target="#myModal"
                                onClick={() => props.connect()}
                                >
                                Connect Wallet
                                </a>
                            )}
                            </div>
                        </div>
                        </div>
                    </div>
                    <a
                        href="/#"
                        className="label"
                        data-target="#myModal2"
                        data-toggle="modal"
                        data-target="#myModal2"
                    >
                        <i className="fa fa-cog"></i>
                    </a>
                    <div className="modal" id="myModal2">
                        <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                            <h4 className="modal-title">Settings</h4>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                            >
                                &times;
                            </button>
                            </div>

                            <div className="modal-body-1">
                            <p>GLOBAL</p>
                            <h4>
                                Default Transaction Speed (GWEI){" "}
                                <i className="fa fa-question-circle"></i>
                            </h4>
                            <ul>
                                <li>
                                <a href="/#">standard (5)</a>
                                </li>
                                <li>
                                <a href="/#">fast (6)</a>
                                </li>
                                <li>
                                <a href="/#">Instant (6)</a>
                                </li>
                            </ul>
                            <div className="swaps-liquidation">
                                <p>SWAPS & LIQUIDITY</p>
                                <h4>
                                Slippage Tolerance{" "}
                                <i className="fa fa-question-circle"></i>
                                </h4>
                                <ul style={{ marginBottom: "15px" }}>
                                <li>
                                    <a href="/#">0.1%</a>
                                </li>
                                <li>
                                    <a href="/#">0.5%</a>
                                </li>
                                <li>
                                    <a href="/#">1.0%</a>
                                </li>
                                <li>
                                    <input
                                    type="text"
                                    className="form-control"
                                    placeholder="1.00 %"
                                    />
                                </li>
                                </ul>
                                <div className="details">
                                <div className="label">
                                    Tx deadline (mins){" "}
                                    <i className="fa fa-question-circle"></i>{" "}
                                </div>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="2"
                                />{" "}
                                </div>
                                <div className="details">
                                <div className="label">
                                    Expert Mode{" "}
                                    <i className="fa fa-question-circle"></i>{" "}
                                </div>
                                <button
                                    type="button"
                                    className="btn btn-toggle"
                                    data-toggle="button"
                                    aria-pressed="false"
                                    autoComplete="off"
                                    data-toggle="modal"
                                    data-target="#myModal8"
                                >
                                    <div className="handle"></div>
                                </button>
                                <div className="modal" id="myModal8">
                                    <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                        <div className="back">
                                            <a href="/#">
                                            <i className="fa fa-arrow-left"></i>
                                            </a>
                                        </div>

                                        <h4 className="modal-title">
                                            Expert Mode
                                        </h4>
                                        <button
                                            type="button"
                                            className="close"
                                            data-dismiss="modal"
                                        >
                                            &times;
                                        </button>
                                        </div>
                                        <div className="modal-body">
                                        <div className="expert-box">
                                            <div className="icon">
                                            <svg
                                                viewBox="0 0 24 24"
                                                color="warning"
                                                width="24px"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                d="M4.47 20.9999H19.53C21.07 20.9999 22.03 19.3299 21.26 17.9999L13.73 4.98993C12.96 3.65993 11.04 3.65993 10.27 4.98993L2.74 17.9999C1.97 19.3299 2.93 20.9999 4.47 20.9999ZM12 13.9999C11.45 13.9999 11 13.5499 11 12.9999V10.9999C11 10.4499 11.45 9.99993 12 9.99993C12.55 9.99993 13 10.4499 13 10.9999V12.9999C13 13.5499 12.55 13.9999 12 13.9999ZM13 17.9999H11V15.9999H13V17.9999Z"
                                                fill="rgb(255, 178, 55)"
                                                ></path>
                                            </svg>
                                            </div>
                                            <div className="text">
                                            Expert mode turns off the 'Confirm'
                                            transaction prompt, and allows high
                                            slippage trades that often result in
                                            bad rates and lost funds.
                                            </div>
                                        </div>
                                        <h4>
                                            Only use this mode if you know what
                                            you’re doing.
                                        </h4>
                                        <div className="form-check">
                                            <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="flexCheckDefault"
                                            />
                                            <label
                                            className="form-check-label"
                                            htmlFor="flexCheckDefault"
                                            >
                                            Don't show this again
                                            </label>
                                        </div>
                                        </div>
                                        <div className="modal-footer">
                                        <a
                                            className="btn btn-danger"
                                            data-dismiss="modal"
                                            data-target="#myModal"
                                        >
                                            Turn On Expert Mode
                                        </a>
                                        <a
                                            className="btn btn-danger-1"
                                            data-dismiss="modal"
                                            data-target="#myModal"
                                        >
                                            Cancel
                                        </a>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div className="details">
                                <div className="label">
                                    Disable Multihops{" "}
                                    <i className="fa fa-question-circle"></i>{" "}
                                </div>
                                <button
                                    type="button"
                                    className="btn btn-toggle"
                                    data-toggle="button"
                                    aria-pressed="false"
                                    autoComplete="off"
                                >
                                    <div className="handle"></div>
                                </button>
                                </div>
                                <div
                                className="details"
                                style={{ paddingBottom: "30px" }}
                                >
                                <div className="label">
                                    Flippy sounds{" "}
                                    <i className="fa fa-question-circle"></i>{" "}
                                </div>
                                <button
                                    type="button"
                                    className="btn btn-toggle"
                                    data-toggle="button"
                                    aria-pressed="false"
                                    autoComplete="off"
                                >
                                    <div className="handle"></div>
                                </button>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <a href="/#">
                        <h6>Add liquidity to receive LP tokens</h6>
                    </a>
                    </div>

                    <div className="add-liquidity">
                    <h5>Input</h5>
                    <div className="form-row">
                        <div className="wizard-form-input col-md-6 col-sm-12">
                        <input
                            type="number"
                            className="form-control"
                            id="firstname"
                            name="firstname"
                            placeholder="0.0"
                        />
                        </div>
                        <div className="wizard-form-input col-md-6 col-sm-12">
                        <div
                            className="form-control select2-input"
                            onClick={onModalToggled}
                        >
                            {fromToken != "" ? (
                            fromToken
                            ) : (
                            <h6> - Select a currency - </h6>
                            )}
                        </div>

                        <div
                            className={`modal ${toggleModal ? "show" : ""}`}
                            id="myModal4"
                            style={{
                            display: `${toggleModal ? "block" : "none"}`,
                            }}
                        >
                            <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                <h4 className="modal-title">Select a Token</h4>
                                <button
                                    type="button"
                                    onClick={onModalToggled}
                                    className="close"
                                    data-dismiss="modal"
                                >
                                    &times;
                                </button>
                                </div>

                                <div className="form-group">
                                <div className="select2">
                                    <div className="select2-list bg-light w-100 rounded-bottom">
                                    <div className="container mt-3">
                                        <input
                                        className="select2-search form-control-1 form-control-sm"
                                        type="text"
                                        placeholder="Search  name or paste address"
                                        />
                                        <div
                                        className="select2-item px-3 py-2 border-bottom text-primary text-capitalize"
                                        data-value="1"
                                        onClick={(e) => {
                                            setFromToken(
                                            <div className="select-section">
                                                <div
                                                className="img-section"
                                                style={{ display: "flex" }}
                                                >
                                                <svg
                                                    viewBox="0 0 16 16"
                                                    width="24px"
                                                    color="text"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="sc-bdnxRM kDWlca"
                                                    style={{ marginRight: "8px" }}
                                                >
                                                    <circle
                                                    cx="8"
                                                    cy="8"
                                                    r="8"
                                                    fill="#F0B90B"
                                                    ></circle>
                                                    <path
                                                    d="M5.01656 8.00006L3.79256 9.23256L2.56006 8.00006L3.79256 6.76756L5.01656 8.00006ZM8.00006 5.01656L10.1081 7.12456L11.3406 5.89206L9.23256 3.79256L8.00006 2.56006L6.76756 3.79256L4.66806 5.89206L5.90056 7.12456L8.00006 5.01656ZM12.2076 6.76756L10.9836 8.00006L12.2161 9.23256L13.4401 8.00006L12.2076 6.76756ZM8.00006 10.9836L5.89206 8.87556L4.66806 10.1081L6.77606 12.2161L8.00006 13.4401L9.23256 12.2076L11.3406 10.0996L10.1081 8.87556L8.00006 10.9836ZM8.00006 9.23256L9.23256 8.00006L8.00006 6.76756L6.76756 8.00006L8.00006 9.23256Z"
                                                    fill="#FFFDFA"
                                                    ></path>
                                                </svg>
                                                <h5>BNB</h5>
                                                </div>
                                            </div>
                                            );
                                            onModalToggled();
                                        }}
                                        >
                                        <div className="select-section">
                                            <div
                                            className="img-section"
                                            style={{ display: "flex" }}
                                            >
                                            <svg
                                                viewBox="0 0 16 16"
                                                width="24px"
                                                color="text"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="sc-bdnxRM kDWlca"
                                                style={{ marginRight: "8px" }}
                                            >
                                                <circle
                                                cx="8"
                                                cy="8"
                                                r="8"
                                                fill="#F0B90B"
                                                ></circle>
                                                <path
                                                d="M5.01656 8.00006L3.79256 9.23256L2.56006 8.00006L3.79256 6.76756L5.01656 8.00006ZM8.00006 5.01656L10.1081 7.12456L11.3406 5.89206L9.23256 3.79256L8.00006 2.56006L6.76756 3.79256L4.66806 5.89206L5.90056 7.12456L8.00006 5.01656ZM12.2076 6.76756L10.9836 8.00006L12.2161 9.23256L13.4401 8.00006L12.2076 6.76756ZM8.00006 10.9836L5.89206 8.87556L4.66806 10.1081L6.77606 12.2161L8.00006 13.4401L9.23256 12.2076L11.3406 10.0996L10.1081 8.87556L8.00006 10.9836ZM8.00006 9.23256L9.23256 8.00006L8.00006 6.76756L6.76756 8.00006L8.00006 9.23256Z"
                                                fill="#FFFDFA"
                                                ></path>
                                            </svg>
                                            <h5>BNB</h5>
                                            </div>
                                        </div>
                                        </div>
                                        <div
                                        className="select2-item px-3 py-2 border-bottom text-primary text-capitalize"
                                        data-value="1"
                                        onClick={(e) => {
                                            setFromToken(
                                            <div className="select-section">
                                                <div
                                                className="img-section"
                                                style={{ display: "flex" }}
                                                >
                                                <svg
                                                    viewBox="0 0 16 16"
                                                    width="24px"
                                                    color="text"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="sc-bdnxRM kDWlca"
                                                    style={{ marginRight: "8px" }}
                                                >
                                                    <circle
                                                    cx="8"
                                                    cy="8"
                                                    r="8"
                                                    fill="#F0B90B"
                                                    ></circle>
                                                    <path
                                                    d="M5.01656 8.00006L3.79256 9.23256L2.56006 8.00006L3.79256 6.76756L5.01656 8.00006ZM8.00006 5.01656L10.1081 7.12456L11.3406 5.89206L9.23256 3.79256L8.00006 2.56006L6.76756 3.79256L4.66806 5.89206L5.90056 7.12456L8.00006 5.01656ZM12.2076 6.76756L10.9836 8.00006L12.2161 9.23256L13.4401 8.00006L12.2076 6.76756ZM8.00006 10.9836L5.89206 8.87556L4.66806 10.1081L6.77606 12.2161L8.00006 13.4401L9.23256 12.2076L11.3406 10.0996L10.1081 8.87556L8.00006 10.9836ZM8.00006 9.23256L9.23256 8.00006L8.00006 6.76756L6.76756 8.00006L8.00006 9.23256Z"
                                                    fill="#FFFDFA"
                                                    ></path>
                                                </svg>
                                                <h5>BNB</h5>
                                                </div>
                                            </div>
                                            );
                                            onModalToggled();
                                        }}
                                        >
                                        <div className="select-section">
                                            <div
                                            className="img-section"
                                            style={{ display: "flex" }}
                                            >
                                            <svg
                                                viewBox="0 0 16 16"
                                                width="24px"
                                                color="text"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="sc-bdnxRM kDWlca"
                                                style={{ marginRight: "8px" }}
                                            >
                                                <circle
                                                cx="8"
                                                cy="8"
                                                r="8"
                                                fill="#F0B90B"
                                                ></circle>
                                                <path
                                                d="M5.01656 8.00006L3.79256 9.23256L2.56006 8.00006L3.79256 6.76756L5.01656 8.00006ZM8.00006 5.01656L10.1081 7.12456L11.3406 5.89206L9.23256 3.79256L8.00006 2.56006L6.76756 3.79256L4.66806 5.89206L5.90056 7.12456L8.00006 5.01656ZM12.2076 6.76756L10.9836 8.00006L12.2161 9.23256L13.4401 8.00006L12.2076 6.76756ZM8.00006 10.9836L5.89206 8.87556L4.66806 10.1081L6.77606 12.2161L8.00006 13.4401L9.23256 12.2076L11.3406 10.0996L10.1081 8.87556L8.00006 10.9836ZM8.00006 9.23256L9.23256 8.00006L8.00006 6.76756L6.76756 8.00006L8.00006 9.23256Z"
                                                fill="#FFFDFA"
                                                ></path>
                                            </svg>
                                            <h5>BNB</h5>
                                            </div>
                                        </div>
                                        </div>
                                        <div
                                        className="select2-item px-3 py-2 border-bottom text-primary text-capitalize"
                                        data-value="1"
                                        onClick={(e) => {
                                            setFromToken(
                                            <div className="select-section">
                                                <div
                                                className="img-section"
                                                style={{ display: "flex" }}
                                                >
                                                <svg
                                                    viewBox="0 0 16 16"
                                                    width="24px"
                                                    color="text"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="sc-bdnxRM kDWlca"
                                                    style={{ marginRight: "8px" }}
                                                >
                                                    <circle
                                                    cx="8"
                                                    cy="8"
                                                    r="8"
                                                    fill="#F0B90B"
                                                    ></circle>
                                                    <path
                                                    d="M5.01656 8.00006L3.79256 9.23256L2.56006 8.00006L3.79256 6.76756L5.01656 8.00006ZM8.00006 5.01656L10.1081 7.12456L11.3406 5.89206L9.23256 3.79256L8.00006 2.56006L6.76756 3.79256L4.66806 5.89206L5.90056 7.12456L8.00006 5.01656ZM12.2076 6.76756L10.9836 8.00006L12.2161 9.23256L13.4401 8.00006L12.2076 6.76756ZM8.00006 10.9836L5.89206 8.87556L4.66806 10.1081L6.77606 12.2161L8.00006 13.4401L9.23256 12.2076L11.3406 10.0996L10.1081 8.87556L8.00006 10.9836ZM8.00006 9.23256L9.23256 8.00006L8.00006 6.76756L6.76756 8.00006L8.00006 9.23256Z"
                                                    fill="#FFFDFA"
                                                    ></path>
                                                </svg>
                                                <h5>BNB</h5>
                                                </div>
                                            </div>
                                            );
                                            onModalToggled();
                                        }}
                                        >
                                        <div className="select-section">
                                            <div
                                            className="img-section"
                                            style={{ display: "flex" }}
                                            >
                                            <svg
                                                viewBox="0 0 16 16"
                                                width="24px"
                                                color="text"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="sc-bdnxRM kDWlca"
                                                style={{ marginRight: "8px" }}
                                            >
                                                <circle
                                                cx="8"
                                                cy="8"
                                                r="8"
                                                fill="#F0B90B"
                                                ></circle>
                                                <path
                                                d="M5.01656 8.00006L3.79256 9.23256L2.56006 8.00006L3.79256 6.76756L5.01656 8.00006ZM8.00006 5.01656L10.1081 7.12456L11.3406 5.89206L9.23256 3.79256L8.00006 2.56006L6.76756 3.79256L4.66806 5.89206L5.90056 7.12456L8.00006 5.01656ZM12.2076 6.76756L10.9836 8.00006L12.2161 9.23256L13.4401 8.00006L12.2076 6.76756ZM8.00006 10.9836L5.89206 8.87556L4.66806 10.1081L6.77606 12.2161L8.00006 13.4401L9.23256 12.2076L11.3406 10.0996L10.1081 8.87556L8.00006 10.9836ZM8.00006 9.23256L9.23256 8.00006L8.00006 6.76756L6.76756 8.00006L8.00006 9.23256Z"
                                                fill="#FFFDFA"
                                                ></path>
                                            </svg>
                                            <h5>BNB</h5>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="plus">+</div>
                    <div className="add-liquidity">
                    <h5>Input</h5>
                    <div className="form-row">
                        <div className="wizard-form-input col-md-6 col-sm-12">
                        <input
                            type="number"
                            className="form-control"
                            id="firstname"
                            name="firstname"
                            placeholder="0.0"
                        />
                        </div>
                        <div className="wizard-form-input col-md-6 col-sm-12">
                        <div
                            className="form-control select2-input"
                            onClick={onModalToggled2}
                        >
                            {toToken != "" ? (
                            toToken
                            ) : (
                            <h6> - Select a currency - </h6>
                            )}
                        </div>

                        <div
                            className={`modal ${toggleModal2 ? "show" : ""}`}
                            id="myModal"
                            style={{
                            display: `${toggleModal2 ? "block" : "none"}`,
                            }}
                        >
                            <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                <h4 className="modal-title">Select a Token</h4>
                                <button
                                    type="button"
                                    onClick={onModalToggled2}
                                    className="close"
                                    data-dismiss="modal"
                                >
                                    &times;
                                </button>
                                </div>

                                <div className="form-group">
                                <div className="select2">
                                    <div className="select2-list bg-light w-100 rounded-bottom">
                                    <div className="container mt-3">
                                        <input
                                        className="select2-search form-control-1 form-control-sm"
                                        type="text"
                                        placeholder="Search  name or paste address"
                                        />
                                        <div
                                        className="select2-item px-3 py-2 border-bottom text-primary text-capitalize"
                                        data-value="1"
                                        onClick={(e) => {
                                            settoToken(
                                            <div className="select-section">
                                                <div
                                                className="img-section"
                                                style={{ display: "flex" }}
                                                >
                                                <svg
                                                    viewBox="0 0 16 16"
                                                    width="24px"
                                                    color="text"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="sc-bdnxRM kDWlca"
                                                    style={{ marginRight: "8px" }}
                                                >
                                                    <circle
                                                    cx="8"
                                                    cy="8"
                                                    r="8"
                                                    fill="#F0B90B"
                                                    ></circle>
                                                    <path
                                                    d="M5.01656 8.00006L3.79256 9.23256L2.56006 8.00006L3.79256 6.76756L5.01656 8.00006ZM8.00006 5.01656L10.1081 7.12456L11.3406 5.89206L9.23256 3.79256L8.00006 2.56006L6.76756 3.79256L4.66806 5.89206L5.90056 7.12456L8.00006 5.01656ZM12.2076 6.76756L10.9836 8.00006L12.2161 9.23256L13.4401 8.00006L12.2076 6.76756ZM8.00006 10.9836L5.89206 8.87556L4.66806 10.1081L6.77606 12.2161L8.00006 13.4401L9.23256 12.2076L11.3406 10.0996L10.1081 8.87556L8.00006 10.9836ZM8.00006 9.23256L9.23256 8.00006L8.00006 6.76756L6.76756 8.00006L8.00006 9.23256Z"
                                                    fill="#FFFDFA"
                                                    ></path>
                                                </svg>
                                                <h5>BNB</h5>
                                                </div>
                                            </div>
                                            );
                                            onModalToggled2();
                                        }}
                                        >
                                        <div className="select-section">
                                            <div
                                            className="img-section"
                                            style={{ display: "flex" }}
                                            >
                                            <svg
                                                viewBox="0 0 16 16"
                                                width="24px"
                                                color="text"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="sc-bdnxRM kDWlca"
                                                style={{ marginRight: "8px" }}
                                            >
                                                <circle
                                                cx="8"
                                                cy="8"
                                                r="8"
                                                fill="#F0B90B"
                                                ></circle>
                                                <path
                                                d="M5.01656 8.00006L3.79256 9.23256L2.56006 8.00006L3.79256 6.76756L5.01656 8.00006ZM8.00006 5.01656L10.1081 7.12456L11.3406 5.89206L9.23256 3.79256L8.00006 2.56006L6.76756 3.79256L4.66806 5.89206L5.90056 7.12456L8.00006 5.01656ZM12.2076 6.76756L10.9836 8.00006L12.2161 9.23256L13.4401 8.00006L12.2076 6.76756ZM8.00006 10.9836L5.89206 8.87556L4.66806 10.1081L6.77606 12.2161L8.00006 13.4401L9.23256 12.2076L11.3406 10.0996L10.1081 8.87556L8.00006 10.9836ZM8.00006 9.23256L9.23256 8.00006L8.00006 6.76756L6.76756 8.00006L8.00006 9.23256Z"
                                                fill="#FFFDFA"
                                                ></path>
                                            </svg>
                                            <h5>BNB</h5>
                                            </div>
                                        </div>
                                        </div>
                                        <div
                                        className="select2-item px-3 py-2 border-bottom text-primary text-capitalize"
                                        data-value="1"
                                        onClick={(e) => {
                                            settoToken(
                                            <div className="select-section">
                                                <div
                                                className="img-section"
                                                style={{ display: "flex" }}
                                                >
                                                <svg
                                                    viewBox="0 0 16 16"
                                                    width="24px"
                                                    color="text"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="sc-bdnxRM kDWlca"
                                                    style={{ marginRight: "8px" }}
                                                >
                                                    <circle
                                                    cx="8"
                                                    cy="8"
                                                    r="8"
                                                    fill="#F0B90B"
                                                    ></circle>
                                                    <path
                                                    d="M5.01656 8.00006L3.79256 9.23256L2.56006 8.00006L3.79256 6.76756L5.01656 8.00006ZM8.00006 5.01656L10.1081 7.12456L11.3406 5.89206L9.23256 3.79256L8.00006 2.56006L6.76756 3.79256L4.66806 5.89206L5.90056 7.12456L8.00006 5.01656ZM12.2076 6.76756L10.9836 8.00006L12.2161 9.23256L13.4401 8.00006L12.2076 6.76756ZM8.00006 10.9836L5.89206 8.87556L4.66806 10.1081L6.77606 12.2161L8.00006 13.4401L9.23256 12.2076L11.3406 10.0996L10.1081 8.87556L8.00006 10.9836ZM8.00006 9.23256L9.23256 8.00006L8.00006 6.76756L6.76756 8.00006L8.00006 9.23256Z"
                                                    fill="#FFFDFA"
                                                    ></path>
                                                </svg>
                                                <h5>BNB</h5>
                                                </div>
                                            </div>
                                            );
                                            onModalToggled2();
                                        }}
                                        >
                                        <div className="select-section">
                                            <div
                                            className="img-section"
                                            style={{ display: "flex" }}
                                            >
                                            <svg
                                                viewBox="0 0 16 16"
                                                width="24px"
                                                color="text"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="sc-bdnxRM kDWlca"
                                                style={{ marginRight: "8px" }}
                                            >
                                                <circle
                                                cx="8"
                                                cy="8"
                                                r="8"
                                                fill="#F0B90B"
                                                ></circle>
                                                <path
                                                d="M5.01656 8.00006L3.79256 9.23256L2.56006 8.00006L3.79256 6.76756L5.01656 8.00006ZM8.00006 5.01656L10.1081 7.12456L11.3406 5.89206L9.23256 3.79256L8.00006 2.56006L6.76756 3.79256L4.66806 5.89206L5.90056 7.12456L8.00006 5.01656ZM12.2076 6.76756L10.9836 8.00006L12.2161 9.23256L13.4401 8.00006L12.2076 6.76756ZM8.00006 10.9836L5.89206 8.87556L4.66806 10.1081L6.77606 12.2161L8.00006 13.4401L9.23256 12.2076L11.3406 10.0996L10.1081 8.87556L8.00006 10.9836ZM8.00006 9.23256L9.23256 8.00006L8.00006 6.76756L6.76756 8.00006L8.00006 9.23256Z"
                                                fill="#FFFDFA"
                                                ></path>
                                            </svg>
                                            <h5>BNB</h5>
                                            </div>
                                        </div>
                                        </div>
                                        <div
                                        className="select2-item px-3 py-2 border-bottom text-primary text-capitalize"
                                        data-value="1"
                                        onClick={(e) => {
                                            settoToken(
                                            <div className="select-section">
                                                <div
                                                className="img-section"
                                                style={{ display: "flex" }}
                                                >
                                                <svg
                                                    viewBox="0 0 16 16"
                                                    width="24px"
                                                    color="text"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="sc-bdnxRM kDWlca"
                                                    style={{ marginRight: "8px" }}
                                                >
                                                    <circle
                                                    cx="8"
                                                    cy="8"
                                                    r="8"
                                                    fill="#F0B90B"
                                                    ></circle>
                                                    <path
                                                    d="M5.01656 8.00006L3.79256 9.23256L2.56006 8.00006L3.79256 6.76756L5.01656 8.00006ZM8.00006 5.01656L10.1081 7.12456L11.3406 5.89206L9.23256 3.79256L8.00006 2.56006L6.76756 3.79256L4.66806 5.89206L5.90056 7.12456L8.00006 5.01656ZM12.2076 6.76756L10.9836 8.00006L12.2161 9.23256L13.4401 8.00006L12.2076 6.76756ZM8.00006 10.9836L5.89206 8.87556L4.66806 10.1081L6.77606 12.2161L8.00006 13.4401L9.23256 12.2076L11.3406 10.0996L10.1081 8.87556L8.00006 10.9836ZM8.00006 9.23256L9.23256 8.00006L8.00006 6.76756L6.76756 8.00006L8.00006 9.23256Z"
                                                    fill="#FFFDFA"
                                                    ></path>
                                                </svg>
                                                <h5>BNB</h5>
                                                </div>
                                            </div>
                                            );
                                            onModalToggled2();
                                        }}
                                        >
                                        <div className="select-section">
                                            <div
                                            className="img-section"
                                            style={{ display: "flex" }}
                                            >
                                            <svg
                                                viewBox="0 0 16 16"
                                                width="24px"
                                                color="text"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="sc-bdnxRM kDWlca"
                                                style={{ marginRight: "8px" }}
                                            >
                                                <circle
                                                cx="8"
                                                cy="8"
                                                r="8"
                                                fill="#F0B90B"
                                                ></circle>
                                                <path
                                                d="M5.01656 8.00006L3.79256 9.23256L2.56006 8.00006L3.79256 6.76756L5.01656 8.00006ZM8.00006 5.01656L10.1081 7.12456L11.3406 5.89206L9.23256 3.79256L8.00006 2.56006L6.76756 3.79256L4.66806 5.89206L5.90056 7.12456L8.00006 5.01656ZM12.2076 6.76756L10.9836 8.00006L12.2161 9.23256L13.4401 8.00006L12.2076 6.76756ZM8.00006 10.9836L5.89206 8.87556L4.66806 10.1081L6.77606 12.2161L8.00006 13.4401L9.23256 12.2076L11.3406 10.0996L10.1081 8.87556L8.00006 10.9836ZM8.00006 9.23256L9.23256 8.00006L8.00006 6.76756L6.76756 8.00006L8.00006 9.23256Z"
                                                fill="#FFFDFA"
                                                ></path>
                                            </svg>
                                            <h5>BNB</h5>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    {props.isConnected ? (
                    <div>
                        <a
                        href="/#"
                        className="btn btn-danger"
                        data-dismiss="modal"
                        data-target="#myModal"
                        >
                        Wallet Connected
                        </a>
                    </div>
                    ) : (
                    <a
                        className="btn btn-danger"
                        data-dismiss="modal"
                        data-target="#myModal"
                        onClick={() => props.connect()}
                    >
                        Connect Wallet
                    </a>
                    )}

                    <div className="modal" id="myModal">
                    <div className="modal-dialog">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Connect Wallet</h4>
                            <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            >
                            &times;
                            </button>
                        </div>

                        <div className="modal-body">
                            <div className="grd">
                            <div className="img">
                                <a href="/#">
                                <svg
                                    viewBox="0 0 40 40"
                                    width="40px"
                                    color="text"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="sc-bdnxRM la-Dshj"
                                >
                                    <path
                                    opacity="0.9"
                                    d="M19.9959 4.8377L20.7771 3.82105C20.5523 3.64825 20.2766 3.55457 19.9931 3.55457C19.7095 3.55457 19.4339 3.64825 19.209 3.82105L19.9959 4.8377ZM33.425 8.7837H34.7059C34.7081 8.61378 34.6767 8.44509 34.6134 8.28737C34.5502 8.12965 34.4563 7.98603 34.3372 7.8648C34.2181 7.74358 34.0762 7.64714 33.9196 7.58107C33.763 7.515 33.5949 7.4806 33.425 7.47985V8.7837ZM19.9959 36.2161L19.2837 37.2845C19.4936 37.425 19.7405 37.5 19.9931 37.5C20.2457 37.5 20.4925 37.425 20.7024 37.2845L19.9959 36.2161ZM6.57841 8.7837V7.49709C6.40847 7.49783 6.24036 7.53223 6.0838 7.5983C5.92723 7.66437 5.7853 7.76081 5.66621 7.88204C5.54712 8.00326 5.45322 8.14688 5.38995 8.3046C5.32667 8.46232 5.29526 8.63101 5.29754 8.80093L6.57841 8.7837ZM19.2148 5.84861C25.0275 10.3518 31.6846 10.0646 33.4307 10.0646V7.49709C31.6214 7.49709 25.8259 7.72684 20.7943 3.82105L19.2148 5.84861ZM32.1499 8.76073C32.0522 14.7113 31.7995 18.91 31.317 22.0174C30.8345 25.1248 30.1682 26.9399 29.2894 28.238C28.4106 29.5361 27.2848 30.3804 25.6364 31.3626C23.9879 32.3448 21.8799 33.4361 19.2837 35.1535L20.7312 37.2845C23.1895 35.6475 25.2343 34.6021 26.9747 33.5625C28.7284 32.6075 30.2502 31.2779 31.4319 29.6682C32.5806 27.9451 33.3675 25.6475 33.873 22.408C34.3785 19.1685 34.6369 14.809 34.7346 8.80093L32.1499 8.76073ZM20.7312 35.1535C18.1522 33.4304 16.05 32.362 14.413 31.3684C12.776 30.3747 11.6502 29.582 10.7656 28.238C9.8811 26.8939 9.16312 25.1076 8.66915 22.0174C8.17519 18.9273 7.95692 14.7113 7.85928 8.76073L5.29754 8.80093C5.39518 14.809 5.6594 19.18 6.15911 22.408C6.65882 25.636 7.42275 27.9336 8.59448 29.6682C9.77051 31.2788 11.2888 32.6088 13.0402 33.5625C14.7633 34.6021 16.8254 35.6475 19.2837 37.2845L20.7312 35.1535ZM6.57841 10.0646C8.30155 10.0646 14.9644 10.3518 20.7771 5.84861L19.209 3.82105C14.166 7.72684 8.37048 7.49709 6.57266 7.49709L6.57841 10.0646Z"
                                    fill="#3688EB"
                                    ></path>
                                </svg>
                                <div className="img-title"> Trust Wallet </div>
                                </a>
                            </div>
                            <div className="img">
                                <a href="/#">
                                <svg
                                    viewBox="0 0 40 40"
                                    width="40px"
                                    color="text"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="sc-bdnxRM la-Dshj"
                                >
                                    <path
                                    d="M36.0112 3.33337L22.1207 13.6277L24.7012 7.56091L36.0112 3.33337Z"
                                    fill="#E17726"
                                    ></path>
                                    <path
                                    d="M4.00261 3.33337L17.7558 13.7238L15.2989 7.56091L4.00261 3.33337Z"
                                    fill="#E27625"
                                    ></path>
                                    <path
                                    d="M31.0149 27.2023L27.3227 32.8573L35.2287 35.0397L37.4797 27.3258L31.0149 27.2023Z"
                                    fill="#E27625"
                                    ></path>
                                    <path
                                    d="M2.53386 27.3258L4.77116 35.0397L12.6772 32.8573L8.9987 27.2023L2.53386 27.3258Z"
                                    fill="#E27625"
                                    ></path>
                                    <path
                                    d="M12.2518 17.6496L10.0419 20.9712L17.8793 21.3281L17.6048 12.8867L12.2518 17.6496Z"
                                    fill="#E27625"
                                    ></path>
                                    <path
                                    d="M27.762 17.6494L22.3129 12.7905L22.1207 21.3279L29.9581 20.9711L27.762 17.6494Z"
                                    fill="#E27625"
                                    ></path>
                                    <path
                                    d="M12.6772 32.8574L17.3989 30.5652L13.336 27.3809L12.6772 32.8574Z"
                                    fill="#E27625"
                                    ></path>
                                    <path
                                    d="M22.6009 30.5652L27.3226 32.8574L26.6637 27.3809L22.6009 30.5652Z"
                                    fill="#E27625"
                                    ></path>
                                    <path
                                    d="M27.3226 32.8575L22.6009 30.5653L22.9715 33.6399L22.9303 34.9301L27.3226 32.8575Z"
                                    fill="#D5BFB2"
                                    ></path>
                                    <path
                                    d="M12.6772 32.8575L17.0694 34.9301L17.042 33.6399L17.3989 30.5653L12.6772 32.8575Z"
                                    fill="#D5BFB2"
                                    ></path>
                                    <path
                                    d="M17.1518 25.3495L13.2262 24.1965L15.9988 22.92L17.1518 25.3495Z"
                                    fill="#233447"
                                    ></path>
                                    <path
                                    d="M22.848 25.3495L24.001 22.92L26.801 24.1965L22.848 25.3495Z"
                                    fill="#233447"
                                    ></path>
                                    <path
                                    d="M12.6773 32.8573L13.3635 27.2023L8.99876 27.3258L12.6773 32.8573Z"
                                    fill="#CC6228"
                                    ></path>
                                    <path
                                    d="M26.6364 27.2023L27.3227 32.8573L31.0149 27.3258L26.6364 27.2023Z"
                                    fill="#CC6228"
                                    ></path>
                                    <path
                                    d="M29.9581 20.9709L22.1207 21.3278L22.8482 25.3495L24.0011 22.92L26.8012 24.1965L29.9581 20.9709Z"
                                    fill="#CC6228"
                                    ></path>
                                    <path
                                    d="M13.2263 24.1965L15.9989 22.92L17.1519 25.3495L17.8793 21.3278L10.0419 20.9709L13.2263 24.1965Z"
                                    fill="#CC6228"
                                    ></path>
                                    <path
                                    d="M10.0419 20.9709L13.3361 27.3809L13.2263 24.1965L10.0419 20.9709Z"
                                    fill="#E27525"
                                    ></path>
                                    <path
                                    d="M26.8011 24.1965L26.6638 27.3809L29.958 20.9709L26.8011 24.1965Z"
                                    fill="#E27525"
                                    ></path>
                                    <path
                                    d="M17.8793 21.3278L17.1519 25.3494L18.0715 30.0985L18.2637 23.8396L17.8793 21.3278Z"
                                    fill="#E27525"
                                    ></path>
                                    <path
                                    d="M22.1205 21.3278L21.7499 23.8258L21.9283 30.0985L22.848 25.3494L22.1205 21.3278Z"
                                    fill="#E27525"
                                    ></path>
                                    <path
                                    d="M22.848 25.3496L21.9284 30.0987L22.601 30.5654L26.6638 27.381L26.8011 24.1967L22.848 25.3496Z"
                                    fill="#F5841F"
                                    ></path>
                                    <path
                                    d="M13.2262 24.1967L13.336 27.381L17.3989 30.5654L18.0714 30.0987L17.1518 25.3496L13.2262 24.1967Z"
                                    fill="#F5841F"
                                    ></path>
                                    <path
                                    d="M22.9303 34.93L22.9715 33.6398L22.6284 33.3378H17.3714L17.042 33.6398L17.0694 34.93L12.6772 32.8574L14.2145 34.1202L17.3302 36.2751H22.6696L25.7853 34.1202L27.3226 32.8574L22.9303 34.93Z"
                                    fill="#C0AC9D"
                                    ></path>
                                    <path
                                    d="M22.601 30.5653L21.9284 30.0986H18.0715L17.3989 30.5653L17.0421 33.6399L17.3715 33.3379H22.6285L22.9716 33.6399L22.601 30.5653Z"
                                    fill="#161616"
                                    ></path>
                                    <path
                                    d="M36.5875 14.3003L37.7542 8.61779L36.011 3.33337L22.6009 13.2846L27.7618 17.6493L35.0365 19.7768L36.6424 17.8964L35.9424 17.3886L37.0679 16.3728L36.2169 15.7003L37.3287 14.863L36.5875 14.3003Z"
                                    fill="#763E1A"
                                    ></path>
                                    <path
                                    d="M2.24573 8.61779L3.42615 14.3003L2.67123 14.863L3.78302 15.7003L2.93202 16.3728L4.05753 17.3886L3.35752 17.8964L4.96343 19.7768L12.2518 17.6493L17.399 13.2846L4.00263 3.33337L2.24573 8.61779Z"
                                    fill="#763E1A"
                                    ></path>
                                    <path
                                    d="M35.0365 19.777L27.7619 17.6495L29.958 20.9712L26.6638 27.3811L31.0149 27.3262H37.4797L35.0365 19.777Z"
                                    fill="#F5841F"
                                    ></path>
                                    <path
                                    d="M12.2517 17.6495L4.96332 19.777L2.53386 27.3262H8.99869L13.336 27.3811L10.0419 20.9712L12.2517 17.6495Z"
                                    fill="#F5841F"
                                    ></path>
                                    <path
                                    d="M22.1205 21.3276L22.6009 13.2843L24.701 7.56067H15.2988L17.3988 13.2843L17.8792 21.3276L18.0577 23.8531L18.0714 30.0984H21.9283L21.9421 23.8531L22.1205 21.3276Z"
                                    fill="#F5841F"
                                    ></path>
                                </svg>
                                <div className="img-title"> Metamask </div>
                                </a>
                            </div>
                            <div className="img">
                                <a href="/#">
                                <svg
                                    viewBox="0 0 40 40"
                                    width="40px"
                                    color="text"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="sc-bdnxRM la-Dshj"
                                >
                                    <path
                                    d="M8.68096 12.4756C14.9323 6.39698 25.0677 6.39698 31.3191 12.4756L32.0714 13.2071C32.384 13.511 32.384 14.0038 32.0714 14.3077L29.4978 16.8103C29.3415 16.9622 29.0881 16.9622 28.9318 16.8103L27.8965 15.8036C23.5354 11.563 16.4647 11.563 12.1036 15.8036L10.9948 16.8817C10.8385 17.0336 10.5851 17.0336 10.4288 16.8817L7.85517 14.3791C7.54261 14.0752 7.54261 13.5824 7.85517 13.2785L8.68096 12.4756ZM36.6417 17.6511L38.9322 19.8783C39.2448 20.1823 39.2448 20.675 38.9322 20.979L28.6039 31.022C28.2913 31.3259 27.7846 31.3259 27.472 31.022C27.472 31.022 27.472 31.022 27.472 31.022L20.1416 23.8942C20.0634 23.8182 19.9367 23.8182 19.8586 23.8942C19.8586 23.8942 19.8586 23.8942 19.8586 23.8942L12.5283 31.022C12.2157 31.3259 11.709 31.3259 11.3964 31.022C11.3964 31.022 11.3964 31.022 11.3964 31.022L1.06775 20.9788C0.755186 20.6749 0.755186 20.1821 1.06775 19.8782L3.35833 17.6509C3.6709 17.347 4.17767 17.347 4.49024 17.6509L11.8208 24.7789C11.8989 24.8549 12.0256 24.8549 12.1038 24.7789C12.1038 24.7789 12.1038 24.7789 12.1038 24.7789L19.4339 17.6509C19.7465 17.347 20.2533 17.347 20.5658 17.6509C20.5658 17.6509 20.5658 17.6509 20.5658 17.6509L27.8964 24.7789C27.9745 24.8549 28.1012 24.8549 28.1794 24.7789L35.5098 17.6511C35.8223 17.3471 36.3291 17.3471 36.6417 17.6511Z"
                                    fill="#3389FB"
                                    ></path>
                                </svg>
                                <div className="img-title"> WalletConnect </div>
                                </a>
                            </div>
                            <div className="img">
                                <a href="/#">
                                <svg
                                    viewBox="0 0 24 24"
                                    width="40px"
                                    color="textSubtle"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="sc-bdnxRM hA-DcEf"
                                >
                                    <path d="M6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z"></path>
                                </svg>
                                <div className="img-title"> More </div>
                                </a>
                            </div>
                            </div>
                        </div>

                        <div className="modal-footer">
                            <p>Haven’t got a crypto wallet yet?</p>
                            <button
                            type="button"
                            className="btn btn-danger"
                            data-dismiss="modal"
                            >
                            Learn How to Connect
                            </button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        </div>
    );
}

export default AddLiquidity;
