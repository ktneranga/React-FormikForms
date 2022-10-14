import React from 'react';
// import { useFormik } from 'formik';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'

//Formik components , we are going to avoid useFormik hook


const YoutubeForm = () => {

    const initialValues = {
        name: '',
        email: '',
        channel: ''
    }

    const onSubmit = (values) => {
        console.log('form data', values)
    }

    const validate = values => {
        let errors = {};

        //values.name values.email values.errors

        if (!values.name) {
            errors.name = "Required"
        }

        if (!values.email) {
            errors.email = "Required"
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = "Invalid email"
        }

        if (!values.channel) {
            errors.channel = "Required"
        }

        return errors;
    }

    //pass an object with form fields to the Yup schema object 
    const validationSchema = Yup.object({
        name: Yup.string().required('Required'),
        email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
        channel: Yup.string().required('Required')
    });

    // const formik = useFormik({
    //     initialValues,
    //     onSubmit,
    //     // validate
    //     validationSchema
    // });


    // this formik object helps
    // 1. Managing the form state => form state is an js object, which have form field's attributes and values
    // 2. Hnadling form submission
    // 3. Validation and error messages

    // console.log('form errors', formik.errors);
    // console.log('visited fields', formik.touched);
    // console.log('values', formik.values);

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            <Form>
                <div className="form-control">
                    <label htmlFor="name">Name</label>
                    <Field
                        type="text"
                        id="name"
                        name="name"
                    />
                    <ErrorMessage name='name' />
                </div>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <Field
                        type="email"
                        id="email"
                        name="email"
                    />
                    <ErrorMessage name='email' />
                </div>
                <div className="form-control">
                    <label htmlFor="channel">Channel</label>
                    <Field
                        type="text"
                        id="channel"
                        name="channel"
                    />
                    <ErrorMessage name='channel' />
                </div>
                <button type="submit">Submit</button>
            </Form>
        </Formik>
    )
}

export default YoutubeForm;


