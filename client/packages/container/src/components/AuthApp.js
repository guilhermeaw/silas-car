import React, { useRef, useEffect } from 'react';
import { mount } from 'auth/AuthApp';

export default () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  });

  return <div ref={ref}></div>
}
