import React, { useState, useId } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { TableDataRow } from "type";

import { addInfo } from "../../redux/tableSlice";
import FormBankData from "./FormBankData";
import FormContact from "./FormContact";
import FormInvoiceAdress from "./FormInvoiceAdress";

type FormData = TableDataRow;

type Props = {
    closeModal: () => void,
};

const MultiStepForm = ({ closeModal }: Props): React.ReactElement => {
    const dispatch = useDispatch();
    const id = useId();

    const onSubmit = (data: FormData) => {
        dispatch(addInfo({ ...data, id: id }))
        closeModal();
    };

    const stepsCount = 3;
    const [activeStep, setActiveStep] = useState(1);

    const methods = useForm<FormData>({
        shouldUnregister: false,
        // shouldFocusError: true,
        defaultValues: {
            country: ""
        },
        mode: 'onChange'
    });

    const handleNext = async () => {
        const isStepValid = await methods.trigger();
        if (isStepValid) setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handlePrev = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <FormProvider {...methods}>
            <form className="form_container" onSubmit={methods.handleSubmit(onSubmit)}>
                <div>
                    {activeStep === 1 && <FormInvoiceAdress />}
                    {activeStep === 2 && <FormBankData />}
                    {activeStep === 3 && <FormContact />}
                </div>

                <div className="form_btn_group">
                    <button className="form_btn" onClick={closeModal}>Cancel</button>

                    {activeStep > 0 && (
                        <button className="form_btn" onClick={handlePrev} type="button" value="Previous">Previous</button>
                    )}

                    {activeStep !== stepsCount && (
                        <button className="form_btn" onClick={handleNext} type="button" value="Next">Next</button>
                    )}

                    {activeStep === stepsCount && (
                        <button className="form_btn" type="submit" value="Save">Save</button>
                    )}
                </div>
            </form>
        </FormProvider>
    );
}

export default MultiStepForm;
