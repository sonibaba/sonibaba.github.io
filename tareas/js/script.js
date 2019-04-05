            var baraja = [];
            var contador = 0;
            var tablero = [];
            var imgSeleccionadas = [];

            revolverBaraja();
            pintarTablaUno();
            //pintarTablaDos();


            $("#sacar").click(function () {
                $("#sacar").text("Carta siguiente");
                contador++;
                $("#card").empty();

                if (contador < 55) {
                    $(".card").append('<img class="baraja" id="' + baraja[contador] + '" alt="img/' +
                        baraja[contador] + '.jpg" src="img/' + baraja[contador] + '.jpg"/>');
                    $("#contador").text("Total de Cartas Vistas: " + contador);
                    pintarCarta()
                } else {
                    $("#sacar").text("Reiniciar");
                    contador = 0;
                }
            })

            function pintarCarta() {
                if (tablero.slice(0, 16).includes(baraja[contador])) {
                    $("." + baraja[contador]).addClass("selected")
                    var id = $("." + baraja[contador]).attr("id")
                    imgSeleccionadas.push(parseInt(id));
                    verificarGanar(imgSeleccionadas)
                }
            }

            function verificarGanar(seleccionadas) {
                var ganador1 = 0;
                var ganador2 = 0;
                var ganador3 = 0;
                var ganador4 = 0;
                //horizontal
                for(var i = 0; i < 4; i++){
                    //linea1
                    if (seleccionadas.includes(i)) {
                        ganador1++
                        if(ganador1==4){
                            alert("ganaste linea H1")
                            for(var j=0;j<4;j++){
                                $("#"+j).addClass("ganadora")
                            }
                        }
                    }else{
                        ganador1=0;
                    }
                    //linea2
                    if (seleccionadas.includes(i+4)) {
                        ganador2++
                        if(ganador2==4){
                            alert("ganaste linea H2")
                        }
                    }else{
                        ganador2=0;
                    }
                    //linea3
                    if (seleccionadas.includes(i+8)) {
                        ganador3++
                        if(ganador3==4){
                            alert("ganaste linea H3")
                        }
                    }else{
                        ganador3=0;
                    }
                    //linea4
                    if (seleccionadas.includes(i+12)) {
                        ganador4++
                        if(ganador4==4){
                            alert("ganaste linea H4")
                        }
                    }else{
                        ganador4=0;
                    }
                }
                ganador1=0;
                ganador2=0;
                ganador3=0;
                ganador4=0;
                //VERTICAL
                for(var i = 0; i < 16; i+=4){
                    if (seleccionadas.includes(i)) {
                        ganador1++
                        if(ganador1==4){
                            alert("ganaste linea V1")
                        }
                    }else{
                        ganador1=0;
                    }

                    if (seleccionadas.includes(i+1)) {
                        ganador2++
                        if(ganador2==4){
                            alert("ganaste linea V2")
                        }
                    }else{
                        ganador2=0;
                    }

                    if (seleccionadas.includes(i+2)) {
                        ganador3++
                        if(ganador3==4){
                            alert("ganaste linea V3")
                        }
                    }else{
                        ganador3=0;
                    }

                    if (seleccionadas.includes(i+3)) {
                        ganador4++
                        if(ganador4==4){
                            alert("ganaste linea V4")
                        }
                    }else{
                        ganador4=0;
                    }
                }
                ganadord1=0;
                ganadord2=0;
                for(var i = 0; i < 16; i+=5){
                    if (seleccionadas.includes(i)) {
                        ganadord1++
                        if(ganadord1==4){
                            alert("ganaste linea d1")
                        }
                    }else{
                        ganadord1=0;
                    }
                }
                for(var i = 0; i < 13; i+=3){
                    if (seleccionadas.includes(i)) {
                        ganadord2++
                        if(ganadord2==4){
                            alert("ganaste linea d2")
                        }
                    }else{
                        ganadord2=0;
                    }
                }   
                var corners = [0, 3, 12, 15]
                var medio = [5, 6, 9, 10]
                ganadord1=0;
                ganadord2=0;
                for (var i = 0; i < 5; i++) {
                    if (seleccionadas.includes(corners[i])) {
                        ganadord2++
                        if (ganadord2 == 4) {
                            alert("ganaste esquinas")
                        }
                    } else {
                        ganadord2 = 0;
                    }
                }
                for (var i = 0; i < 5; i++) {
                    if (seleccionadas.includes(medio[i])) {
                        ganadord2++
                        if (ganadord2 == 4) {
                            alert("ganaste en cuadro en medio")
                        }
                    } else {
                        ganadord3 = 0;
                    }
                }
            }

            function revolverBaraja() {
                for (var index = 1; index < 55; index++) {
                    baraja[index] = index
                }
                baraja.sort(function (a, b) {
                    return 0.5 - Math.random()
                })
            }

            function pintarTablaUno() {
                for (var index = 1; index < 55; index++) {
                    tablero[index] = index
                }
                tablero.sort(function (a, b) {
                    return 0.5 - Math.random()
                })
                for (var carta = 0; carta < 16; carta++) {
                    $("#table1").append('<div id="content" class="content"><img class ="img ' + tablero[carta] +
                        '" id="' + carta + '" src="img/' + tablero[carta] + '.jpg"/></div>');
                }
            }

            function pintarTablaDos() {
                //var tablero = [];
                for (var index = 1; index < 55; index++) {
                    tablero[index] = index;
                }
                tablero.sort(function (a, b) {
                    return 0.5 - Math.random()
                })
                for (var carta = 0; carta < 16; carta++) {
                    $("#table2").append('<div id="content" class="content"><img class ="img ' + tablero[carta] +
                        '" id="' + carta + '" src="img/' + tablero[carta] + '.jpg"/></div>');
                }
            }