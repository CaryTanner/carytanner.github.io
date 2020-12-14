import React from "react";
import {
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  useMediaQuery,
  Snackbar
} from "@material-ui/core";
import styles from "./index.module.css";
import { Formik, Field, Form } from "formik";
import { TextField } from "formik-material-ui";

import * as Yup from "yup";
import { sendEmail } from "../../sendEmail";

export default function ContactForm({
  openContactForm,
  closeContactForm,
  isContactFormOpen,
}) {
    const isXs = useMediaQuery((theme) => theme.breakpoints.down("xs"));

   const [openSnackbar, setOpenSnackbar] = React.useState(false)
   
    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpenSnackbar(false);
      };

  const handleSubmit = (values) => {
    if(values){

        const{name, email, msg} = values 
        sendEmail({name, email, msg})
        
        closeContactForm()
        setOpenSnackbar(true)
        
    }


  };

  return (
    <>
      <Dialog
        open={isContactFormOpen}
        onClose={closeContactForm}
        aria-labelledby="form-dialog-title"
        fullScreen={isXs ? true : false}
        fullWidth="true"
        maxWidth="sm"
      >
        <Formik
          initialValues={{ name: "", email: "", msg: "" }}
          validationSchema={Yup.object({
            name: Yup.string()

              .max(40, "Must be 40 characters or less")

              .required("Please provide a name"),

            email: Yup.string()
              .email("Invalid email")
              .required("Please provide a contact address"),
            msg: Yup.string(),
          })}
          onSubmit={(values) => handleSubmit(values)}
        >
          <Form >
            <DialogTitle id="form-dialog-title" style={{ marginBottom: "-.5rem" }}>Let's get in touch!</DialogTitle>
            <DialogContent>
              
              <Grid container justify="space-between" spacing={2}>
                  <Grid item xs={6} >
                  <Field
                    component={TextField}
                    name="name"
                    type="text"
                    label="Name"
                    
                    fullWidth="true"
                    
                  />
                </Grid>
                <Grid item xs={6} >
                  <Field
                    component={TextField}
                    name="email"
                    type="email"
                    label="Email"
                    
                    fullWidth="true"
                    style={{ marginBottom: "1rem" }}
                  />
                  </Grid>
               </Grid>
                  <Field
                    component={TextField}
                    name="msg"
                    type="textarea"
                    label="Message"
                    
                    fullWidth="true"
                    
                    style={{ marginBottom: "1.5rem" }}
                  />
               
            </DialogContent>

            <DialogActions>
              <Button onClick={closeContactForm} color="primary">
                Cancel
              </Button>
              <Button type="submit" onClick={() => handleSubmit()} color="primary">
                Send
              </Button>
            </DialogActions>
          </Form>
        </Formik>
      </Dialog>

      <Snackbar
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'left',
    }}
    open={openSnackbar}
    autoHideDuration={3000}
    onClose={handleCloseSnackbar}
    message="Thanks! Message sent to cary.landon@gmail.com"
    
  />
    </>
  );
}
