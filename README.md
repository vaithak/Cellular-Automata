# Cellular Automata  
Cellular Automata and Simulation of life using Conway's game.  

## Automata ( plural for Automaton)  
=> An automaton is a mechanical device which performs some function determined by a pre-defined set of instructions.  

=> There is something in Computer Science, called Theory of Automata, which seeks to mathematically describe what  
an automaton can and cannot do.  
=> This part of the science looks at the mathematical properties of all possible automatons (automata), and,  
among other things, defines what problems are computable and what problems are not computable using automata.  

### Cellular Automata  - By John Conway and Von Neumann  
Wiki Definition  
```
   => A cellular automaton consists of a regular grid of cells, each in one of a finite 
      number of states, such as on and off. The grid can be in any finite number of  
      dimensions. For each cell, a set of cells called its neighborhood is defined relative  
      to the specified cell. An initial state (time t = 0) is selected by assigning a state 
      for each cell. 
  
   => A new generation is created (advancing t by 1), according to some fixed rule 
      (generally, a mathematical function)[3] that determines the new state of each cell  
      in terms of the current state of the cell and the states of the cells in its neighborhood.  
   
   => Typically, the rule for updating the state of cells is the same for each cell and  
      does not change over time, and is applied to the whole grid simultaneously.
```  

### Elementary Cellular Automaton - By Stephen Wolfram  
From Wolfram Mathworld  
```
   => The simplest class of one-dimensional cellular automata.
   
   => Elementary cellular automata have two possible values for each cell (0 or 1),  
      and rules that depend only on nearest neighbor values. 
```  

![image](http://mathworld.wolfram.com/images/eps-gif/ElementaryCA30Rules_750.gif)   

```
   => As a result, the evolution of an elementary cellular automaton can completely
      be described by a table specifying the state a given cell will have in the next 
      generation based on the value of the cell to its left, the value the cell itself,
      and the value of the cell to its right. 
      
   => Since there are 2×2×2=2^3=8 possible binary states for the three cells neighboring 
      a given cell, there are a total of 2^8=256 elementary cellular automata, each of 
      which can be indexed with an 8-bit binary number. 
      For example, the table giving the evolution of rule 30 (30=00011110_2) is illustrated above. 
      
   => In this diagram, the possible values of the three neighboring cells are shown in the 
      top row of each panel, and the resulting value the central cell takes in the next 
      generation is shown below in the center.
```  

![image](https://utiny.herokuapp.com/gN)  

```
   The evolution of a one-dimensional cellular automaton can be illustrated by starting with
   the initial state (generation zero) in the first row, the first generation on the second row, 
   and so on. 
   
   For example, the figure above illustrated the first 20 generations of the rule 30 elementary 
   cellular automaton starting with a single black cell.
```  

### Game Of Life - 2D Cellular Automaton  
=> The game is a zero-player game, meaning that its evolution is determined by its initial state,  
requiring no further input.  

=> One interacts with the Game of Life by creating an initial configuration and observing how  
it evolves, or, for advanced players, by creating patterns with particular properties.  

**Rules:**  
=> The universe of the Game of Life is an infinite, two-dimensional orthogonal grid of square cells,  
each of which is in one of two possible states, alive or dead.  

=> Every cell interacts with its eight neighbours, which are the cells that are horizontally, vertically, or diagonally adjacent. At each step in time, the following transitions occur:  

1) Any live cell with fewer than two live neighbors dies, as if by under population.  
2) Any live cell with two or three live neighbors lives on to the next generation.  
3) Any live cell with more than three live neighbors dies, as if by overpopulation.  
4) Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.  

The initial pattern constitutes the seed of the system.  
The first generation is created by applying the above rules simultaneously to every cell in the seed;  
births and deaths occur simultaneously, and the discrete moment at which this happens is  
sometimes called a tick.  

Each generation is a pure function of the preceding one.  
The rules continue to be applied repeatedly to create further generations.  


[Game Of Life Demo](http://vaithak-cellular-automata.surge.sh)  
