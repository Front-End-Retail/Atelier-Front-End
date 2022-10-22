import { useState } from 'react';

const useReviewModal = () => {
  const [visible, setVisible] = useState(false);
  function toggle() {
    setVisible(!visible);
  }
  return { toggle, visible }
};

export default useReviewModal;