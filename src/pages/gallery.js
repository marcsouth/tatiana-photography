import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { portraitImages } from '../utils/data';
import { useState } from 'react';

export default function Gallery() {
  const [openModal, setOpenModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  function openWindow(image) {
    setSelectedImage(image);
    setOpenModal(true);
  }

  function closeWindow() {
    setSelectedImage(null);
    setOpenModal(false);
  }

  let modalOpen = openModal ? 'openmodal' : null;

  return (
    <>
      <Navbar />
      <div id="demo-text">PORTRAIT</div>
      <div id="gallery" className="container-fluid">
        {portraitImages.map((image) => (
          <img
            src={image.src}
            key={image.id}
            className="img-responsive"
            onClick={() => openWindow(image)}
          />
        ))}
      </div>
      <div className={`modal ${modalOpen}`} onClick={closeWindow}>
        <div className="modalcontainer">
          {selectedImage && (
            <>
              <img src={selectedImage.src} alt={selectedImage.title} />
              <div>{selectedImage.title}</div>
              <div>{selectedImage.price}</div>
              <div>{selectedImage.size}</div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
