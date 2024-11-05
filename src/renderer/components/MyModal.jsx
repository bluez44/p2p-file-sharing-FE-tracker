import { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Icon } from '@iconify/react';
import axios from '../api';

function MyModal({ magnet_text }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [isCopy, setIsCopy] = useState(false);

  const [res, setRes] = useState('')

  useEffect(() => {
    axios.get('/stat/torrents/magnet', {
      params: {
        magnet_text: magnet_text
      }
    }).then((response) => {
      console.log(response.data);
      setRes(response.data);
    }).catch((error) => {
      console.error('Lỗi khi tải thể têp:', error);
    })
  })

  return (
    <>
      <div className='more-info d-flex justify-content-center align-items-center' onClick={handleShow}>
          <Icon icon="ic:round-search" />
      </div>

      <Modal fullscreen={true} show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Magnet text: {magnet_text}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p className='long-text'>{res}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant={isCopy ? 'success' : 'primary'} onClick={() => {navigator.clipboard.writeText(res), setIsCopy(true)}}>{isCopy? 'Đã copy' : 'Copy torrent'}</Button>
          <Button variant="secondary" onClick={handleClose}>
            Đóng
          </Button>

        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MyModal;