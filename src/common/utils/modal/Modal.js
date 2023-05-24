import React from 'react'
import ModalBox from 'react-modal'
import cusetomStyle from './cusetomStyle'
import { Button } from '@mui/material'
import Loader from '../Loader'
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
import { LoadingButton } from '@mui/lab';
const Modal = ({
  open = false,
  onClose,
  onSubmit,
  onDelete,
  isFooterShown=true,
  isDelete=false,
  submitTitle="Submit",
  title="Title",
  content,
  submitLoader=false,
  deleteLoader=false

}) => {
  return (
    <ModalBox isOpen={open} onRequestClose={onClose}
      style={cusetomStyle()}
    >
       <div className='container-fluide modal-headers'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='text-center'>{title}</h3>
            </div>
          </div>
        </div>
    
     <div className='modal-content'>
     {content}
     </div>
      
      {isFooterShown && (
        <div className='container-fluide modal-footer'>
          <div className='row'>
            <div className='col-12'>
              {
                isDelete && (
                  <LoadingButton
                 loading={deleteLoader} 
                 variant="contained"
                  size='small'
                   color='secondary'
                    onClick={onDelete} 
                    endIcon={<DeleteIcon />}> Delete</LoadingButton>
                )
              }
            
              <Button variant="contained" size='small' onClick={onClose}> Cancel</Button>
              
                 <LoadingButton
                 loading={submitLoader}
                 variant="contained"
                 color='success'
                 onClick={onSubmit}
                 size='small'
                 endIcon={<SendIcon />}
                 >
                 {submitTitle}
                 </LoadingButton>
            </div>
          </div>
        </div>
        )}
    </ModalBox>
  )
}

export default Modal