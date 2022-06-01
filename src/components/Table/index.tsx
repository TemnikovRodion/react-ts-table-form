import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

import Icon from '../Icon';
import { deleteInfo } from "../../redux/tableSlice";
import { RootState } from '@/redux/store';
import './styles.css';



const Table = (): React.ReactElement => {

    const dispatch = useDispatch();
    const tableData = useSelector((state: RootState) => state.table.tableData);


    const onDelete = (id: string) => {
        dispatch(deleteInfo(id));
    }

    const listItems = tableData.map((item, index) =>
        <tr key={index}>
            <td>
                <button className="delete_btn" onClick={() => onDelete(item.id)}>
                    <Icon name="delete" size={20} />
                </button>
            </td>
            <td>{item.company}</td>
            <td>{item.name}</td>
            <td>{item.additional}</td>
            <td>{item.street}</td>
            <td>{item.postalcode}</td>
            <td>{item.country}</td>
            <td>{item.iban}</td>
            <td>{item.bic}</td>
            <td>{item.bankname}</td>
            <td>{item.fax}</td>
            <td>{item.email}</td>
            <td>{item.birthday}</td>
        </tr>
    )

    return (
        <table className="table" >
            <thead>
                <tr>
                    <th></th>
                    <th>Company</th>
                    <th>Name</th>
                    <th>Additional</th>
                    <th>Street</th>
                    <th>Postal Code</th>
                    <th>Country</th>
                    <th>IBAN</th>
                    <th>BIC</th>
                    <th>Bank name</th>
                    <th>Fax</th>
                    <th>E-mail</th>
                    <th>Birthday</th>
                </tr>
            </thead>
            <tbody>
                {listItems}
            </tbody>
        </table >
    )
}

export default Table;