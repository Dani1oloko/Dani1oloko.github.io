function mostrarTexto() {
            document.getElementById("texto").innerText = "Professor deixa a gente ir para a quadra por favor🙏!";
            document.getElementById("botaoInicial").style.display = "none";
            document.getElementById("botoesExtras").style.display = "block";
        }

        function respostaSim() {
            document.getElementById("texto").innerText = "Oba! Vamos jogar bola!⚽⚽⚽";
            document.getElementById("não").style.display = "none";
            document.getElementById("sim").style.display = "none";
            document.getElementById("imagemFutebol").style.display = "none";
            document.getElementById("videoFundo").style.display = "block";
        }

        function respostaNao() {
            document.getElementById("texto").innerText = "Noooo la lição nooo😭😭😭";
            document.getElementById("não").style.display = "none";
            document.getElementById("sim").style.display = "none";
            document.getElementById("imagemFutebol").style.display = "none";
            document.getElementById("nolapoliciano").style.display = "block";
        }
