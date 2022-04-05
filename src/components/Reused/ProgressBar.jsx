import React from "react";

const ProgressBar = (props) => {
  const { bgcolor, completed } = props;

  const containerStyles = {
   height: 36,
   width: '100%',
   backgroundColor: "#e0e0de",
   margin: 0,
   position: 'fixed',
   top:0,
   zIndex: '10'

 }

 const fillerStyles = {
   height: '100%',
   width: `${completed}%`,
   backgroundColor: bgcolor,
   borderRadius: 'inherit',
   textAlign: 'right',
   transition: 'width 1s ease-in-out',
   display:'flex',
   alignItems: 'center',
   justifyContent: 'center',
 }

 const labelStyles = {
   padding: 5,
   color: 'white',
   fontWeight: 'bold',
   fontSize:"16px"
 }

  return (
   <div id='progress-bar' style={containerStyles}>
   <div style={fillerStyles}>
     <span style={labelStyles}>{`${completed}%`}</span>
   </div>
 </div>
  );
};

export default ProgressBar;