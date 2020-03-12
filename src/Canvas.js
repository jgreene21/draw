import React from 'react';

class Draw extends React.Component{
state = {
  x = 0,
  y = 0,
  isDrawing = false,
}

const myCanvas = document.getElementById('myCanvas');
const context = myCanvas.getContext('2d');

const rect = myCanvas.getBoundingClientRect();

myCanvas.addEventListener('mousedown', e => {
  x= e.clientX - rect.left;
  y= e.clientY - rect.top;
  isDrawing = true;
});

myCanvas.addEventListener('mousemove', e => {
  if (isDrawing === true) {
    drawLine(context, x, y, e.clientX - rect.left, e.clientY - rect.top);
    x = e.clientX - rect.left;
    y = e.clientY - rect.top; 
  }
});

window.addEventListener('mouseup', e => {
  if (isDrawing === true ) {
    drawLine(context, x, y, e.clientX - rect.left, e.clientY - rect.top);
    x = 0;
    y = 0;
    isDrawing = false 
  }
}); 

function drawLine(context, x1, y1, x2, y2) {
  context.beginPath();
  context.strokeStyle = 'black';
  context.lineWidth = 2;
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.stroke();
  context.closePath();
}
}

