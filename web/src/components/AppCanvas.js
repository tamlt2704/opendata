import React, { useRef, useEffect, useState } from 'react';
import { useWindowDimentions } from './hooks';

function AppCanvas() {
    const {width, height} = useWindowDimentions();
    const canvasRef = useRef(null)
    const [raf, setRaf] = useState(null)
    const createArray = (length) => [...Array(length)];
    const nbStars = 50;

    const generateStars = (nbStar, width, height) => {
        return createArray(nbStar).map(i => (
            {
                x: Math.random() * width,
                y: Math.random() * height,
                radius: Math.random() * 3,
            } 
        ))
    }

    const [stars, setStars] = useState([]);
    let lastMove = 0;
    let speed = 500;

    const drawStars = (t) => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, width, height)

        ctx.fillStyle = 'white';
        for (let star of stars) {
            const dx = Math.random()
            const dy = Math.random()
            star.x += dx 
            star.y += dy
            star.x = star.x > width ? 0: star.x;
            star.y = star.y > height ? 0: star.y;
            const {x, y, radius} = star;
            ctx.beginPath();
            ctx.arc(x, y, radius, 0, 2 * Math.PI);
            ctx.fill();
        }
        lastMove = t;
        // setRaf(requestAnimationFrame(drawStars));
    }

    useEffect(() => {
        console.log( 'page width height updated' );
        setStars(generateStars(nbStars, width, height))
    }, [width, height]);

    useEffect(() => {
        console.log( 'draw stars' );
       drawStars() 
       return () => cancelAnimationFrame(raf)
    }, [stars])
    
    const onMouseMoveHandle = (e) => {
        // console.log( e.clientX, e.clientY )
    }

    return (
        <div style={{position: "relative"}}>
            <canvas 
                ref={canvasRef}
                width={width} 
                height={0.3 * height}
                onMouseMove={onMouseMoveHandle}
                style={{position: "absolute", top: "0px"}}
            >
            </canvas>
            <div style={{position: "absolute", top: 0.2*height/2, left: width / 3}} className="text-center">
                <div className="input-group mb-3">
                    <input type="text" className="form-control" />
                    <div className="btn  btn-secondary input-group-append">Search</div>
                </div>
                <div className="btn btn-success btn-small"> view all data</div>
            </div>
        </div>
    );
}

export default AppCanvas;
