
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[3],
    padding: theme.spacing(2, 4, 3),
    height: '500px',
    width: '800px'
  },
}));

const Modaly = ({ handleClose, open, trailer }) => {
  const classes = useStyles();
  console.log(trailer);
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <iframe src={trailer.data.max} style={{ margin: ' 0 0 20px -32px' }} width="900" height="500" >
            
          </iframe>

        </Fade>
      </Modal>
    </div>
  );
}

export default Modaly
