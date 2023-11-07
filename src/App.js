import { ReactSketchCanvas } from "react-sketch-canvas";
import { React, createRef, useEffect, useState } from "react";
import "./App.css";
import hand from "./images/icons8-hand-50 (1).png";
import pencil from "./images/icons8-pencil-48.png";
import marker from "./images/icons8-marker-pen-50.png";
import eraser from "./images/icons8-eraser-50.png";
import tick from "./images/icons8-tick-48.png";
import undo from "./images/icons8-undo-64.png";
import redo from "./images/icons8-redo-64.png";
import download from "./images/icons8-download-64.png";
function App() {
  const [color, setColor] = useState("black");
  const [size, setSize] = useState(3);
  const [cid, setCid] = useState(7);
  const [sid, setSid] = useState(1);
  const [actcid, setActcid] = useState(7);
  const [actsid, setActsid] = useState(1);
  const [style, setStyle] = useState({ cursor: "crosshair" });

  const ColorOutline = () => {
    const u = document.getElementById("c" + actcid).style;
    u.outline = "none";
    const v = document.getElementById("c" + cid).style;
    v.outline = "1px solid " + color;
    v.outlineOffset = "1px";
    setActcid(cid);
  };
  const SizeOutline = () => {
    const u = document.getElementById("s" + actsid).style;
    u.outline = "none";
    const v = document.getElementById("s" + sid).style;
    v.outline = "1px solid black";
    v.outlineOffset = "1px";
    setActsid(sid);
  };
  useEffect(ColorOutline, [color]);
  useEffect(SizeOutline, [size]);
  const canvasRef = createRef();
  return (
    // whole page
    <div
      style={{
        height: "100vh",
        width: "100vw",
      }}
    >
      {/* box in middle */}
      {/* <div> */}
      {/* for start and end div */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderBottom: "1px solid #D9D9D9",
          padding: "0 25px",
        }}
      >
        {/* for start div */}
        <div
          style={{
            display: "flex",
            margin: "20px",
            gap: "10px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* 1st in start div */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "solid 1px #D9D9D9",
              borderRadius: "20px",
            }}
          >
            <img
              src={hand}
              style={{
                height: "20px",
                margin: "5px 5px 5px 10px",
              }}
              onClick={() => {
                setStyle({ cursor: `url(${hand}) 2 2, crosshair` });
                if (canvasRef.current) {
                  canvasRef.current.eraseMode(false);
                }
              }}
            ></img>
            <img
              src={pencil}
              style={{
                height: "20px",
                margin: "5px",
              }}
              onClick={() => {
                setStyle({ cursor: `url(${pencil}) 2 2, crosshair` });
                if (canvasRef.current) {
                  canvasRef.current.eraseMode(false);
                }
                setSize(3);
                setColor("black");
              }}
            ></img>
            <img
              src={marker}
              style={{
                height: "20px",
                margin: "5px",
              }}
              onClick={() => {
                setStyle({ cursor: `url(${marker}) 2 2, crosshair` });
                if (canvasRef.current) {
                  canvasRef.current.eraseMode(false);
                }
                setSize(15);
                setColor("#FF5757");
              }}
            ></img>
            <img
              id="eraserid"
              src={eraser}
              style={{
                height: "20px",
                margin: "5px 10px 5px 5px",
              }}
              onClick={() => {
                setStyle({ cursor: `url(${eraser}) 2 2, crosshair` });
                if (canvasRef.current) {
                  canvasRef.current.eraseMode(true);
                }
              }}
            ></img>
          </div>
          {/* 2nd in start div */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "solid 1px #D9D9D9",
              borderRadius: "20px",
              padding: "2px 1px",
            }}
          >
            <div
              id="s1"
              style={{
                backgroundColor: "black",
                height: "5px",
                width: "5px",
                margin: "5px 5px 5px 10px",
              }}
              onClick={() => {
                setSid(1);
                setSize(3);
              }}
            ></div>
            <div
              id="s2"
              style={{
                backgroundColor: "black",
                height: "10px",
                width: "10px",
                margin: "5px",
              }}
              onClick={() => {
                setSid(2);
                setSize(5);
              }}
            ></div>
            <div
              id="s3"
              style={{
                backgroundColor: "black",
                height: "15px",
                width: "15px",
                margin: "5px 20px 5px 5px",
              }}
              onClick={() => {
                setSid(3);
                setSize(9);
              }}
            ></div>
            <div
              id="c1"
              style={{
                backgroundColor: "#FF5757",
                borderRadius: "20px",
                height: "15px",
                width: "15px",
                margin: "5px",
              }}
              onClick={() => {
                setCid(1);
                setColor("#FF5757");
              }}
            ></div>
            <div
              id="c2"
              style={{
                backgroundColor: "#7ED957",
                borderRadius: "20px",
                height: "15px",
                width: "15px",
                margin: "5px",
              }}
              onClick={() => {
                setCid(2);
                setColor("#7ED957");
              }}
            ></div>
            <div
              id="c3"
              style={{
                backgroundColor: "#FFDE59",
                borderRadius: "20px",
                height: "15px",
                width: "15px",
                margin: "5px",
              }}
              onClick={() => {
                setCid(3);
                setColor("#FFDE59");
              }}
            ></div>
            <div
              id="c4"
              style={{
                backgroundColor: "#5271FF",
                borderRadius: "20px",
                height: "15px",
                width: "15px",
                margin: "5px",
              }}
              onClick={() => {
                setCid(4);
                setColor("#5271FF");
              }}
            ></div>
            <div
              id="c5"
              style={{
                backgroundColor: "#CB6CE6",
                borderRadius: "20px",
                height: "15px",
                width: "15px",
                margin: "5px",
              }}
              onClick={() => {
                setCid(5);
                setColor("#CB6CE6");
              }}
            ></div>
            <div
              id="c6"
              style={{
                backgroundColor: "#FF914D",
                borderRadius: "20px",
                height: "15px",
                width: "15px",
                margin: "5px",
              }}
              onClick={() => {
                setCid(6);
                setColor("#FF914D");
              }}
            ></div>
            <div
              id="c7"
              style={{
                backgroundColor: "black",
                borderRadius: "20px",
                height: "15px",
                width: "15px",
                margin: "5px 10px 5px 5px",
              }}
              onClick={() => {
                setCid(7);
                setColor("black");
              }}
            ></div>
          </div>
          {/* 3rd in start div */}

          <p
            style={{
              fontSize: "10px",
              color: "#A6A6A6",
              cursor: "pointer",
            }}
            onClick={() => {
              if (canvasRef.current) {
                canvasRef.current.resetCanvas();
              }
            }}
          >
            Clear
          </p>
        </div>
        {/* for end div */}

        <div
          style={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "end",
            gap: "10px",
            margin: "10px",
          }}
        >
          {/* 1st in end div */}
          <img src={tick} style={{ height: "20px" }}></img>
          {/* 2nd in end div */}
          <p
            style={{
              fontSize: "10px",
              color: "#A6A6A6",
            }}
          >
            All changes saved
          </p>
          {/* 3rd in end div */}
          <img
            src={undo}
            style={{ height: "20px" }}
            onClick={() => {
              if (canvasRef.current) {
                canvasRef.current.undo();
              }
            }}
          ></img>
          {/* 4th in end div */}
          <img
            src={redo}
            style={{ height: "20px" }}
            onClick={() => {
              if (canvasRef.current) {
                canvasRef.current.redo();
              }
            }}
          ></img>
          {/* 5th in end div */}
          <img src={download} style={{ height: "20px" }}></img>
          {/* 6th in end div */}
          <div
            style={{
              backgroundColor: "#8C52FF",
              fontSize: "12px",
              padding: "7px 40px",
              borderRadius: "20px",
              color: "white",
            }}
          >
            Save
          </div>
        </div>
      </div>
      <div style={{ height: "87vh" }}>
        <ReactSketchCanvas
          id="canvas"
          ref={canvasRef}
          strokeColor={color}
          strokeWidth={size}
          style={style}
        />
      </div>
      {/* </div> */}
    </div>
  );
}

export default App;
