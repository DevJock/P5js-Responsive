/**
 * Responsive p5.js Template for quick Prototyping
 * Included with responsive HTML5 Template
 * The default behaviour of this Template is to fill the browser viewport or the container div. 
 * © 2018 Chiraag Bangera.
 */

let Width;
let Height;

let canvas;

function setup() {
    canvas = createCanvas(Width, Height);
    canvas.parent(document.getElementById("canvasHolder"));
    windowResized();
    textAlign(CENTER, CENTER);
    rectMode(CENTER);
    textSize(60);
}


function windowResized() {
    let w = document.getElementById("canvasHolder").offsetWidth;
    let h = document.getElementById("canvasHolder").offsetHeight;
    resizeCanvas(w, h);
    Width = canvas.width;
    Height = canvas.height;
}

function draw() {
    background(0);
    fill(255);
    text(Width + "x" + Height, Width / 2, Height / 2);
}