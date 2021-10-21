using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace lab2_modeling
{
    class Methods
    {
        public Methods()
        {
            fillData();
        }

        private double[,] ItK = {{0.5, 6700, 0.5},
                                {1, 6790, 0.55},
                                {5, 7150, 1.7},
                                {10, 7270, 3},
                                {50, 8010, 11},
                                {200, 9185, 32},
                                {400, 10010, 40},
                                {800, 11140, 41},
                                {1200, 12010, 39} };

        private double[,] Tsigma = {{4000, 0.031},
                                    {5000, 0.27},
                                    {6000, 2.05},
                                    {7000, 6.06},
                                    {8000, 12.0},
                                    {9000, 19.9},
                                    {10000, 29.6},
                                    {11000, 41.1},
                                    {12000, 54.1},
                                    {13000, 67.7},
                                    {14000, 81.5}};

        
        private static List<double>[] createGraph(int n = 2)
        {
            var graph = new List<double>[n];
            for (int i = 0; i < n; i++)
            {
                graph[i] = new List<double>();
            }
            return graph;
        }

        public List<double>[] graph1 = createGraph(2);
        public List<double>[] graph2 = createGraph(2);
        public List<double>[] graph3 = createGraph(2);
        public List<double>[] graph4 = createGraph(2);
        public List<double>[] graph5 = createGraph(2);

        private Dictionary<string, double> data = new Dictionary<string, double>();

        private void fillData()
        {
            data.Add("R", 0.35);
            data.Add("Le", 12);
            data.Add("Lk", 0.000187); 
            data.Add("Ck", 0.000268);
            data.Add("Rk", 0.25);
            data.Add("Uc0", 1400);
            data.Add("I0", 0.5);
            data.Add("Tw", 2000);
            data.Add("Tbegin", 0);
            data.Add("Tend", 0.00002);
            data.Add("Tstep", 1e-6);
        }

        private double interpolate(double[,] table, double xValue, int xIndex, int yIndex)
        {
            bool interpolateIndexFound = false;
            double x1 = 0;
            double x2 = 0;
            double y1 = 0;
            double y2 = 0;
            double yResult = 0;
            int len = table.Length;
            if (len == 22)
                len = 11;
            else
                len = 9;

            for (int i = 0; i < len - 1; i++)
            {
                if (table[i,xIndex] <= xValue && xValue <= table[i + 1, xIndex])
                {
                    y1 = table[i, yIndex];
                    y2 = table[i + 1, yIndex];
                    x1 = table[i, xIndex];
                    x2 = table[i + 1, xIndex];
                    interpolateIndexFound = true;
                }
            }
            if (interpolateIndexFound)
            { 
                yResult = y1 + ((xValue - x1) / (x2 - x1)) * (y2 - y1); 
            }
            else
            {
                if (xValue < table[0, xIndex])
                    yResult = table[0, yIndex];
                if (xValue > table[len - 1, xIndex])
                    yResult = table[len - 1, yIndex];
            }

            return yResult;
        }


        private double integrateSimpson(double I)
        {
            double n = 40;
            double begin = 0;
            double end = 1;
            double width = (end - begin) / n;
            double result = 0;
            double x1, x2;
            for (double step = 0; step < n; step++)
            {
                x1 = begin + step * width;
                x2 = begin + (step + 1) * width;
                result += (x2 - x1) / 6.0 * (sigmaFunc(I, x1) + 4.0 * sigmaFunc(I, 0.5 * (x1 + x2)) + sigmaFunc(I, x2));
            }
            return result;
        }

        private double calculateRp(double I)
        {
            double R = data["R"];
            double integral = integrateSimpson(I);
            return data["Le"] / (2 * Math.PI * R * R * integral);
        }

        private double f_PHI(double t, double I, double U)
        {
            return -1 / data["Ck"] * I;
        }

        private double getTz(double T0, double m, double r)
        {
            double z = r;
            return (data["Tw"] - T0) * Math.Pow(z, m) + T0;
        }

        private double sigmaFunc(double I, double z)
        {
            double m = interpolate(ItK, I, 0, 2);
            double T0 = interpolate(ItK, I, 0, 1);
            double Tz = getTz(T0, m, z);
            double sigma = interpolate(Tsigma, Tz, 0, 1);
            return z * sigma;
        }

        private double functionF_4(double t, double I, double U)
        {
            double Rp = calculateRp(I);
            graph3[0].Add(t);
            graph3[1].Add(Rp);
            graph4[0].Add(t);
            graph4[1].Add(I * Rp);
            return (U - (data["Rk"] + Rp) * I) / data["Lk"];
        }

        private double[] Runge4(double xn, double yn, double zn, double hn)
        {
            double[] result = new double[2];

            double hn2 = hn / 2;
            double k1 = hn * functionF_4(xn, yn, zn);
            double q1 = hn * f_PHI(xn, yn, zn);

            double k2 = hn * functionF_4(xn + hn2, yn + k1 / 2, zn + q1 / 2);
            double q2 = hn * f_PHI(xn + hn2, yn + k1 / 2, zn + q1 / 2);

            double k3 = hn * functionF_4(xn + hn2, yn + k2 / 2, zn + q2 / 2);
            double q3 = hn * f_PHI(xn + hn2, yn + k2 / 2, zn + q2 / 2);

            double k4 = hn * functionF_4(xn + hn, yn + k3, zn + q3);
            double q4 = hn * f_PHI(xn + hn, yn + k3, zn + q3);

            double yn_1 = yn + (k1 + 2 * k2 + 2 * k3 + k4) / 6;
            double zn_1 = zn + (q1 + 2 * q2 + 2 * q3 + q4) / 6;

            result[0] = yn_1;
            result[1] = zn_1;
            return result;
        }

        public void beginCalculations()
        {
            double t = data["Tbegin"];
            double tmax = data["Tend"];
            double I = data["I0"];
            double Uc = data["Uc0"];
            double hn = data["Tstep"];
            int times = 0;
            for (double i = t; i < tmax + hn*times; i += hn)
            {
                graph1[0].Add(i);
                graph1[1].Add(I);
                graph2[0].Add(i);
                graph2[1].Add(Uc);
                graph5[0].Add(i);
                graph5[1].Add(interpolate(ItK, I, 0, 1));
                var result = Runge4(i, I, Uc, hn);
                I = result[0];
                Uc =result[1];
            }
        }
    }

}
