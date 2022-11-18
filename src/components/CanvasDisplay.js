import React, {useRef, useEffect} from 'react'

const Canvas = props => {
  
  //console.log(props.layout);

    //use references for accessability in other components.
    const canvasRef = useRef('lightbulbCanvas');

    const draw = canvas => {
      const ctx = canvas.getContext('2d');
        
     


        //calculate & draw layout
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 2;

        
         ctx.beginPath();



        //props.layout[0].length


        ctx.moveTo(30, 50); // Move the pen to (30, 50)
        ctx.lineTo(150, 100); // Draw a line to (150, 100)

        ctx.moveTo(80, 100); // Move the pen to (30, 50)
        ctx.lineTo(200, 150); // Draw a line to (150, 100)

        ctx.stroke(); // Render the path


        ctx.stroke(); // Render the path


        //draw lightbulbs 
        
        ctx.beginPath()
        ctx.fillStyle = 'yellow';
        //ctx.moveTo(50, 100)
        ctx.arc(50, 100, 15, 0, 2*Math.PI);
        ctx.fill();

       

        //In-canvas text positioning.
        ctx.beginPath();
        ctx.font = "25px arial";
        ctx.fillStyle = '#464646';
        ctx.fillText('Room Layout: \n'+props.layout.toString(), 98, 52, 200)
        ctx.fillStyle = 'white';
        ctx.fillText('Room Layout: \n'+props.layout.toString(), 100, 50, 200)

      }

    
      
    //called only after component is mounted and canvas context is accessible.
    useEffect(() => {
        const canvas = canvasRef.current;
        
        
        const context = canvas.getContext('2d');

        //setting size and initial background fill.
        canvas.width = 450;
        canvas.height = 250;
        context.fillStyle = 'black';
        context.fillRect(0, 0, context.canvas.width, context.canvas.height);
        canvas.border = "solid 10px white";

        //run the draw function 
        draw(canvas);
      }, [draw])
      
      return <canvas ref={canvasRef} {...props}/>

//return <canvas ref={canvasRef} style="border:7px solid black; border-radius:20; width:250px: height:250px;" {...props}/>
}

export default Canvas