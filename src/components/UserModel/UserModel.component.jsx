import React, { useState } from 'react';
import './UserModel.styles.css';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';

import ShowTimeRange from '../ShowTimeRange/ShowTimeRange.component';

const UserModel = ({ real_name, activity_periods }) => {
    const [ismodalOpen, setIsModalOpen ] = useState(false); 

    return (
        <div className='user-container'>
            <div className='user-display' onClick={() => setIsModalOpen(ismodalOpen => !ismodalOpen)}>{real_name}</div>
            <Modal isOpen={ismodalOpen} toggle={() => setIsModalOpen(ismodalOpen => !ismodalOpen)}>
            <ModalHeader toggle={() => setIsModalOpen(ismodalOpen => !ismodalOpen)}>Active Time Periods</ModalHeader>
                <ModalBody>
                    <ShowTimeRange activity_periods={activity_periods} />
                </ModalBody>
            </Modal>
        </div>
    );
}

export default React.memo(UserModel);