import React from 'react';

export default function Button({ cn, action, children }) {
  return (
    <button className={cn} onClick={action}>
      {children}
    </button>
  );
}
