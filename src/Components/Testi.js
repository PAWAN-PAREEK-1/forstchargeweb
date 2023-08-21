// import React from 'react';

// function PercentageCircle({ percentages }) {
//   const radius = 50;
//   const circumference = 2 * Math.PI * radius;

//   const viewBoxPadding = 20; // Adjust this value for the desired padding

//   const circleWidth = radius * 2 + viewBoxPadding * 2;
//   const totalWidth = circleWidth * percentages.length;

//   const svgStyle = {
//     width: `${totalWidth}px`, // Adjust width to accommodate all circles
//     height: `${radius * 2 + viewBoxPadding * 2}px`, // Adjust height based on circle dimensions
//     display: 'flex',
//     justifyContent: 'space-between', // Distribute space between circles
//     alignItems: 'center', // Vertically align circles
//   };

//   return (
//     <svg viewBox={`0 0 ${"100%"} ${radius * 2 + viewBoxPadding * 2}`} style={svgStyle}>
//       {percentages.map((percentage, index) => {
//         const offset = circumference - (percentage / 100) * circumference;
//         return (
//           <g key={index}>
//             <circle
//               cx={index * circleWidth + radius + viewBoxPadding}
//               cy={radius + viewBoxPadding}
//               r={radius}
//               fill="#FFF" // Set background color
//               stroke="#58BB47"
//               filter="drop-shadow(0px 0px 40px rgba(0, 0, 0, 0.04))" // Apply drop shadow
//               strokeWidth="3"
//               strokeDasharray={circumference}
//               strokeDashoffset={offset}
//             />
//             <text className='cir-per' x={index * circleWidth + radius + viewBoxPadding} y={radius + viewBoxPadding} textAnchor="middle" dominantBaseline="middle">
//               {percentage}%
//             </text>
//           </g>
//         );
//       })}
//     </svg>
//   );
// }

// function App() {
//   const percentages = [50, 65, 85];

//   return (
//     <div className="App">
//       <div className="svgimg" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: 'auto' }}>
//         <PercentageCircle percentages={percentages}
//          />

//       </div>
//     </div>
//   );
// }

// export default App;
