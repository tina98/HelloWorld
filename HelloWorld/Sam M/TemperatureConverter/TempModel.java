
public class TempModel {
    
    private double degreesCelcius;
    
    TempModel() {
        degreesCelcius = 0;
    }
    
    public double getCelcius() {
        return degreesCelcius;
    }
    
    public void setCelcius(double c) {
        degreesCelcius = c;
    }
     
    public double getFarenheit() {
        return (degreesCelcius*1.8) + 32.;
    }
    
    public void setFarenheit(double f) {
        degreesCelcius = (f-32)/1.8;
    }
    
}
