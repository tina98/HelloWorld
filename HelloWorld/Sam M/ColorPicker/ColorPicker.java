import java.awt.*;
import java.awt.event.*;
import javax.swing.*;

public class ColorPicker
    extends JFrame {
  public static void main(String[] args) {
    new ColorPicker();
  }
  
  public ColorPicker() {
    super("ColorPicker v1.0");
    createUI();
    setVisible(true);
  }
  
  protected void createUI() {
    setSize(400, 400);
    setLocation(100, 100);
    getContentPane().setLayout(new GridBagLayout());
    JButton colorButton = new JButton("Click to start");
    getContentPane().add(colorButton);
    colorButton.addActionListener(new ActionListener() {
      public void actionPerformed(ActionEvent ae) {
        Color c = JColorChooser.showDialog(
            ColorPicker.this, "Color Picker v1.0", getBackground());
        if (c != null) getContentPane().setBackground(c);
      }
    });
    
    addWindowListener(new WindowAdapter() {
      public void windowClosing(WindowEvent we) {
        System.exit(0);
      }
    });
  }
}