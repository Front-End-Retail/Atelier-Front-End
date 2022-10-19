import { useState } from 'react';

const UseReviewModal = () => {
  const [visible, setVisible] = useState(false);
  function toggle() {
    setVisible(!visible);
  }
  return { toggle, visible }
};

export default UseReviewModal;