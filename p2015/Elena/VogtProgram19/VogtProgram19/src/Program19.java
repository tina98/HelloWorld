
/**
 * 
 * @author Matthew Vogt
 * Program #19
 *
 */

import java.util.Scanner;
public class Program19 {

	public static void main(String[] args){
		Scanner input = new Scanner(System.in);
		int size=5, randRow=0, randCol=0, score = 0;
		boolean again = false,validEntry = false;
		String playAgain;
		
		do{//enter Main Game loop
			do{//enter correct entry loop
				System.out.println("How big do you want your game board to be? 1-100");		
				try {
					size = input.nextInt();//How big does the user want the board to be
				} catch (Exception e) {
					System.out.println("Invalid Entry. Your entry must be between 1 and 100.");
					input.nextLine();
					continue;
				}
				if (size <1 ){
					System.out.println("Invalid Entry. Your entry must be between 1 and 100.");
				}//Checks if It is less than one
				else if(size > 100){
					System.out.println("Invalid Entry. Your entry must be between 1 and 100.");
				}//Checks if entry is greater than 100
				else if (size <101 && size >0)
				{
					validEntry = true;
				}//Verifies number is valid
				else{
					System.out.println("Invalid Entry. Your entry must be between 1 and 100.");
				}//Catch all
				
			}while(!validEntry);
	
		
		
		SquareObject[][] gameBoard = new SquareObject[size][size];//creates a game board of user selected size
		
		
		System.out.println("Generating Game Board. Please wait.");
		gameBoard = resetBoard(gameBoard);
		
		for (int squareCount =1; squareCount <= (size+1)/2; squareCount++){//Keeps track of which square you are on
			
			for (int row = 0+squareCount; row < size-squareCount; row ++){//tracksRow to fill in 
				
				for (int col = 0+squareCount; col < size-squareCount; col++){//Tracks Column to fill in
					
					gameBoard[row][col].setSquareValue(squareCount+1);//Sets value to the proper number it is according to respective "square" it is in
				}
			}
		}//loop that fills the board with the proper numbers
		
		
		//The following is an output to print and format the board
		System.out.println("Completed! Enjoy your game.");
		System.out.print("");
		for (int count = 0; count < size; count++){
			System.out.print("~~~");
		}//Creates a border for the game board
		System.out.println("");//This to create a new line after the border
	
		input.nextLine();//Waits for user to hit enter to play
		
		int toss = 1;//Variable to keep track of your tosses
		for (int count = 0; count < 5; count++){
			System.out.println("Press Enter to Toss a Coin");
			input.nextLine();//waits for user to hit enter
			randRow = (int) (Math.random() * size);//Generates a random row
			randCol = (int) (Math.random() * size);//Generates a random column
			
			gameBoard[randRow][randCol].setPenny(true);//Puts a penny on the random square
			score += gameBoard[randRow][randCol].getSquareValue();//Finds value of the square and sets your score to it
			
			for (int count1 = 0; count1 < size; count1++){
				System.out.print("~~~");
			}
			System.out.println("");//Border loop
			
			displayBoard(gameBoard);//Shows updated board
			for (int count1 = 0; count1 < size; count1++){
				System.out.print("~~~");
			}//border loop
			
			System.out.println("");
			System.out.println("Current Score: " + score);//Shows current score
			System.out.println("Current Toss: " + toss);//Shows current toss
			toss++;
		}//End penny toss loop
		
		for (int count = 0; count < size; count++){
			System.out.print("~~~");
		}//board loop
		System.out.println("");
		
		System.out.println("You had a score of " + score + ".\nPlay Again? (y/n)");//Shows final score and asks to play again
		playAgain = input.nextLine();//Receives input
		
		if (playAgain.toLowerCase().equals("y")){//Checks if user wants to play again
			again = true;
		}
		else{
			again = false;
		}
		
		}while(again);//While again is true, user will keep playing
		
		System.out.println("Closing the game...\nGoodbye.");
		
	}//close main method(String[] args)
	
	
	private static SquareObject[][] resetBoard(SquareObject[][] board){//resets the board
		for(int row = 0; row < board.length; row++){//for each row in array
			for (int col = 0; col < board[row].length; col++ ){//for each column in array
				board[row][col] = new SquareObject();
			}//end column for loop			
		}//end row for loop
		return board;
	}//end resetBoard(SquareObject[][])
	
	
	private static void displayBoard(SquareObject[][] board){//displays the board
		for(int row = 0; row < board.length; row++){//for each row in array
			for (int col = 0; col < board[row].length; col++ ){//for each column in array
				if (board[row][col].hasPenny()==false){//checks if you have a penny
					System.out.printf("%3d",board[row][col].getSquareValue());	//Displays value if you do not
				}
				else{
					System.out.printf("%3s","*");//If you do, it displays an "*"
				}
				
			}//end column for loop	
			
			System.out.println();
		}//end row for loop	
	}//end displayBoard(SquareObject[][] board) method
	
}//close class Program19
