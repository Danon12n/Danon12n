import java.lang.Math.pow
import kotlin.math.abs

fun f(x: Double, y: Double): Double {
    return pow(x, 2.0) + pow(y, 2.0);
}

// Лямбда-выражения для вычисления n-ого приближения
val picardOne: (x: Double) -> Double = {
        x -> pow(x, 3.0) / 3
}
val picardTwo: (x: Double) -> Double = {
        x -> picardOne(x) +
        pow(x, 7.0) / 63
}
val picardThree: (x: Double) -> Double = {
        x -> picardTwo(x) +
        2 * pow(x, 11.0) / 2079 +
        pow(x, 15.0) / 59535
}
val picardFour: (x: Double) -> Double = {
        x -> picardThree(x) +
        4 * pow(x, 15.0) / 93555 +
        82 * pow(x, 19.0) / 37328445 +
        662 * pow(x, 23.0) / 10438212015 +
        4 * pow(x, 27.0) / 3341878155 +
        pow(x, 31.0) / 109876902975
}

fun picard(columnX: ArrayList<Double>,
           funcPickard: (x: Double)-> Double): ArrayList<Double> {
    var columnY = arrayListOf<Double>()
    for (x in columnX) {
        val y = funcPickard(x)
        columnY.add(y)
    }
    return  columnY
}

fun euler(columnX: ArrayList<Double>, h:Double): ArrayList<Double> {
    var columnY = arrayListOf<Double>()
    var y = 0.0
    for (x in columnX) {
        y += h * f(x, y)
        columnY.add(y)
    }
    return  columnY
}

fun runge(columnX: ArrayList<Double>, h:Double): ArrayList<Double> {
    var columnY = arrayListOf<Double>()
    var y = 0.0
    val alpha = 0.5

    for (x in columnX) {
        val k1 = f(x, y)
        val k2 = f(x + h / 2 / alpha, y + k1 * h / 2 / alpha)
        y += h * ((1 - alpha) * k1 + alpha * k2)
        columnY.add(y)
    }
    return  columnY
}

fun printColumns(table: ArrayList<ArrayList<Double>>, eps:Double) {
    var i = 0
    while (abs(table[6][i] - table[5][i]) <= eps) {
        print("| %4.3f   ".format(table[0][i]))

        for (j in 1..(table.size - 1)) {
            print("| %7.6f    ".format(table[j][i]))
        }
        println("| %4.3f       |".format(abs(table[6][i] - table[5][i])))
        i++
    }
    println("-".repeat(109))
}

fun printHead() {
    var line = "-".repeat(109)
    println(line)
    println("|         |                       Метод Пикара                    " +
            "|  Метод      |    Метод    |             |")
    println("|   x     |      1      |      2      |      3      |      4      " +
            "|  Эйлера     | Рунге-Кутта |  Точность   |")
    println(line)

}

fun printTable(table: ArrayList<ArrayList<Double>>, eps: Double) {
    printHead()
    printColumns(table, eps)

}

fun getX(firstX: Double, maxX: Double, h: Double): ArrayList<Double> {
    var columnX = arrayListOf<Double>()
    var x = firstX
    while(x <= maxX) {
        columnX.add(x)
        x += h
    }
    return columnX
}

/*
fun main() {
    val firstX = 0.0
    val maxX = 2.0
    val h = 0.01
    val eps = 0.01

    println("Начальный x = " + firstX)
    println("Максимальный x = " + maxX)
    println("Шаг для численных методов = " + h)
    println("Точность Eps = " + eps)

    var table = arrayListOf<ArrayList<Double>>()
    val columnX = getX(firstX, maxX, h)
    table.add(columnX)
    table.add(picard(columnX, picardOne))
    table.add(picard(columnX, picardTwo))
    table.add(picard(columnX, picardThree))
    table.add(picard(columnX, picardFour))
    table.add(euler(columnX, h))
    table.add(runge(columnX, h))
    printTable(table, eps)
}*/

//fun main() {
//    val firstX = 0.0
//    val maxX = 2.0
//    val h = 0.001
//    val eps = 0.01
//
//    var table = arrayListOf<ArrayList<Double>>()
//    val columnX = getX(firstX, maxX, h)
//    table.add(columnX)
//    table.add(picard(columnX, picardOne))
//    table.add(picard(columnX, picardTwo))
//    table.add(picard(columnX, picardThree))
//    table.add(picard(columnX, picardFour))
//
//    var i = 0
//    while(abs(table[2][i] - table[1][i]) <= eps) i++
//    println("Для 1-ого приближения x принадлежит [0, %4.3f".format(table[0][i]) + "]")
//    while(abs(table[3][i] - table[2][i]) <= eps) i++
//    println("Для 2-ого приближения x принадлежит [0, %4.3f".format(table[0][i]) + "]")
//    while(abs(table[4][i] - table[3][i]) <= eps) i++
//    println("Для 3-его приближения x принадлежит [0, %4.3f".format(table[0][i]) + "]")
//}


fun getEuler(firstX:Double, maxX:Double, firstY: Double, h:Double):Double {
    var x = firstX
    var y = firstY
    while (x <= maxX) {
        y += h * f(x, y)
        x += h
    }
    return  y
}

fun main(){
    val firstX = 0.0
    val maxX = 2.0
    var h = 0.1
    val eps = 0.01
    val firstY = 0.0

    var curY = 0.0
    var nextY = getEuler(firstX, maxX, firstY, h)
    println("     h      |      u(2)     |  точность")
    do {
        curY = nextY
        h *= 0.1
        nextY = getEuler(firstX, maxX, firstY, h)
        println("%1.9f | %13.9f | %1.3f".format(h*10, curY, abs(nextY - curY)))
    } while(abs(curY - nextY) > eps)

    println("u(2) = " + curY)
}