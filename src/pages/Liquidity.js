import React from "react";
import { Link } from "react-router-dom";
function Liquidity(props) {
    return (
        <div>
        <section className="forms-section">
            <div className="container">
            <div className="row justify-content-center align-items-center">
                <div className="checkout-form-centre">
                <div className="checkout-login-step">
                    <div className="product-body">
                    <a href="">
                        <h5>Your Liquidity</h5>
                    </a>
                    <a
                        href=""
                        className="label"
                        style={{ marginLeft: "10px" }}
                        data-toggle="modal"
                        data-target="#myModal3"
                    >
                        {" "}
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
                                    href=""
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
                        href=""
                        className="label"
                        data-toggle="modal"
                        data-target="#myModal1"
                    >
                        {" "}
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
                                <a href="">standard (5)</a>
                                </li>
                                <li>
                                <a href="">fast (6)</a>
                                </li>
                                <li>
                                <a href="">Instant (6)</a>
                                </li>
                            </ul>
                            <div className="swaps-liquidation">
                                <p>SWAPS & LIQUIDITY</p>
                                <h4>
                                Slippage Tolerance{" "}
                                <i className="fa fa-question-circle"></i>
                                </h4>

                                <div className="details">
                                <div className="label">
                                    Tx deadline (mins)
                                    <i className="fa fa-question-circle"></i>
                                </div>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="2"
                                />
                                </div>
                                <div className="details">
                                <div className="label">
                                    Expert Mode{" "}
                                    <i className="fa fa-question-circle"></i>
                                </div>
                                <button
                                    type="button"
                                    className="btn btn-toggle"
                                    data-toggle="button"
                                    aria-pressed="false"
                                    autocomplete="off"
                                >
                                    <div className="handle"></div>
                                </button>
                                </div>
                                <div className="details">
                                <div className="label">
                                    Disable Multihops
                                    <i className="fa fa-question-circle"></i>
                                </div>
                                <button
                                    type="button"
                                    className="btn btn-toggle"
                                    data-toggle="button"
                                    aria-pressed="false"
                                    autocomplete="off"
                                >
                                    <div className="handle"></div>
                                </button>
                                </div>
                                <div className="details">
                                <div className="label">
                                    Flippy sounds
                                    <i className="fa fa-question-circle"></i>
                                </div>
                                <button
                                    type="button"
                                    className="btn btn-toggle"
                                    data-toggle="button"
                                    aria-pressed="false"
                                    autocomplete="off"
                                >
                                    <div className="handle"></div>
                                </button>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <a href="">
                        <h6>Remove liquidity to receive tokens back</h6>
                    </a>
                    </div>
                    <div className="liquidity">
                    <h5>Connect to a wallet to view your liquidity.</h5>
                    </div>
                    <Link
                    to="/AddLiquidity"
                    className="btn btn-danger"
                    data-dismiss="modal"
                    >
                    + Add Liquidity
                    </Link>
                </div>
                </div>
            </div>
            </div>
        </section>
        </div>
    );
}

export default Liquidity;
