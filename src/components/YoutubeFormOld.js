import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup'


const YoutubeFormOld = () => {

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

    const formik = useFormik({
        initialValues,
        onSubmit,
        // validate
        validationSchema
    });
    // this formik object helps
    // 1. Managing the form state => form state is an js object, which have form field's attributes and values
    // 2. Hnadling form submission
    // 3. Validation and error messages

    // console.log('form errors', formik.errors);
    console.log('visited fields', formik.touched);

    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <div className="form-control">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                    />
                    {formik.touched.name && formik.errors.name ? <div className='error'>{formik.errors.name}</div> : null}
                </div>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email ? <div className='error'>{formik.errors.email}</div> : null}
                </div>
                <div className="form-control">
                    <label htmlFor="channel">Channel</label>
                    <input
                        type="text"
                        id="channel"
                        name="channel"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.channel}
                    />
                    {formik.touched.channel && formik.errors.channel ? <div className='error'>{formik.errors.channel}</div> : null}
                </div>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default YoutubeFormOld;


