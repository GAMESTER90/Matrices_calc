import React, {useRef, useEffect} from 'react'

const Canvas = props => {

    //use references for accessability in other components.
    const canvasRef = useRef('lightbulbCanvas');

    const draw = ctx => {
        ctx.fillStyle = 'yellow';
        ctx.beginPath();
        ctx.arc(50, 100, 15, 0, 2*Math.PI);
        ctx.fill();

      }

    
      
    //called only after component is mounted and canvas context is accessible.
    useEffect(() => {
        const canvas = canvasRef.current;
        
        
        const context = canvas.getContext('2d');

        //setting size and initial background fill.
        canvas.width = 450;
        canvas.height = 250;
        context.fillStyle = '#a1a1a1';
        context.fillRect(0, 0, context.canvas.width, context.canvas.height);
        canvas.border = "solid 10px white";

        //run the draw function 
        draw(context);
      }, [])
      
      return <canvas ref={canvasRef} {...props}/>

//return <canvas ref={canvasRef} style="border:7px solid black; border-radius:20; width:250px: height:250px;" {...props}/>
}

export default Canvas