import React from 'react';
import { withFormik } from 'formik';
import { Input, InputAdornment, TextareaAutosize, Button } from "@material-ui/core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
  title: {
    fontWeight: 700,
    margin: "0 0 20px",
    fontSize: "1.5em",
    color: "#84878d",
    fontFamily: "Roboto, Open Sans, sans-serif",
    lineHeight: "normal",
  },
  address: {
    display: "flex",
    flexDirection: "column",
    fontWeight: 400,
    fontSize: "15px",
    color: "#84878d",
    fontFamily: "Roboto, Open Sans, sans-serif",
    lineHeight: "normal",
    margin: "0px 0px 10px 27px",
  },
  communication: {
    fontWeight: 400,
    margin: "0px 0px 10px 20px",
    fontSize: "15px",
    color: "#ffaa3c",
    fontFamily: "Roboto, Open Sans, sans-serif",
    lineHeight: "normal",
  },
  buttonSend: {
    border: "none",
    background: "#ffaa3c",
    padding: "10px",
    borderRadius: "3px",
    color: "#92601e",
    boxShadow: "0 1px 1px rgba(0, 0, 0, 0.3)",
    transition: "0.3s ease",
    width: "200px",
    height: "40px",
    margin: "20px 0px 0px 0px",
  },
});


const Form = props => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleSubmit,
    handleBlur
  } = props;

  console.log(touched)

  const isErrors = !!(Object.keys(errors).length)
  const classes = useStyles();


  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column" }}>
      <h2  className={classes.title}>Contact</h2>
      <div style={{display: "flex"}}>
        <FontAwesomeIcon size="2x" color="#ffb14b" icon={["fas", "map-marker-alt"]}></FontAwesomeIcon>
          <div className={classes.address}>
            <p style={{margin: "0px 0px 0px 0px"}}>Company name. INC</p> 
            <p style={{margin: "0px 0px 0px 0px"}}>550 Avenue Street, New york</p>
          </div>
        </div>
        <div style={{display: "flex"}}>
          <FontAwesomeIcon size="2x" color="#ffb14b" icon={["fas", "mobile-alt"]}></FontAwesomeIcon>
          <div className={classes.communication} style={{margin: "0px 0px 10px 32px"}}>
            +1 590 912 831
          </div>
        </div>
        <div style={{display: "flex", margin: "10px 0px 0px 0px"}}>
          <FontAwesomeIcon size="2x" color="#ffb14b" icon={["fas", "envelope"]}></FontAwesomeIcon>
          <div className={classes.communication}>
            contact@companyname.com
          </div>  
        </div>

      <Input
        type="name"
        onChange={handleChange}
        value={values.name}
        name="name"
        onBlur={handleBlur}
        startAdornment={
          <InputAdornment position="start">
            <FontAwesomeIcon icon={["far", "user"]}></FontAwesomeIcon>
          </InputAdornment>
        }
      />
      <Input
        type="email"
        onChange={handleChange}
        value={values.email}
        name="email"
        onBlur={handleBlur}
        startAdornment={
          <InputAdornment position="start">
            <FontAwesomeIcon icon={["fas", "envelope"]}></FontAwesomeIcon>
          </InputAdornment>
        }
      />
      {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
      <Input
        type="url"
        onChange={handleChange}
        value={values.url}
        onBlur={handleBlur}
        name="url"
        startAdornment={
          <InputAdornment position="start">
            <FontAwesomeIcon icon={["fas", "globe"]}></FontAwesomeIcon>
          </InputAdornment>
        }
      />

      <TextareaAutosize onBlur={handleBlur} name="message" onChange={handleChange} value={values.message} aria-label="minimum height" rowsMin={3} placeholder="Minimum 3 rows" />
      <Button className={classes.buttonSend} onClick={handleSubmit} disabled={isErrors && touched.email}> Send message </Button>
    </form>
  );
};

const MyEnhancedForm = withFormik({
  mapPropsToValues: (props) => {
    return {
      name: "",
      email: props.email,
      url: "",
      message: ""
    }
  },
  handleSubmit: (values, { setSubmitting }) => {
    console.log(values)
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },
  validate: (values, props) => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }
      return errors;
  },
  mapPropsToErrors: (props) => {
    const errors = {};
    if (!props.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(props.email)) {
        errors.email = 'Invalid email address';
      }
      return errors
  },
  displayName: 'BasicForm',
})(Form);

export default MyEnhancedForm
