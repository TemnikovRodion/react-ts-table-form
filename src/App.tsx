import React, { useCallback, useState } from "react";

import Modal from '../src/components/Modal';
import Table from '../src/components/Table';
import './assets/styles/App.css';

type Props = {};

const App = ({ }: Props): React.ReactElement => {

    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal = useCallback(() => {
        setIsOpen(true);
    }, [setIsOpen])

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <main className='main'>
            <button className="modal_open" onClick={openModal}>Add</button>

            <Modal closeModal={closeModal} modalIsOpen={modalIsOpen} />
            <Table />
        </main>
    );
}

export default App;