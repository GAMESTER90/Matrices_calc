import React, {useRef, useEffect} from 'react'

const Canvas = props => {
  
  console.log(props.layout);

    //use references for accessability in other components.
    const canvasRef = useRef('lightbulbCanvas');

    const getLayoutLength = ()=>{
         let longestRow = 0;

        props.layout.forEach((row)=>{
            //ows.push(row.length);
            longestRow = (longestRow < row.length)?row.length:longestRow;
        })
        //console.log('There are '+props.layout.length+' rows')
        
        //console.log('longest row is '+longestRow+' cells long.')
        return longestRow;
    }

    const draw = canvas => {
      const ctx = canvas.getContext('2d');
        
         //Get layout info from data, save in object.
         let layout = {
          width: getLayoutLength(),
          height: props.layout.length};

        //calculate & draw room layout lines based on data from parent app component.
        //setting 2px white line canvas stroke styles.
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 2;
        const BreakError={};
         try{
         props.layout.forEach((_row,id)=>{
          if(id == props.layout.length-1)
              throw BreakError;
          ctx.beginPath();
          //console.log('drawing line '+id)
          ctx.moveTo(5, (5 + (((canvas.height - 10)/layout.height)*(id+1)))); // Move the pen to (30, 50)
          ctx.lineTo((5 + (canvas.width - 10)), (5 + (((canvas.height - 10)/layout.height)*(id+1)))); // Move the pen to (30, 50)
          ctx.stroke();
         });
        } catch (err) {if (err !== BreakError) throw err;}
        try{for (let i = 0; i < layout.width; i++) {
           if(i == layout.width-1)
               throw BreakError;
           ctx.beginPath();
           //console.log('drawing line '+id)
           ctx.moveTo((5+(((canvas.width-10)/layout.width)*(i+1))), (5));
           ctx.lineTo((5+(((canvas.width-10)/layout.width)*(i+1))), (5+(canvas.height-10)));
           ctx.stroke();
          }} catch (err) {if (err !== BreakError) throw err;}

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
      
      return <canvas style={{display:'inline-block'}} ref={canvasRef} {...props}/>

//return <canvas ref={canvasRef} style="border:7px solid black; border-radius:20; width:250px: height:250px;" {...props}/>
}

export default Canvas