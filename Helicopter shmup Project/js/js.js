function start() { // Inicio da função start()

	$("#inicio").hide();
	
	$("#fundoGame").append("<div id='jogador' class='anima1'></div>");
	$("#fundoGame").append("<div id='inimigo1' class='anima2'></div>");
	$("#fundoGame").append("<div id='inimigo2'></div>");
	$("#fundoGame").append("<div id='amigo' class='anima3'></div>");

    //Principais variáveis do jogo	
	var jogo = {}
    var TECLA = {
    W: 87,
    S: 83,
    D: 68
    }
    var velocidade_inimigo1 = 5;
    var velocidade_inimigo2 = 3;
    var posicaoY = parseInt(Math.random() * 334); // Number between 0 - 334
    
    jogo.pressionou = [];

    //Verifica se o usuário pressionou alguma tecla	
	
	$(document).keydown(function(e){
    jogo.pressionou[e.which] = true;
    });
    
    
    $(document).keyup(function(e){
    jogo.pressionou[e.which] = false;
    });

	//Game Loop
	jogo.timer = setInterval(loop,30); // 30 milisegundos
	
	function loop() {
	
	movefundo();
    movejogador();
    moveinimigo1();
    moveinimigo2();
	
	} // Fim da função loop()

    //Função que movimenta o fundo do jogo	
	function movefundo() {	
        esquerda = parseInt($("#fundoGame").css("background-position"));
        $("#fundoGame").css("background-position",esquerda-1);
        
        } // fim da função movefundo()

    function movejogador() {
	
        if (jogo.pressionou[TECLA.W]) {
            var topo = parseInt($("#jogador").css("top"));
            $("#jogador").css("top",topo-10);

            if (topo<=0) {		
                $("#jogador").css("top",topo);
            }
        }
            
        if (jogo.pressionou[TECLA.S]) {
            var topo = parseInt($("#jogador").css("top"));
            $("#jogador").css("top",topo+10);
            
            if (topo>=434) {	
                $("#jogador").css("top", 434);
                    
            }
        }
            
        if (jogo.pressionou[TECLA.D]) {
            //Chama função Disparo	
        }
    } // fim da função movejogador()

    function moveinimigo1() {
        posicaoX = parseInt($("#inimigo1").css("left"));
        $("#inimigo1").css("left",posicaoX-velocidade_inimigo1);
        $("#inimigo1").css("top",posicaoY);
            
        if (posicaoX<=0) {
            posicaoY = parseInt(Math.random() * 334);
            $("#inimigo1").css("left",694);
            $("#inimigo1").css("top",posicaoY);
        }
    } //Fim da função moveinimigo1()

    function moveinimigo2() {
        posicaoX = parseInt($("#inimigo2").css("left"));
        $("#inimigo2").css("left", posicaoX-velocidade_inimigo2);

        if (posicaoX <= 0) {
            $("#inimigo2").css("left", 775);
        }
    }

} // Fim da função start