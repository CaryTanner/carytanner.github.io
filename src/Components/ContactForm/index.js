import React from 'react'
import {Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, Button} from '@material-ui/core'

export default function ContactForm({openContactForm, closeContactForm, isContactFormOpen}){

    
    return(
        <>
        <Dialog open={isContactFormOpen} onClose={closeContactForm} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={closeContactForm} color="primary">
            Cancel
          </Button>
          <Button onClick={closeContactForm} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
      </>
    )
}