import { useFormik } from 'formik'
import * as Yup from "yup"



//valuesSchema Yup
const valuesSchemsa =  Yup.object({
    name: Yup.string().min(2).max(25).required("Please enter your name"),
    email: Yup.string().email().required("Please enter your email"),
    password:Yup.string().min(6).required("Please enter your password"),
    password2:Yup.string().required().oneOf([Yup.ref("password"),null],"Password don´t matched")
})



//initial values formik
const initialValues = {
    name:"",
    email:"",
    password:"",
    password2:""
}

const FormikYup = () => {       

  const {values, errors, handleBlur , handleChange, handleSubmit} = useFormik({
            initialValues: initialValues,
            validationSchema:valuesSchemsa,
            onSubmit:(values,action) => {
                console.log(values)
                action.resetForm();
            }   

    })



  return (

    <div className="container">´

    <form id="form" onSubmit={handleSubmit}>

        <h1>Registration</h1>
        <div className="input-field">
            <label htmlFor="name">Username</label>
            <input 
            id="name"
            name="name" 
            type="text"
             value={values.name}
              onChange={handleChange }
              onBlur={handleBlur}

               />
            <div className="error-message">{errors.name} </div>
        </div>

        <div className="input-field">
            <label htmlFor="email">Email</label>
            <input 
            id="email"
             name="email"
              type="text"
              value={values.email}
              onChange={handleChange }
              onBlur={handleBlur}/>
            <div className="error-message">{errors.email} </div>
        </div>

        <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
             id="password" 
             name="password"
              type="password"
              value={values.password}
              onChange={handleChange }
              onBlur={handleBlur}
               />
            <div className="error-message">{errors.password} </div>
        </div>

        <div className="input-field">
            <label htmlFor="password2">Confirm Password</label>
            <input 
            id="password2" 
            name="password2"
             type="password"
             value={values.password2}
             onChange={handleChange }
             onBlur={handleBlur}
             />
            <div className="error-message">{errors.password2} </div>
        </div>
        <button type="submit">Sign Up</button>
    </form>
</div>
  )
}

export default FormikYup