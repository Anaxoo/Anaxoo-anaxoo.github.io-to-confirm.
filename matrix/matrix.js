window.onload = function()
{
    document.getElementById('mbutton').onclick = doCalc;
    document.getElementById('subtbutton').onclick = doCalc;
    document.getElementById('addbutton').onclick = doCalc;
}
function doCalc() {
    // assign the inputted values to variables
    var Aval1 = document.matrixCalc.AR1C1.value,
        Aval2 = document.matrixCalc.AR1C2.value,
        Aval3 = document.matrixCalc.AR1C3.value,
        Aval4 = document.matrixCalc.AR1C4.value,
        Aval5 = document.matrixCalc.AR2C1.value,
        Aval6 = document.matrixCalc.AR2C2.value,
        Aval7 = document.matrixCalc.AR2C3.value,
        Aval8 = document.matrixCalc.AR2C4.value,
        Aval9 = document.matrixCalc.AR3C1.value,
        Aval10 = document.matrixCalc.AR3C2.value,
        Aval11 = document.matrixCalc.AR3C3.value,
        Aval12 = document.matrixCalc.AR3C4.value,
        Aval13 = document.matrixCalc.AR4C1.value,
        Aval14 = document.matrixCalc.AR4C2.value,
        Aval15 = document.matrixCalc.AR4C3.value,
        Aval16 = document.matrixCalc.AR4C4.value,
        
        Bval1 = document.matrixCalc.BR1C1.value,
        Bval2 = document.matrixCalc.BR1C2.value,
        Bval3 = document.matrixCalc.BR2C1.value,
        Bval4 = document.matrixCalc.BR2C2.value;  
        Bval5 = document.matrixCalc.BR2C1.value,
        Bval6 = document.matrixCalc.BR2C2.value,
        Bval7 = document.matrixCalc.BR2C3.value,
        Bval8 = document.matrixCalc.BR2C4.value,
        Bval9 = document.matrixCalc.BR3C1.value,
        Bval10 = document.matrixCalc.BR3C2.value,
        Bval11 = document.matrixCalc.BR3C3.value,
        Bval12 = document.matrixCalc.BR3C4.value,
        Bval13 = document.matrixCalc.BR4C1.value,
        Bval14 = document.matrixCalc.BR4C2.value,
        Bval15 = document.matrixCalc.BR4C3.value,
        Bval16 = document.matrixCalc.BR4C4.value;

    var A = $M([
        [Aval1,Aval2,Aval3,Aval4],
        [Aval5,Aval6,Aval7,Aval8],
        [Aval9,Aval10,Aval11,Aval12],
        [Aval13,Aval14,Aval15,Aval16]
    ]);
    var B = $M([
        [Bval1,Bval2,Bval3,Bval4],
        [Bval5,Bval6,Bval7,Bval8],
        [Bval9,Bval10,Bval11,Bval12],
        [Bval13,Bval14,Bval15,Bval16]
        ]);  

    if (this.value == "x") {
        var res = A.x(B);
        document.matrixCalc.PR1C1.value = res.e(1,1);
        document.matrixCalc.PR1C2.value = res.e(1,2);
        document.matrixCalc.PR1C3.value = res.e(1,3);
        document.matrixCalc.PR1C4.value = res.e(1,4);
        document.matrixCalc.PR2C1.value = res.e(2,1);
        document.matrixCalc.PR2C2.value = res.e(2,2);
        document.matrixCalc.PR2C3.value = res.e(2,3);
        document.matrixCalc.PR2C4.value = res.e(2,4);
        document.matrixCalc.PR3C1.value = res.e(3,1);
        document.matrixCalc.PR3C2.value = res.e(3,2);
        document.matrixCalc.PR3C3.value = res.e(3,3);
        document.matrixCalc.PR3C4.value = res.e(3,4);
        document.matrixCalc.PR4C1.value = res.e(4,1);
        document.matrixCalc.PR4C2.value = res.e(4,2);
        document.matrixCalc.PR4C3.value = res.e(4,3);
        document.matrixCalc.PR4C4.value = res.e(4,4);
    } else if (this.value == "-") {
        var res = A.subtract(B);
        document.matrixCalc.PR1C1.value = res.e(1,1);
        document.matrixCalc.PR1C2.value = res.e(1,2);
        document.matrixCalc.PR1C3.value = res.e(1,3);
        document.matrixCalc.PR1C4.value = res.e(1,4);
        document.matrixCalc.PR2C1.value = res.e(2,1);
        document.matrixCalc.PR2C2.value = res.e(2,2);
        document.matrixCalc.PR2C3.value = res.e(2,3);
        document.matrixCalc.PR2C4.value = res.e(2,4);
        document.matrixCalc.PR3C1.value = res.e(3,1);
        document.matrixCalc.PR3C2.value = res.e(3,2);
        document.matrixCalc.PR3C3.value = res.e(3,3);
        document.matrixCalc.PR3C4.value = res.e(3,4);
        document.matrixCalc.PR4C1.value = res.e(4,1);
        document.matrixCalc.PR4C2.value = res.e(4,2);
        document.matrixCalc.PR4C3.value = res.e(4,3);
        document.matrixCalc.PR4C4.value = res.e(4,4);
    } else if (this.value == "+") {
        document.matrixCalc.PR1C1.value = parseFloat(Aval1) + parseFloat(Bval1);
        document.matrixCalc.PR1C2.value = parseFloat(Aval2) + parseFloat(Bval2);
        document.matrixCalc.PR1C3.value = parseFloat(Aval3) + parseFloat(Bval3);
        document.matrixCalc.PR1C4.value = parseFloat(Aval4) + parseFloat(Bval4);
        document.matrixCalc.PR2C1.value = parseFloat(Aval5) + parseFloat(Bval5);
        document.matrixCalc.PR2C2.value = parseFloat(Aval6) + parseFloat(Bval6);
        document.matrixCalc.PR2C3.value = parseFloat(Aval7) + parseFloat(Bval7);
        document.matrixCalc.PR2C4.value = parseFloat(Aval8) + parseFloat(Bval8);
        document.matrixCalc.PR3C1.value = parseFloat(Aval9) + parseFloat(Bval9);
        document.matrixCalc.PR3C2.value = parseFloat(Aval10) + parseFloat(Bval10);
        document.matrixCalc.PR3C3.value = parseFloat(Aval11) + parseFloat(Bval11);
        document.matrixCalc.PR3C4.value = parseFloat(Aval12) + parseFloat(Bval12);
        document.matrixCalc.PR4C1.value = parseFloat(Aval13) + parseFloat(Bval13);
        document.matrixCalc.PR4C2.value = parseFloat(Aval14) + parseFloat(Bval14);
        document.matrixCalc.PR4C3.value = parseFloat(Aval15) + parseFloat(Bval15);
        document.matrixCalc.PR4C4.value = parseFloat(Aval16) + parseFloat(Bval16);
    }
}