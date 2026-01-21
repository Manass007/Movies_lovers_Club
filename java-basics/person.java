import java.util.Scanner;

public class person {
    Scanner sc = new Scanner(System.in);
    
    int Id = sc.nextInt();
    String name = sc.next();

    public void displayInfo() {
        System.out.println("ID: " + Id);
        System.out.println("Name: " + name);
    }

    public static void main(String[] args) {
        person p = new person();
        p.displayInfo();
    }

}
// public class Main {
//     public static void main(String[] args) {

//     }
// }

// public class Main {
//     public static void main(String[] args) {
//         Scanner sc = new Scanner(System.in);

//         System.out.print("Enter an integer number: ");
//         int num = sc.nextInt();

//         System.out.print("Enter digit to check (0-9): ");
//         int d = sc.nextInt();

//         DigitAnalyzer analyzer = new DigitAnalyzer();
//         int count = analyzer.countDigit(num, d);

//         System.out.println("Digit " + (Math.abs(d) % 10) + " appears " + count + " time(s) in " + num);
//         sc.close();
//     }
// }

// class DigitAnalyzer {
//     public int countDigit(int num, int d) {
//         int n = Math.abs(num);
//         int digit = Math.abs(d) % 10; // ensure single digit
//         int count = 0;

//         if (n == 0) {
//             return digit == 0 ? 1 : 0;
//         }

//         while (n > 0) {
//             if (n % 10 == digit) {
//                 count++;
//             }
//             n /= 10;
//         }

//         return count;
//     }
// }
