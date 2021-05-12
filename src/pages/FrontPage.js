import React from 'react';
import hello from './hello.png';
import Chart from './Chart';
import * as FiIcons from "react-icons/fi";
import ThumbsUp from './hand-thumbs-up.svg';
import '../App.css';
const FrontPage = () => {
    return (
        <main>
            <div className="main__container">
                <div className="main-title">
                    <img src={hello} width="100" height="100" alt="hello" />
                    <div className="main__greeting">
                        <h1>Hello </h1>
                        <p>Welcome to your admin dashboard</p>
                    </div>
                </div>
                <div className="main__cards">
                    <div className="card">
                        <div className="card_inner">
                            <p className="text-primary-p">Number of Subscribers</p>
                            <span className="font-bold text-title">578</span>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card_inner">
                            <p className="text-primary-p">Times of Watching</p>
                            <span className="font-bold text-title">2467</span>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card_inner">
                            <p className="text-primary-p">Number of Videos</p>
                            <span className="font-bold text-title">340</span>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card_inner">
                            <p className="text-primary-p">Number of Likes</p>
                            <span className="font-bold text-title">645</span>
                        </div>
                    </div>
                </div>
                <div className="charts">
                    <div className="charts__left">
                        <div className="charts__left__title">
                            <div>
                                <h1>
                                    Daily Reports
                                </h1>
                                <p>Bangalore , Karnataka, India</p>
                            </div>
                            <i className="fa fa-usd"></i>
                        </div>
                        <Chart />
                    </div>
                    <div className="charts__right">
                        <div className="charts__right__title">
                            <div>
                                <h1>Stats Report</h1>
                                <p>Bangalore, Karnataka, India</p>
                            </div>
                        </div>
                        <div className="charts__right__cards">
                            <div className="card1">
                                <h1>Income</h1>
                                <p>Rs.75300</p>
                            </div>
                            <div className="card2">
                                <h1>Sales</h1>
                                <p>Rs.124000</p>
                            </div>
                            <div className="card3">
                                <h1>Users</h1>
                                <p>3900</p>
                            </div>
                            <div className="card4">
                                <h1>Orders</h1>
                                <p>1881</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default FrontPage
