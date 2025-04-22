import React from "react";


function BriseStake(props) {
    return (
        <>
        <div className="cardence-staking">
            <div className="container">
            <div className="row">
                <div className="col-md-6 col-lg-6 col-sm-12 col-xl-6">
                <div className="dashboard">
                    <h3>BRISE Staking Dashboard</h3>
                    <a href="#stackSection">
                    <button type="button" className="btn btn-danger">
                        Stake BRISE
                    </button>
                    </a>
                    <h4>
                    Powered by
                    <img src="images/favicon.png" alt="" />
                    <span>BRC</span>
                    </h4>
                </div>
                </div>
                <div className="col-md-6 col-lg-6 col-sm-12 col-xl-6">
                <div className="border-back"></div>
                <div className="staking-info">
                    <div className="all-info">
                    <div className="label-1">BRISE STAKED</div>
                    <div className="brise-stacked">
                        10000 <span>BRISE</span>
                    </div>
                    </div>
                    <div className="all-info">
                    <div className="label-1">BRISE STAKERS</div>
                    <div className="brise-stacked">
                        100000
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        <section className="forms-section" id="stackSection">
            <div className="container">
            <div className="row justify-content-center align-items-center">
                <div className="checkout-form-centre">
                <div className="checkout-login-step">
                    <div className="calculator">
                    <div className="title">
                        <h3>$BRISE Calculator</h3>
                    </div>
                    <p>Stake BRISE to earn BUSD rewards + upto 80% APY.</p>
                    <div className="add-liquidity">
                        <div className="content">
                        <div className="label">
                            <h6>BRISE</h6>
                        </div>
                        <div className="label d-flex">
                            <input
                            type="text"
                            placeholder="5000"
                            value="xxx"
                            />
                            <button
                            className="input-button"
                            >
                            max
                            </button>
                        </div>
                        </div>
                    </div>
                    <div className="plus">+</div>
                    <div className="add-liquidity-3">
                        <p>Lock tokens for</p>
                        <button
                        className="box active"
                        >
                        30 days
                        </button>
                        <button
                        type="button"
                        className="box active"
                        >
                        60 days
                        </button>
                        <button
                        type="button"
                        className="box active"
                        >
                        90 days
                        </button>
                        <button
                        type="button"
                        className="box active"
                        >
                        180 days
                        </button>
                    </div>
                    <div className="plus">
                        <i className="fa fa-arrow-down"></i>
                    </div>
                    <h4>
                    xxx Days
                    </h4>
                    <h4>locked until xxx </h4>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>

        <section className="forms-section">
            <div className="container">
            <div className="justify-content-center align-items-center">
                <div className="checkout-form-centre-5">
                <div className="checkout-login-step">
                    <div className="box-section">
                    <div className="first-box-section">
                        <div className="first-top">
                        <div className="title">BUSD Earned</div>
                        <h4>
                            xxxx
                        </h4>
                        </div>
                        <div className="first-bottom">
                        <div className="content">
                            <div className="title">Claimed Reward</div>
                            <h4>
                            xxxx
                            </h4>
                        </div>
                        <div className="content">
                            <div className="title">Current Staked</div>
                            <h4>
                            xxxx
                            </h4>
                        </div>
                        </div>
                    </div>
                    <div className="first-box-section">
                        <div className="first-top">
                        <div className="title">Your BRISE Wallet Balance</div>
                        <h4>xxxx</h4>
                        </div>
                        <div className="first-bottom">
                        <div className="content">
                            <div className="title">Total Staked</div>
                            <h4>
                            xxxx
                            </h4>
                        </div>
                        <div className="content">
                            <div className="title">Total UnStaked</div>
                            <h4>
                            xxxx
                            </h4>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>

        <section className="forms-section">
            <div className="container">
            <div className="justify-content-center align-items-center">
                <div className="checkout-form-centre-6">
                <div className="checkout-login-step">
                    <div className="logo-section">
                    <img src="images/logo.png" alt="" />
                    </div>
                    <div className="table-section">
                    <div className="t-header">
                        <div className="t-data">
                        <div className="title">Staked Amount</div>
                        </div>
                        <div className="t-data">
                        <div className="title">Stake Date</div>
                        </div>
                        <div className="t-data">
                        <div className="title">Unstake Date</div>
                        </div>
                        <div className="t-data">
                        <div className="title">Earn Reward</div>
                        </div>
                        <div className="t-data">
                        <div className="title">Unstake</div>
                        </div>
                        <div className="t-data">
                        <div className="title">Harvest</div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        </>
    );
}

export default BriseStake;
