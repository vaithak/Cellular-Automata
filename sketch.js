let grid, cellWidth=15, cellHeight=15;
let rows,cols;

function make2DArray(rows,cols)
{

	let arr = new Array(rows);
	for(let i=0;i<arr.length;i++)
		arr[i]=new Array(cols);

	return arr;
}

function initiate(grid)
{
	for(let i=0;i<grid.length;i++)
	{
		for(let j=0;j<grid[0].length;j++)
		{
      // 1 => ALIVE , 0 => DEAD
			if( (i==0) || (j==0) || (i==grid.length-1) || (j==grid[0].length-1))
				grid[i][j]=0;
			else
				grid[i][j]=floor(random(2));
		}
	}

	return grid;
}

function setup()
{
	createCanvas(windowWidth, windowHeight);

	rows = floor(height/(cellHeight));
	cols = floor(width/(cellWidth));
	grid = make2DArray(rows, cols);

	grid = initiate(grid);
}

function draw()
{

	background(0);

	for(let i=0;i<grid.length;i++)
	{
		for(let j=0;j<grid[0].length;j++)
		{
			let x = j*cellWidth;
			let y = i*cellHeight;

			// BLACK => ALIVE , WHITE => DEAD
			if(grid[i][j]==0)
			{
				fill(255);
				rect(x,y,cellWidth,cellHeight);
			}

		}
	}

  // computation for next grid
	let next = make2DArray(rows,cols);

	for(let i=0;i<grid.length;i++)
	{
		for(let j=0;j<grid[0].length;j++)
		{
			if( (i==0) || (j==0) || (i==grid.length-1) || (j==grid[0].length-1))
				next[i][j]=0;
			else
			{
				let state = grid[i][j];
				let neighbors = countNeighbors(grid,i,j);

				if (state == 0 && neighbors == 3)
				{
        	next[i][j] = 1;
				}
        else if (state == 1 && (neighbors < 2 || neighbors > 3))
				{
        	next[i][j] = 0;
      	}
				else
				{
        	next[i][j] = state;
    		}

			}
		}
	}

	grid=next;

}

function countNeighbors(grid, x, y)
{
	let sum = 0;
	for (let i = -1; i < 2; i++) {
	  for (let j = -1; j < 2; j++) {
	    let col = (x + i + cols) % cols;
	    let row = (y + j + rows) % rows;
	    sum += grid[col][row];
	  }
	}
	sum -= grid[x][y];
	return sum;
}
