using System;

namespace SwapNumbers
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Swap Numbers");

            int num1 = 0;
            int num2 = 0;
            int num3 = 0; 

            Console.WriteLine("Enter the first number: ");
            num1 = int.Parse(Console.ReadLine());
            Console.WriteLine("Enter the second number: ");
            num2 = int.Parse(Console.ReadLine());

            Console.WriteLine($"Before swapping the first number is {num1} and the second is {num2}");

            num3 = num1;
            num1 = num2;
            num2 = num3;

            Console.WriteLine($"After swapping the first number is {num1} and the second is {num2}");

            Console.Read();




        }
    }
}
