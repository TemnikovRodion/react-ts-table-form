import React from "react";
import { useFormContext } from "react-hook-form";
import { TableDataRow } from "type";

type FormData = TableDataRow;

const FormContact = (): React.ReactElement => {
    const {
        register,
    } = useFormContext<FormData>();

    return (
        <div className='form'>
            <h2>Contact</h2>
            <label className='form_input' htmlFor="fax">Fax
                <input {...register('fax')} />
            </label>

            <label className='form_input' htmlFor="email">E-mail
                <input type="email" {...register('email')} />
            </label>

            <label className='form_input' htmlFor="Birthday">Birthday
                <input type="date" {...register('birthday')} />
            </label>

            <label className='form_input' htmlFor="homepage">Homepage
                <input {...register('homepage')} />
            </label>
        </div>
    )
}

export default FormContact;
