import { useState } from 'react';

const useImageModal = () => {
  const [imageVisibility, setImageVisibility] = useState(false);
  function toggleImage() {
    setImageVisibility(!imageVisibility);
  }
  return { toggleImage, imageVisibility }
};

export default useImageModal;