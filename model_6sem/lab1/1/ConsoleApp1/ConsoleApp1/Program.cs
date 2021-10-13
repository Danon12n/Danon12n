using System;

namespace ConsoleApp1
{
    static class Methods
    {
        public static double f(double x, double y) //функция заданная в условии
        {
            return (Math.Pow(x, 2) + Math.Pow(y, 2));
        }
        public static double EulerOpened(double x, double h, double y) //явный метод эйлера
        { 
            return y + h * f(x, y);
        }

        public static double Pikar(double x, int n) // метод Пикара, где n - степень приближения 
        {
            
            switch (n)
            {
                case 1:
                    return Math.Pow(x, 3) / 3;
                case 2:
                    return Math.Pow(x, 3) / 3 + Math.Pow(x, 7) / 63;
                case 3:
                    return Math.Pow(x, 3) / 3 + Math.Pow(x, 7) / 63 + 2 * Math.Pow(x, 11) / 2079 + Math.Pow(x, 15) / 59535;
                case 4:
                    return Math.Pow(x, 3) / 3 + Math.Pow(x, 7) / 63 + 2 * Math.Pow(x, 11) / 2079 + 13 * Math.Pow(x, 15) / 218295 + 82 * Math.Pow(x, 19) / 37328445 + 662 * Math.Pow(x, 23) / 10438212015  + 4 * Math.Pow(x, 27) / 3341878155 +  Math.Pow(x, 31) / 109876902975;
                default:
                    return Math.Pow(x, 3) / 3;
            }
        }

        public static double Runge(double x, double y, double h)
        {
            var alpha = 0.5;
            var k1 = Methods.f(x, y);
            var k2 = f(x + h / 2 / alpha, y + k1 * h / 2 / alpha);
            y = y + h * ((1 - alpha) * k1 + alpha * k2);
            return y;
        }
        
    }

    class Program
    {
        static void Main()
        {
            //--------------------------------------реализация методов Эйлера, Рунге и Пикара------------------------------


            /*Console.Write("Enter xMax:");
            var xMax = double.Parse(Console.ReadLine());

            Console.Write("Enter step:");
            var h = double.Parse(Console.ReadLine());

            Console.Write("Enter Pikard approximation:");
            var n = int.Parse(Console.ReadLine());

            double EulerOpened_y = 0;
            double Pikar_y;
            double Runge_y = 0;

            double x0 = 0;
            Console.WriteLine($"      X       Euler      Pikard{n}    Runge");
            while (x0 < xMax + h)
            {
                EulerOpened_y = Methods.EulerOpened(x0, h, EulerOpened_y);
                Runge_y = Methods.Runge(x0, Runge_y, h);
                Pikar_y = Methods.Pikar(x0, n);
                Console.WriteLine("{0,6:F8}|{1,6:F8}|{2,6:F8}|{3,6:F8}|", x0, EulerOpened_y, Pikar_y, Runge_y);
                x0 += h;
            }*/

            // --------------------------------------------конец----------------------------------------------------

            //---------------------Поиск крайних значений аргумента для пикара разной степени точности--------------

            /* double h = 0.001;   // шаг по х
             double eps = 0.01;  // значение точности
             double x0 = 0;
             int n = 3; // значение приближения какого пикара мы проверяем



             while (Math.Abs(Methods.Pikar(x0, n + 1) - Methods.Pikar(x0, n)) < eps)
             {
                 x0 += h;
             }
             Console.WriteLine("{0,6:F8}", x0);*/

            //---------------------------------------------конец----------------------------------------------------

            //----------------------Поиск значения для u(2) явным методом Эйлера------------------------------------

            /*double x0 = 0;
            double y = 0;
            double h = 0.1;
            double xMax = 2;
            int i = 0;
            Console.WriteLine("|     h    |    x     |");
            while (i < 8)
            {
                y = 0;
                x0 = 0;
                while (x0 < xMax)
                {
                    y = Methods.EulerOpened(x0, h, y);
                    x0 += h;
                }
                Console.WriteLine("|{0,6:F8}|{1,6:F8}|", h, y);
                h *= 0.1;
                i++;
            }*/

            //---------------------------------------------конец----------------------------------------------------
        }
    }
}
