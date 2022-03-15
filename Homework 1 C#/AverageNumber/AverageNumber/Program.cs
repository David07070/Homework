using System;

namespace AverageNumber
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Average Number");

            double num1, num2, num3, num4;

            Console.WriteLine("Enter the first number: ");
            num1 = double.Parse(Console.ReadLine());
            Console.WriteLine("Enter the second number: ");
            num2 = double.Parse(Console.ReadLine());
            Console.WriteLine("Enter the third number: ");
            num3 = double.Parse(Console.ReadLine());
            Console.WriteLine("Enter the fourth number: ");
            num4 = double.Parse(Console.ReadLine());

            double result = (num1 + num2 + num3 + num4) / 4;
                Console.WriteLine($"The average value of {num1}, {num2}, {num3}, {num4} is " + result);
        }
    }
}
