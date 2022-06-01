import React from "react";
import { useFormContext } from "react-hook-form";
import { TableDataRow } from "type";

import "../styles.css";

type FormData = TableDataRow;

const FormInvoiceAdress = (): React.ReactElement => {

    const {
        register,
        formState: { errors },
    } = useFormContext<FormData>();

    return (
        <div className='form'>
            <h2>Invoice Adress</h2>
            <label className="form_input" htmlFor="company">Company *
                <input {...register('company',
                    { required: true })} />
                <small className="input_error">{errors.company && <p>Введите данные</p>}</small>
            </label>

            <label className='form_input' htmlFor="name">Name *
                <input {...register('name',
                    { required: true })} />
                <small className="input_error">{errors.name && <p>Введите данные</p>}</small>
            </label>

            <label className='form_input' htmlFor="additional">Additional
                <input {...register('additional')} />
            </label>

            <label className='form_input' htmlFor="street">Street
                <input {...register('street')} />
            </label>

            <label className='form_input' htmlFor="postalcode">Postal Code
                <input {...register('postalcode')} />
            </label>

            <label className='form_input' htmlFor="country">Country
                <select {...register('country')} className="form_input_select">
                    <option value="England" className="form_input_option">England</option>
                    <option value="USA" className="form_input_option">USA</option>
                    <option value="Turkey" className="form_input_option">Turkey</option>
                    <option value="Spain" className="form_input_option">Spain</option>
                    <option value="Italy" className="form_input_option">Italy</option>
                </select>
            </label>
        </div >
    );
}

export default FormInvoiceAdress;

