
function convertNumber() {

    // Inputdagi qiymatni olish
    const input = document.getElementById("number").value.trim();

    // Qaysi sanoq sistemasidan ekanligini olish
    const fromBase = parseInt(
        document.getElementById("fromBase").value
    );

    const error = document.getElementById("error");

    // Oldingi xatoni tozalash
    error.textContent = "";


    // Son kiritilmagan bo'lsa
    if (input === "") {

        error.textContent = "Iltimos, son kiriting!";

        return;
    }


    // Kiritilgan sonni 10 likka o'tkazish
    const decimalNumber = parseInt(input, fromBase);


    // Noto'g'ri son kiritilgan bo'lsa
    if (isNaN(decimalNumber)) {

        error.textContent =
            "Noto'g'ri son! Sanoq sistemasiga mos son kiriting.";

        return;
    }


    // Natijalarni chiqarish

    document.getElementById("binary").textContent =
        decimalNumber.toString(2);

    document.getElementById("octal").textContent =
        decimalNumber.toString(8);

    document.getElementById("decimal").textContent =
        decimalNumber.toString(10);

    document.getElementById("hexadecimal").textContent =
        decimalNumber.toString(16).toUpperCase();
}