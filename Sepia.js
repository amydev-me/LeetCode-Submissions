function sepia(row, col, image){ 
    for (let i = 0; i < row; i++)
    {
        for (let j = 0; j < col; j++)
        {
          let sepiaRed = Math.round(.393 * image[i][j].rgb_red + .769 * image[i][j].rgb_green + .189 * image[i][j].rgb_blue);
          let sepiaGreen = Math.round(.349 * image[i][j].rgb_red + .686 * image[i][j].rgb_green + .168 * image[i][j].rgb_blue);
          let sepiaBlue = Math.round(.272 * image[i][j].rgb_red + .534 * image[i][j].rgb_green + .131 * image[i][j].rgb_blue);
          
          image[i][j].rgb_red = Math.round(sepiaRed);
          image[i][j].rgb_green = Math.round(sepiaGreen);
          image[i][j].rgb_blue = Math.round(sepiaBlue);
          
          if (sepiaRed > 255)
          {
              image[i][j].rgb_red = 255;
          }
          
          if (sepiaGreen > 255)
          {
              image[i][j].rgb_green = 255;
          }
          
          if (sepiaBlue > 255)
          {
              image[i][j].rgb_blue = 255;
          }
        }
    }  
 }
 
sepia(3, 3, [
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
              ]);
