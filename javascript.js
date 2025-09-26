//cria uma função para mostrar o texto e os botões
function mostrarTexto() {
            //quando o botão inicial for clicado, a pergunta e os botões de respostas aparecem
            document.getElementById("texto").innerText = "Professor deixa a gente ir para a quadra por favor🙏!";
            document.getElementById("botaoInicial").style.display = "none";
            document.getElementById("botoesExtras").style.display = "block";
        }
        //cria uma função para a resposta sim
        function respostaSim() {
            document.getElementById("texto").innerText = "Oba! Vamos jogar bola!⚽⚽⚽";
            document.getElementById("não").style.display = "none";
            document.getElementById("sim").style.display = "none";
            document.getElementById("imagemFutebol").style.display = "none";
            document.getElementById("videoNey").style.display = "block";
        }
        //cria uma função para a resposta não
        function respostaNao() {
            document.getElementById("texto").innerText = "Noooo la lição nooo😭😭😭";
            document.getElementById("não").style.display = "none";
            document.getElementById("sim").style.display = "none";
            document.getElementById("imagemFutebol").style.display = "none";
            document.getElementById("videoPolicia").style.display = "block";
        }