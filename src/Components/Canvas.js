import { useOnDraw } from "./Hooks";
import React from "react";
import toast from "react-hot-toast";

const Canvas = () => {
  const { setCanvasRef, onCanvasMouseDown } = useOnDraw(onDraw);

  function onDraw(ctx, point, prevPoint) {
    drawLine(prevPoint, point, ctx, "#000000", 5);
  }

  function drawLine(start, end, ctx, color, width) {
    start = start ?? end;
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.strokeStyle = color;
    ctx.moveTo(start.x, start.y);
    ctx.lineTo(end.x, end.y);
    ctx.stroke();

    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(start.x, start.y, 2, 0, 2 * Math.PI);
    ctx.fill();
  }

  function refreshPage() {
    window.location.reload(false);
  }

  function download() {
    toast.success("Download Complited!");
    var download = document.getElementById("download");
    var image = document
      .getElementById("myCanvas")
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    download.setAttribute("href", image);
  }

  return (
    <div className="pb-5">
      <div className="App">
        <canvas
          id="myCanvas"
          width={"800px"}
          height={"500px"}
          onMouseDown={onCanvasMouseDown}
          style={canvasStyle}
          ref={setCanvasRef}
        />
      </div>
      <div className="flex justify-center gap-4">
        {/* <button className="btn btn-warning" onClick={refreshPage}>
          Reset All
        </button> */}
        <button className="btn btn-warning" onClick={refreshPage}>
          <a
            href="javascript:window.top.location.reload(true)"
            class="continue"
          >
            Reset All
          </a>
        </button>

        <a
          className="btn btn-info"
          id="download"
          download="MubinImage.png"
          onClick={download}
        >
          Download
        </a>
      </div>
    </div>
  );
};

export default Canvas;

const canvasStyle = {
  border: "5px solid blue",
};
