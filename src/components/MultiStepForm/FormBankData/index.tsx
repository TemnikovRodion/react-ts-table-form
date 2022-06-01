import React from "react";
import { useFormContext } from "react-hook-form";
import { TableDataRow } from "type";

type FormData = TableDataRow;

const FormBankData = (): React.ReactElement => {

    const {
        register,
        formState: { errors },
    } = useFormContext<FormData>();

    return (
        <div className='form'>
            <h2>Bank Data</h2>
            <label className="form_input" htmlFor="iban">IBAN *
                <input {...register('iban', { required: true })} />
                <small className="input_error">{errors.iban && <p>Введите данные</p>}</small>
            </label>

            <label className='form_input' htmlFor="bic">BIC *
                <input {...register('bic', { required: true })} />
                <small className="input_error">{errors.bic && <p>Введите данные</p>}</small>
            </label>

            <label className='form_input' htmlFor="bankname">Bank name *
                <input {...register('bankname', { required: true })} />
                <small className="input_error">{errors.bankname && <p>Введите данные</p>}</small>
            </label>
        </div >
    );
}

export default FormBankData;