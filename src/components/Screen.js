import React from 'react';

export default function Screen({ children }) {
  return <div className='screen'>{children}</div>;
}

// export default function Screen({ children, type }) {
//   switch (type) {
//     case 'g':
//       return <div className='screen'>{children}</div>;

//     case 'n':
//       return <div className='screen *other'>{children}</div>;

//     default:
//       return 'g';
//   }
// }
