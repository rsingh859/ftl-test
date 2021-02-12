import React, { useState } from 'react';

import './ShowTimeRange.styles.css';
import './calendar.styles.css';

import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import Calendar from 'react-calendar';

const ShowTimeRange = ({ activity_periods }) => {
    const [showCal, setshowCal ] = useState(false);
    const [value, onChange] = useState(new Date(activity_periods[0].start_time.slice(0,-2)));
    return (
        <div className='showtime-container'>
            <div className='time-range'>
               {activity_periods.map((ac, idx) => {
                    return(
                    <div key={idx} className='time-range-inline'>
                        <h4>{ac.start_time}</h4>
                        <span>&nbsp;---&nbsp;</span>
                        <h4>{ac.end_time}</h4>
                    </div>
               )})} 
            </div>
            <button className='button' onClick={() => setshowCal(showCal => !showCal)}>Open Calendar View</button>
            <Modal isOpen={showCal} toggle={() => setshowCal(showCal => !showCal)}>
            <ModalHeader toggle={() => setshowCal(showCal => !showCal)}>Calendar</ModalHeader>
                <ModalBody className='calendar_modal_body'> 
                    <Calendar 
                        defaultValue={value}
                        onChange={onChange}
                    />
                </ModalBody>
            </Modal>
        </div>
    );
}

export default ShowTimeRange;
