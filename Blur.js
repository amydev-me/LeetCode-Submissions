function blur(row, col, image){
   
    // Deep Copy
    let temp = JSON.parse(JSON.stringify(image));
    for (let i = 0; i < row; i++)
    {
        for (let j = 0; j < col; j++)
        {
            let red = 0, green = 0, blue = 0, count = 0;    
            for (let y = i - 1; y <= i + 1; ++y)
            {
                if (0 <= y && y < row)
                {
                    for (let x = j - 1; x <= j + 1; ++x)
                    {
                        if (0 <= x && x < col)
                        {
                            red += image[y][x].rgb_red; 
                            green += image[y][x].rgb_green;
                            blue += image[y][x].rgb_blue;
                            ++count;
                        }
                    }
                }
            }
           
            temp[i][j].rgb_red   = Math.floor((red + count / 2) / count);
            temp[i][j].rgb_green = Math.floor((green + count / 2) / count);
            temp[i][j].rgb_blue  = Math.floor((blue + count / 2) / count);
        }
    } 
    console.log(temp)
 }
 
blur(3, 3, [
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
