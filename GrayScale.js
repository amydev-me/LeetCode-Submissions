function grayscale(row, col, image){ 
    for (let i = 0; i < row; i++)
    {
        for (let j = 0; j < col; j++)
        {
            let average  = Math.round((Math.round(image[i][j].rgb_red) + Math.round(image[i][j].rgb_green) + Math.round(image[i][j].rgb_blue)) / 3);
            image[i][j].rgb_red = average;
            image[i][j].rgb_green = average;
            image[i][j].rgb_blue = average;
        }
    } 
    console.log(image)
}
 
grayscale(3, 3, [
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
