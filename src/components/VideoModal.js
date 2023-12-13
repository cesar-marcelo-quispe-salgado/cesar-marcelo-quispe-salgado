// src/components/VideoModal.js
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const VideoModal = ({ show, handleClose }) => {
  // URL del video por defecto
  const defaultVideoURL = 'https://www.youtube.com/embed/WbI1ncuyWbk';

  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Danzas Bolivianas</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <iframe
          title="Video"
          width="100%"
          height="400px"
          src={defaultVideoURL}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default VideoModal;