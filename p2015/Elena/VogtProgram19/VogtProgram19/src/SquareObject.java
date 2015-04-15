public class SquareObject {//representation of a square on the game board
	private int squareValue;
	private boolean hasPenny;
	
	SquareObject(){//default constructor
		squareValue = 1;
		hasPenny = false;
	}//end default constructor
	
	SquareObject(int value) {//constructor with value passed in
		squareValue = value;
		hasPenny= false;
	}//end constructor(int value)
	
	public int getSquareValue(){ //returns the value of the square
		return squareValue;
	}//end getSquareValue() method
	
	public void setSquareValue(int v){//modifies the value of the square
		squareValue = v;
	}//end void method setSquareValue(intV)

	public boolean hasPenny() {//is there a penny present in the square
		return hasPenny;
	}//end method hasPenny

	public void setPenny(boolean penny) {//set the value of whether square has a penny or not
		hasPenny = penny;
	}//end method setHasPenny
}
