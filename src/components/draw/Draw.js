
import {useOnDraw} from "../hooks/Hook";
import "./Draw.scss";

export default function Draw (){
    const {onMouseDown, setCanvasRef} = useOnDraw(onDraw);
   
    function onDraw(ctx, point, prevPoint, hue) {
      drawLine(prevPoint, point, ctx, hue);
    }

    function drawLine(start, end, ctx, hue) {
      start = start ?? end;
      ctx.beginPath();
      ctx.lineWidth = hue;
      ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
      ctx.moveTo(start.x, start.y);
      ctx.lineTo(end.x, end.y);
      ctx.stroke();
      ctx.fillStyle = `hsl(${hue}, 100%, 50%)`;
      ctx.beginPath();
      ctx.arc(start.x, start.y, 2, 0, 2 * Math.PI);
      ctx.fill();
      ctx.lineJoin = "round";
      ctx.lineCap = "round";
    }

    return (
      <>
        <canvas
          width={"900"}
          height={"500"}
          ref={setCanvasRef}
          onMouseDown={onMouseDown}
          className="Draw__canvas"
        />
      </>
    );
}

