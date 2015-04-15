import TurtleGraphics.*;

public class TestPens {
    public static void main (String[] args) {

        // make a 400x400 window for the turtle
        SketchPadWindow pad = new SketchPadWindow(400,400);     

        // make a pen and associate it with the window
        StandardPen p = new StandardPen(pad);
        // WigglePen p = new WigglePen(pad);
        // RainbowPen p = new RainbowPen(pad);
        // WiggleRainbowPen p = new WiggleRainbowPen(pad);
        
        p.home();   // go to 0,0
        p.down();   // put the pen down

        // draw a square

        for(int i = 0; i < 4; i++) {    
            p.move(150);
            p.turn(90);
        }

    }
}
