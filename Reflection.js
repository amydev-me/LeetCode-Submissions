function reflection(){
  let row = 3;
  let col = 3;
  let image = [
                [
                  {
                    rgb_red : 10,
                    rgb_green : 20, 
                    rgb_blue : 30
                  },
                  {
                    rgb_red : 40,
                    rgb_green : 50, 
                    rgb_blue : 60
                  },
                  {
                    rgb_red : 70,
                    rgb_green : 80, 
                    rgb_blue : 90
                  }  
                ],
                [
                  {
                    rgb_red : 110,
                    rgb_green : 130, 
                    rgb_blue : 140
                  },
                  {
                    rgb_red : 120,
                    rgb_green : 140, 
                    rgb_blue : 150
                  } ,
                  {
                    rgb_red : 130,
                    rgb_green : 150, 
                    rgb_blue : 160
                  } 
                ],
                [
                  {
                    rgb_red : 200,
                    rgb_green : 210, 
                    rgb_blue : 220
                  },
                  {
                    rgb_red : 220,
                    rgb_green : 230, 
                    rgb_blue : 240
                  } ,
                  {
                    rgb_red : 240,
                    rgb_green : 250, 
                    rgb_blue : 255
                  }    
                ]
              ]; 
  
  for (let i = 0; i < row; i++){
    let start = 0;
    let end = col - 1; 
    for( let j = 0; j < Math.floor(col/2); j++){
        let r = image[i][j].rgb_red;
        let g = image[i][j].rgb_green;
        let b = image[i][j].rgb_blue;
        image[i][j].rgb_red   = image[i][end].rgb_red;
        image[i][j].rgb_green = image[i][end].rgb_green;
        image[i][j].rgb_blue = image[i][end].rgb_blue;
        
        image[i][end].rgb_red   = r;
        image[i][end].rgb_green = g;
        image[i][end].rgb_blue  = b;
        end--;
    }
  } 
 }
 
reflection();
