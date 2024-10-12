$(document).ready(function () {
    var currentDisplay;
    var value;
    var numero1 = 0;

    $('#bt-1').click(function () {
        value = $(this).text();
        currentDisplay = $("#display").text();
        if (currentDisplay === "0") {
            $("#display").text(value);
        } else {
            // Concatenar o novo valor ao que já existe no display
            $("#display").text(currentDisplay + value);
        }
    });
    $('#bt-2').click(function () {
        value = $(this).text();
        currentDisplay = $("#display").text();
        if (currentDisplay === "0") {
            $("#display").text(value);
        } else {
            // Concatenar o novo valor ao que já existe no display
            $("#display").text(currentDisplay + value);
        }
    });
    $('#bt-3').click(function () {
        value = $(this).text();
        currentDisplay = $("#display").text();
        if (currentDisplay === "0") {
            $("#display").text(value);
        } else {
            // Concatenar o novo valor ao que já existe no display
            $("#display").text(currentDisplay + value);
        }
    });
    $('#bt-4').click(function () {
        value = $(this).text();
        currentDisplay = $("#display").text();
        if (currentDisplay === "0") {
            $("#display").text(value);
        } else {
            // Concatenar o novo valor ao que já existe no display
            $("#display").text(currentDisplay + value);
        }
    });
    $('#bt-5').click(function () {
        value = $(this).text();
        currentDisplay = $("#display").text();
        if (currentDisplay === "0") {
            $("#display").text(value);
        } else {
            // Concatenar o novo valor ao que já existe no display
            $("#display").text(currentDisplay + value);
        }
    });
    $('#bt-6').click(function () {
        value = $(this).text();
        currentDisplay = $("#display").text();
        if (currentDisplay === "0") {
            $("#display").text(value);
        } else {
            // Concatenar o novo valor ao que já existe no display
            $("#display").text(currentDisplay + value);
        }
    });
    $('#bt-7').click(function () {
        value = $(this).text();
        currentDisplay = $("#display").text();
        if (currentDisplay === "0") {
            $("#display").text(value);
        } else {
            // Concatenar o novo valor ao que já existe no display
            $("#display").text(currentDisplay + value);
        }
    });
    $('#bt-8').click(function () {
        value = $(this).text();
        currentDisplay = $("#display").text();
        if (currentDisplay === "0") {
            $("#display").text(value);
        } else {
            // Concatenar o novo valor ao que já existe no display
            $("#display").text(currentDisplay + value);
        }
    });
    $('#bt-9').click(function () {
        value = $(this).text();
        currentDisplay = $("#display").text();
        if (currentDisplay === "0") {
            $("#display").text(value);
        } else {
            // Concatenar o novo valor ao que já existe no display
            $("#display").text(currentDisplay + value);
        }
    });
    $('#bt-0').click(function () {
        value = $(this).text();
        currentDisplay = $("#display").text();
        if (currentDisplay === "0") {
            $("#display").text(value);
        } else {
            // Concatenar o novo valor ao que já existe no display
            $("#display").text(currentDisplay + value);
        }
    });
    $('#bt-virgula').click(function () {
        currentDisplay = $("#display").text();
        // Verifica se o número já tem uma vírgula
        if (!currentDisplay.includes(",")) {
            $("#display").text(currentDisplay + ",");
        }
    });

    $('#bt-ac').click(function () {
        currentDisplay = $("#display").text(0);
    });

    var operation = null;

    $('#bt-plus').click(function () {
        numero1 = parseInt($("#display").text());
        operation = 'plus';
        $("#display").text(0);
    });

    $('#bt-divide').click(function () {
        numero1 = parseInt($("#display").text());
        operation = 'divide';
        $("#display").text(0);
    });

    $('#bt-minus').click(function () {
        numero1 = parseInt($("#display").text());
        operation = 'minus';
        $("#display").text(0);
    });

    $('#bt-times').click(function () {
        numero1 = parseInt($("#display").text());
        operation = 'times';
        $("#display").text(0);
    });

    $('#bt-equals').click(function () {
        var numero2 = parseInt($("#display").text());
        var resultado = 0;
        if (operation === 'divide') {
            resultado = numero1 / numero2;
        } else if (operation === 'minus') {
            resultado = numero1 - numero2;
        } else if (operation === 'times') {
            resultado = numero1 * numero2;
        } else if (operation === 'plus') {
            resultado = numero1 + numero2;
        }
        $("#display").text(resultado);
        operation = null;
    });


});