using System;

namespace RealCalculator
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("RealCalculator");

            int num1 = 0;
            int num2 = 0;
            Console.WriteLine("Type the first number: ");
            num1 = int.Parse(Console.ReadLine());

            Console.WriteLine("Type the second number: ");
            num2 = int.Parse(Console.ReadLine());

            Console.WriteLine("Choose the operation: ");
            Console.WriteLine("+ -- Add");
            Console.WriteLine("* -- Multiply");
            Console.WriteLine("- -- Subtract");
            Console.WriteLine("/ -- Divide");

            switch (Console.ReadLine())
            {
                case "+":
                    Console.WriteLine($"The result is: {num1} + {num2} = " + (num1 + num2));
                    break;
                case "*":
                    Console.WriteLine($"The result is: {num1} * {num2} = " + (num1 * num2));
                    break;
                case "-":
                    Console.WriteLine($"The result is: {num1} - {num2} = " + (num1 - num2));
                    break;
                case "/":
                    while(num2 == 0)
                    {
                        Console.WriteLine("Enter a non-zero divider! ");
                        num2 = int.Parse(Console.ReadLine());
                    }
                    Console.WriteLine($"The result is: {num1} / {num2} = " + (num1 / num2));
                    break;
                
            }

            Console.ReadKey();
        }
    }
}
