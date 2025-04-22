import React from "react";
import { Link } from "react-router-dom";
import { useWallet } from "../context/WalletContext";

function Header() {
    const { account, isConnected, connectWallet, disconnectWallet } = useWallet();

    const formatAddress = (address) => {
        return `${address.slice(0, 6)}...${address.slice(-4)}`;
    };

    return (
        <nav className="navbar navbar-default navbar-trans navbar-expand-lg">
            <div className="container">
                <Link className="navbar-brand text-brand" to="/">
                    <img src="images/logo.png" alt="" />
                    <span></span>
                </Link>
                <div
                    className="navbar-collapse collapse justify-content-left"
                    id="navbarDefault"
                >
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/" title="Stake">
                                BSC Stake
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                href="#"
                                title="Supports"
                                data-toggle="modal"
                                data-target="#myModal-14"
                            >
                                Support
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/faq">
                                FAQ
                            </a>
                        </li>

                        <div className="modal" id="myModal-14">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h4 className="modal-title">Support</h4>
                                        <button
                                            type="button"
                                            className="close"
                                            data-dismiss="modal"
                                        >
                                            &times;
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="liquidity">
                                            <h4>Visit www.bitgert.com for Live Chat Support.</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ul>
                </div>
                <div className="right-side">
                    <ul>
                        <li>
                            {isConnected ? (
                                <button
                                    className="btn btn-primary"
                                    onClick={disconnectWallet}
                                >
                                    {formatAddress(account)}
                                </button>
                            ) : (
                                <button
                                    className="btn btn-primary"
                                    onClick={connectWallet}
                                >
                                    Connect Wallet
                                </button>
                            )}
                        </li>
                    </ul>
                </div>
                <button
                    className="navbar-toggler collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarDefault"
                    aria-controls="navbarDefault"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span></span> <span></span> <span></span>{" "}
                </button>
            </div>
        </nav>
    );
}

export default Header;
