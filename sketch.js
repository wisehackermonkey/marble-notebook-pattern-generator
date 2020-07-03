let step = 0.06;
let p_size = 5;
let stepSlider;

let genButton;

let switch_modes;

let colors = [
    "WHITE",
    "SILVER",
    "GRAY",
    "BLACK",
    "RED",
    "MAROON",
    "YELLOW",
    "OLIVE",
    "LIME",
    "GREEN",
    "AQUA",
    "TEAL",
    "BLUE",
    "NAVY",
    "FUCHSIA",
    "PURPLE",
];
let color_start = "violet";
let color_end = "yellow";

let is_color_mode = true;

function setup() {
    createCanvas(400, 400);
    noStroke();
    frameRate(60);
    stepSlider = createSlider(0, 1000, 78, 1);
    stepSlider.position(width / 2, height + 10);

    genButton = createButton("Change Color");
    genButton.position(width - 50, height + 10);
    genButton.mousePressed(render_marble);

    switch_modes = createButton("Toggle Color");
    switch_modes.position(50, height + 10);
    switch_modes.mousePressed(toggle_color_mode);
    if (is_color_mode) {
        render_marble();
    } else {
        lerp_color_demp()
    }}

function draw() {
    // print(step);
    // if (frameCount % 3 == 0) {
        if (is_color_mode) {
            render_marble();
        } else {
            lerp_color_demp()
        }
    // }
    popup("To change from black/white mode to Color to mode\nclick toggle button ", 4);
}

function toggle_color_mode() {
    is_color_mode = !is_color_mode;
}
function render_marble() {
    push()
    step = map(stepSlider.value(), 0, 255, 0, 0.389);
    for (let x = 0; x < width; x += p_size) {
        for (let y = 0; y < height; y += p_size) {
            let c = 255 * noise(step * x, step * y);
            if (c > 100) {
                c = 0;
            } else if (c > 20) {
                c = 255;
            }
            // let lerped = color_lerp(c, color_start, color_end);
            fill(c);
            rect(x, y, p_size, p_size);
        }
    }
    pop()
}

function lerp_color_demp() {
    push()
    step = map(stepSlider.value(), 0, 255, 0, 0.389);
    for (let x = 0; x < width; x += p_size) {
        for (let y = 0; y < height; y += p_size) {
            let c = 255 * noise(step * x, step * y);

            let lerped = color_lerp(c, color_start, color_end);
            fill(lerped);
            rect(x, y, p_size, p_size);
        }
    }
    pop()
}
function color_lerp(value, start, end) {
    value = map(value, 0, 255, 0.1, 0.9);
    from = color(start);
    to = color(end);
    mixed_color = lerpColor(from, to, value); // map(mouseX, 0, width, 0.1, 0.9));
    return mixed_color;
}

function mousePressed() {
    color_start = colors[floor(random(0, colors.length))];
    color_end = colors[floor(random(0, colors.length))];

    if (color_start === color_end) {
        while (color_start !== color_end) {
            color_end = colors[floor(random(0, colors.length))];
        }
    }
}
