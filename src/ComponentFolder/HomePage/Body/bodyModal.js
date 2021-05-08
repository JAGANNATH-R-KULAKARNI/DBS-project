import React from 'react';
import Classes from '../../Modal/Modal.css';
import BodyBackdrop from '../../BackDrop/BackDrop';
import MessageUI from '../../MessagesUI/MessagesUI';
import OKbutton from '../../Button/Button';


class BodyModal extends React.Component
{
    render()
    {
        const afterUploadStatus=(<MessageUI messageType={this.props.afterUploadResulModalMessageType} modalMessage={this.props.afterUploadResulModalMessage} />
            );
        const cardDetails=(this.props.afterUploadResultModalStatus ? 
             afterUploadStatus: this.props.card
            )
        return (
            <div>
            <div className={Classes.Modal}
            style={{
                transform : 'translateY(0)' ,
                opacity :'1' 
            }}>
                {cardDetails}
                {this.props.afterUploadResultModalStatus ? <OKbutton 
                afterUploadResulModalOKhandler={this.props.afterUploadResulModalOKhandler}/> : null}
                </div>
                <BodyBackdrop/>
                </div>
        );
    }
};

export default BodyModal;