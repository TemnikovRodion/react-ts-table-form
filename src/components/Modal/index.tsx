import React from "react";
import ReactModal from 'react-modal';
import Icon from '../Icon';
import MultiStepForm from "../MultiStepForm";
import './styles.css';

ReactModal.setAppElement("#root");

type Props = {
    closeModal: () => void,
    modalIsOpen: boolean
};

const Modal = ({ closeModal, modalIsOpen }: Props): React.ReactElement => {
    return (
        <ReactModal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            className='modal_wrapper'
        >
            <div className="modal_window">
                <div className="modal_close" onClick={closeModal}><Icon name="close" size={25} /></div>
                <MultiStepForm closeModal={closeModal} />
            </div>
        </ReactModal>
    );
}

export default Modal;