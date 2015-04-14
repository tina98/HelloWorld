
package javaapplication1;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Scanner;

public class JavaApplication1 {

    public static void main(String[] args) throws FileNotFoundException{
        System.out.println("fhf");
        Scanner inFile = new Scanner(new File("college.txt"));

        int sum = 0, count = 0;
        double average;
        inFile.nextInt();
        inFile.nextInt();
        inFile.nextInt();
        System.out.println("shjdhfk");
        while (inFile.hasNext()) {
            System.out.println("fh");
            sum += inFile.nextInt();
            count++;
            inFile.nextInt();
            inFile.nextInt();
            inFile.nextInt();
            inFile.nextInt();
            inFile.nextInt();
        }
        System.out.println(count);
        System.out.println(sum);
        average = sum / count;
        System.out.println(average);
    }
    
}
