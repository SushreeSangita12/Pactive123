import React from 'react';
import './ActivityList.css';

import num18 from '../../Assests/num18.png';
import num17 from '../../Assests/num17.png';
import num3 from '../../Assests/num3.png';
import num15 from '../../Assests/num15.png';

import rednotify from '../../Assests/rednotify.png'
import yellownotify from '../../Assests/yellownotify.png'
import whitenotify from '../../Assests/whitenotify.png'

const ActivityList = () => {
    return ( 
        <div className='cont1'>
            <div className='rows1'>
                <div className='cols1'>
                    <div class="dropdown">
                        <button class="dropbtn"><u>All Activity</u></button>
                            <div class="dropdown-content">
                               
                            </div>
                    </div>
                </div>
                <div className='cols2'>
                    <div class="dropdown">
                        <button class="dropbtn"><u>By Frequency</u></button>
                            <div class="dropdown-content">
                               
                            </div>
                    </div>
                </div>
            </div>
            <div className='rows2'>
                <div class="checkbox-container">
                    <input type="checkbox" id="myCheckbox"/>
                    <label for="myCheckbox">Open Activity</label>
                </div>
            </div>
            <br></br>
            <div className='rows3'>
                <div className='rows22'>
                    <div className='pa1'>
                        <div className='m1'>
                            <h2>LINE</h2>
                       </div>
                       <div className='m2'>
                            <img className='midicon' src={num18} alt='Symbol'/>
                       </div>
                    </div>
                    <div className='pa2'>
                       <div className='m1'>
                            <h2>Trim Press Idler Wheel :</h2>
                       </div>
                       <div className='m2'>
                            <p1>Idler Wheel Open at Angle outside control limit</p1>
                       </div>

                    </div>
                    <div className='pa3'>
                        <div className='notify'>
                            <img className='midicon' src={rednotify} alt='Symbol'/>
                        </div>
                        <div className='num'>
                            <p1>12</p1>
                        </div>
                    </div>
                </div>
                <div className='rows222'>

                </div>
            </div>
            <br></br>
            <div className='rows4'>
                <div className='rows22'>
                    <div className='pa1'>
                        <div className='m1'>
                            <h2>LINE</h2>
                       </div>
                       <div className='m2'>
                            <img className='midicon' src={num17} alt='Symbol'/>
                       </div>
                    </div>
                    <div className='pa2'>
                       <div className='m1'>
                            <h2>Trim Press Idler Wheel :</h2>
                       </div>
                       <div className='m2'>
                            <p1>Idler Wheel Open at Angle outside control limit</p1>
                       </div>

                    </div>
                    <div className='pa3'>
                        <div className='num'>
                            <h5>M</h5>
                        </div>
                        <div className='notify'>
                            <img className='midicon' src={yellownotify} alt='Symbol'/>
                        </div>
                        <div className='num'>
                            <p1>110</p1>
                        </div>
                    </div>
                </div>
                <div className='rows222'>

                </div>
            </div>
            <br></br>
            <div className='rows5'>
                <div className='rows22'>
                    <div className='pa1'>
                        <div className='m1'>
                            <h2>LINE</h2>
                       </div>
                       <div className='m2'>
                            <img className='midicon' src={num3} alt='Symbol'/>
                       </div>
                    </div>
                    <div className='pa2'>
                       <div className='m1'>
                            <h2>Extruder Heater :</h2>
                       </div>
                       <div className='m2'>
                            <p1>Screen Changes || tempreture outside control limit</p1>
                       </div>

                    </div>
                    <div className='pa3'>
                        <div className='notify'>
                            <img className='midicon' src={whitenotify} alt='Symbol'/>
                        </div>
                        <div className='num'>
                            <p1>9</p1>
                        </div>
                    </div>
                </div>
                <div className='rows222'>

                </div>
            </div>
            <br></br>
            <div className='rows6'>
                <div className='rows22'>
                    <div className='pa1'>
                        <div className='m1'>
                            <h2>LINE</h2>
                       </div>
                       <div className='m2'>
                            <img className='midicon' src={num15} alt='Symbol'/>
                       </div>
                    </div>
                    <div className='pa2'>
                       <div className='m1'>
                            <h2>Trim Press Idler Wheel :</h2>
                       </div>
                       <div className='m2'>
                            <p1>Idler Wheel Open at Angle outside control limit</p1>
                       </div>

                    </div>
                    <div className='pa3'>
                        <div className='notify'>
                            <img className='midicon' src={whitenotify} alt='Symbol'/>
                        </div>
                        <div className='num'>
                            <p1>5</p1>
                        </div>
                    </div>
                </div>
                <div className='rows222'>

                </div>
            </div>
        </div>
    );
};
export default ActivityList;