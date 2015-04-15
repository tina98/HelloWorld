import TurtleGraphics.*;

public class TestTurtle {
    
    public static void main(String[] args){
        SketchPadWindow myPad = new SketchPadWindow(400,400);
        StandardPen p = new WigglePen(myPad);
        
        p.home();
        p.down();
        
        for(int i = 0; i < 4; i++){
            p.move(150);
            p.turn(90);
        }
        
        
    }
}