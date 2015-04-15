import javax.swing.*;
import java.awt.*;

public class TempView extends JFrame{
    
    private JLabel      someLabel;
    private JButton     someButton;
    private JTextField  someText;
    private Container   whereStuffGoes;
    private JPanel      buttonPanel;
    
    
    TempView() {                // default constructor
        someLabel = new JLabel();
        someLabel.setText("This is some text for the JLabel.");
        
        buttonPanel = new JPanel();
        
        someButton = new JButton();
        someButton.setText("Click me, yo!");
        
        buttonPanel.add(someButton);
        
        someText = new JTextField();
        someText.setText("Here is some default text.");
        
        whereStuffGoes = this.getContentPane();
        whereStuffGoes.setLayout(new GridLayout(3,1));
        
        this.setTitle("Attan's nifty Window");
        this.setSize(300,200);
        this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        this.setLocation(400,50);
        
        whereStuffGoes.add(someLabel);
        whereStuffGoes.add(buttonPanel);
        whereStuffGoes.add(someText);
    }
}
