using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace lab2_modeling
{
    public partial class Form1 : Form
    {
        Methods methods = new Methods();
        public Form1()
        {
            InitializeComponent();
            methods.beginCalculations();
            chart1.ChartAreas[0].AxisX.Interval = 0.0001; //тут настраиваем шаг сетки по X
            //chart1.ChartAreas[0].AxisY.Interval = 300; // по Y
            chart1.Series[0].Color = Color.Red; // цвет графика
            chart1.Series[0].BorderWidth = 2; // толщина графика
        }

        private void button1_Click(object sender, EventArgs e) // I(t)
        {
            chart1.Series[0].Points.Clear();
            for (int i = 0; i < methods.graph1[0].Count; i++)
            {
                chart1.Series[0].Points.AddXY(methods.graph1[0][i], methods.graph1[1][i]);
            }
        }

        private void button2_Click(object sender, EventArgs e) //U(t)
        {
            chart1.Series[0].Points.Clear();
            for (int i = 0; i < methods.graph2[0].Count; i++)
            {
                chart1.Series[0].Points.AddXY(methods.graph2[0][i], methods.graph2[1][i]);
            }
        }

        private void button3_Click(object sender, EventArgs e) //Rp(t)
        {
            chart1.Series[0].Points.Clear();
            for (int i = 0; i < methods.graph3[0].Count; i++)
            {
                chart1.Series[0].Points.AddXY(methods.graph3[0][i], methods.graph3[1][i]);
            }
        }

        private void button4_Click(object sender, EventArgs e) //I(t) * Rp(t)
        {
            chart1.Series[0].Points.Clear();
            for (int i = 0; i < methods.graph4[0].Count; i++)
            {
                chart1.Series[0].Points.AddXY(methods.graph4[0][i], methods.graph4[1][i]);
            }
        }

        private void button5_Click(object sender, EventArgs e) //T0(t)
        {
            chart1.Series[0].Points.Clear();
            for (int i = 0; i < methods.graph5[0].Count; i++)
            {
                chart1.Series[0].Points.AddXY(methods.graph5[0][i], methods.graph5[1][i]);
            }
        }
    }
}
