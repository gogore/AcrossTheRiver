var canvas = document.getElementById('canvas'),
context = canvas.getContext('2d');

context.font = '38pt arial';
context.fillStyle= 'contflowerblue';
context.strokeStyle='blue';

context.fillText('hello Canvas', canvas.width/2 - 150,canvas.height/2 + 15);
context.strokeText('hello Canvas', canvas.width/2 - 150,canvas.height/2 + 15);
