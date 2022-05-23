import React, { useRef, useEffect } from 'react';

const MountComponent = ({ mount }) => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  });

  return <div ref={ref}></div>
}

export default MountComponent;
