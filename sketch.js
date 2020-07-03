let step = 0.06
let p_size = 10
let stepSlider 

let genButton 
function setup() {
    createCanvas(400, 400);
  noStroke();
  frameRate(60)
  stepSlider = createSlider(0,1000, 336,1)
  stepSlider.position(width/2, height+10)

  genButton = createButton("Generate")
  genButton.position(width-50, height+10)
  genButton.mousePressed(render_marble)
  render_marble()
}

function draw() {
    
    print(step)
    if(frameCount%3==0){
    render_marble()
    }
}


function render_marble(){
    step = map(stepSlider.value(),0,1000,0,0.389)
    for (var x = 0; x < width; x+=1) {
        for (var y = 0; y < height; y+=1) {
            var c = 255 * noise(step * x, step * y);
  
          if(c > 100){
              c= 0
          }else{
              c=255
          }
            fill(c);
            rect(x, y, p_size, p_size);
        }		
      }
  
}