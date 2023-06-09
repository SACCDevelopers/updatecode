import React, { Component } from 'react';
import  '../css/StudentLandingPage.css';

class Studentlandingpages extends Component {
    state = {  } 
    render() { 
        return (<React.Fragment>
            
    <div className="container ">
        <div className="navigation">
            <ul>
                <li>
                    <a href="#">
                        <span className="icon">
                            <ion-icon name="book"></ion-icon>
                        </span>
                        <span className="title">Student View</span>
                    </a>
                </li> 

                <li>
                    <a href="#">
                        <span className="icon">
                            <ion-icon name="briefcase"></ion-icon>
                        </span>
                        <span className="title">Available Counsellors</span>
                    </a>
                </li>

                <li>
                    <a href="#">
                        <span className="icon">
                            <ion-icon name="clipboard"></ion-icon>
                        </span>
                        <span className="title">Attempt Quiz</span>
                    </a>
                </li>

                <li>
                    <a href="#">
                        <span className="icon">
                            <ion-icon name="speedometer"></ion-icon>
                        </span>
                        <span className="title">Progress</span>
                    </a>
                </li>

                <li>
                    <a href="#">
                        <span className="icon">
                            <ion-icon name="shield-checkmark"></ion-icon>
                        </span>
                        <span className="title">Preferences</span>
                    </a>
                </li>

                <li>
                    <a href="#">
                        <span className="icon">
                            <ion-icon name="play"></ion-icon>
                        </span>
                        <span className="title">Videos & Notes</span>
                    </a>
                </li>

                <li>
                    <a href="#">
                        <span className="icon">
                            <ion-icon name="settings-outline"></ion-icon>
                        </span>
                        <span className="title">Settings</span>
                    </a>
                </li> 

                <li>
                    <a href="#">
                        <span className="icon">
                            <ion-icon name="log-out-outline"></ion-icon>
                        </span>
                        <span className="title">Sign Out</span>
                    </a>
                </li>
            </ul>
        </div>

        {/* <!-- ========================= Main ==================== --> */}
        <div className="main">
            <div className="topbar">
                <div className="toggle">
                    <ion-icon name="menu-outline"></ion-icon>
                </div> 

                <div className="user">
                    <img src="customer01.jpg" alt=""/>
                </div>
            </div>

            {/* <!-- ======================= Cards ================== --> */}
            <div className="cardBox">
                <div className="card">
                    <div> 
                        <div className="cardName">Tied-Up with</div>
                    </div>

                    <div className="iconBx">
                        <ion-icon name="school"></ion-icon>
                    </div>
                </div>

                 

                <div className="card">
                    <div> 
                        <div className="cardName">Request For Meeting</div>
                    </div>

                    <div className="iconBx">
                        <ion-icon name="videocam"></ion-icon>
                    </div>
                </div>

                 
            </div>

            {/* <!-- ================ Order Details List ================= --> */}
            <div className="details">
                <div className="recentOrders">
                    <div className="cardHeader">
                        <h2>Recent Meetings</h2>
                        <a href="#" className="btn">View All</a>
                    </div>

                    <table>
                        <thead>
                            <tr>
                                <td>Name</td>
                                <td>Duration</td>
                                <td>Problem</td>
                                <td>Institute</td>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>Qasim Shafiq</td>
                                <td>20 min</td>
                                <td>University Selection</td>
                                <td><span className="status delivered">F.Sc pre engg</span></td>
                            </tr>

                            <tr>
                                <td>Moeez topper</td>
                                <td>15 min</td>
                                <td>Field Selection</td>
                                <td><span className="status pending">ICS</span></td>
                            </tr>

                            <tr>
                                <td>Qasim Chawara</td>
                                <td>45 min</td>
                                <td>Career Issues</td>
                                <td><span className="status return">F.Sc pre medical</span></td>
                            </tr>

                            <tr>
                                <td>Addidas Shoes</td>
                                <td>$620</td>
                                <td>Due</td>
                                <td><span className="status inProgress">In Progress</span></td>
                            </tr>

                            <tr>
                                <td>Star Refrigerator</td>
                                <td>$1200</td>
                                <td>Paid</td>
                                <td><span className="status delivered">Delivered</span></td>
                            </tr>

                            <tr>
                                <td>Dell Laptop</td>
                                <td>$110</td>
                                <td>Due</td>
                                <td><span className="status pending">Pending</span></td>
                            </tr>

                            <tr>
                                <td>Apple Watch</td>
                                <td>$1200</td>
                                <td>Paid</td>
                                <td><span className="status return">Return</span></td>
                            </tr>

                            <tr>
                                <td>Addidas Shoes</td>
                                <td>$620</td>
                                <td>Due</td>
                                <td><span className="status inProgress">In Progress</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* <!-- ================= New Customers ================ --> */}
                <div className="recentCustomers">
                    <div className="cardHeader">
                        <h2>Recent Students</h2>
                    </div>

                    <table>
                        <tr>
                            <td width="60px">
                                <div className="imgBx"><img src="customer02.jpg" alt=""/></div>
                            </td>
                            <td>
                                <h4>Qasim Shafiq <br/> <span>Italy</span></h4>
                            </td>
                        </tr>

                        <tr>
                            <td width="60px">
                                <div className="imgBx"><img src="customer01.jpg" alt=""/></div>
                            </td>
                            <td>
                                <h4>Qasim Shafiq<br/> <span>India</span></h4>
                            </td>
                        </tr>

                        <tr>
                            <td width="60px">
                                <div className="imgBx"><img src="customer02.jpg" alt=""/></div>
                            </td>
                            <td>
                                <h4>Qasim Shafiq<br/> <span>Italy</span></h4>
                            </td>
                        </tr>

                        <tr>
                            <td width="60px">
                                <div className="imgBx"><img src="customer01.jpg" alt=""/></div>
                            </td>
                            <td>
                                <h4>Qasim Shafiq <br/> <span>India</span></h4>
                            </td>
                        </tr>

                        <tr>
                            <td width="60px">
                                <div className="imgBx"><img src="customer02.jpg" alt=""/></div>
                            </td>
                            <td>
                                <h4>Qasim Shafiq<br/> <span>Italy</span></h4>
                            </td>
                        </tr>

                        <tr>
                            <td width="60px">
                                <div className="imgBx"><img src="customer01.jpg" alt=""/></div>
                            </td>
                            <td>
                                <h4>Amit <br/> <span>India</span></h4>
                            </td>
                        </tr>

                        <tr>
                            <td width="60px">
                                <div className="imgBx"><img src="customer01.jpg" alt=""/></div>
                            </td>
                            <td>
                                <h4>David <br/> <span>Italy</span></h4>
                            </td>
                        </tr>

                        <tr>
                            <td width="60px">
                                <div className="imgBx"><img src="customer02.jpg" alt=""/></div>
                            </td>
                            <td>
                                <h4>Amit <br/> <span>India</span></h4>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div> 
    </div>

    

   

        </React.Fragment>
        );
    }
}
export default Studentlandingpages