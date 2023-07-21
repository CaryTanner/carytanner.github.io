import React from 'react';
import { Popover, List, ListItem, ListItemText, ListItemIcon, Link, Snackbar } from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import copy from 'copy-to-clipboard';

export default function EmailPopover({ openPopover, emailPopAnchor, closeEmailPopover }) {
  const [openCopiedSnackbar, setOpenCopiedSnackbar] = React.useState(false);

  const copyAndOpenSnackbar = () => {
    copy('cary.landon@gmail.com');
    setOpenCopiedSnackbar(true);
    closeEmailPopover();
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenCopiedSnackbar(false);
  };

  return (
    <>
      <Popover
        open={openPopover}
        anchorEl={emailPopAnchor}
        onClose={closeEmailPopover}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
      >
        <List>
          <ListItem button onClick={closeEmailPopover}>
            <Link color="textPrimary" underline="none" href={`mailto:cary.landon@gmail.com?subject=Interested in hiring a web developer`}>
              <ListItemIcon>
                <MailIcon style={{ color: 'rgba(212,161,255,.9)' }} />
              </ListItemIcon>
            </Link>
            <Link color="textPrimary" underline="none" href={`mailto:cary.landon@gmail.com?subject=Interested in hiring a web developer`}>
              <ListItemText primary="cary.landon@gmail.com" />
            </Link>
          </ListItem>
          <ListItem button onClick={copyAndOpenSnackbar}>
            <ListItemIcon>
              <FileCopyIcon style={{ color: 'rgba(212,161,255,.9)' }} />
            </ListItemIcon>
            <ListItemText primary="Copy address" />
          </ListItem>
        </List>
      </Popover>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        open={openCopiedSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message="Copied: cary.landon@gmail.com"
      />
    </>
  );
}
