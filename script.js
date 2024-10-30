$(document).ready(function() {
    let cidade;
    let valorFipe;

    // Função para buscar o CEP na BrasilAPI
    $("#btn-cep").click(function() {
        const cep = $("#cep").val().replace(/\D/g, '');  // Remove caracteres não numéricos
        let urlCep = "https://brasilapi.com.br/api/cep/v2/" + cep;

        $.get(urlCep, function(dataCep, statusCep) {
            if (statusCep === "success") {
                const rua = dataCep.street;
                const bairro = dataCep.neighborhood;
                cidade = dataCep.city;
                
                // Exibe Rua, Bairro e Cidade
                $("#resultado").html("Rua: " + rua + "<br>Bairro: " + bairro + "<br>Cidade: " + cidade);
            } else {
                $("#resultado").html("Erro ao buscar o CEP. Verifique se ele está correto.");
            }
        })
    });

    // Função para buscar o valor do carro na API FIPE da BrasilAPI
    $("#btn-fipe").click(function() {
        const codigoFipe = $("#fipe").val();
        let urlFipe = "https://brasilapi.com.br/api/fipe/preco/v1/"+codigoFipe;
        

        $.get(urlFipe, function(dataFipe, statusFipe) {
            if (statusFipe === "success" && dataFipe.length > 0) {
                valorFipe = parseFloat(dataFipe[0].valor.replace("R$", "").replace(".", "").replace(",", "."));
                $("#resultado").append("<br>Seu carro é: "+dataFipe[0].modelo+" ano "+dataFipe[0].anoModelo+" Valor FIPE: R$" + dataFipe[0].valor);
                console.log(dataFipe[0])
                
                // Verifica se a cidade é "Rio de Janeiro" e o valor do carro é maior que 30.000
                if (cidade && cidade.toLowerCase() === "rio de janeiro" && valorFipe > 30000) {
                    // $("#resultado").append("<br>Seu seguro foi liberado").css("color", "green");
                    $("#resultado").append("<div class='alert alert-success alert-dismissible' id='show'>");
                    $("#show").append("<button type='button' class='btn-close' data-bs-dismiss='alert'></button>")
                    $("#show").append("<strong>Sucesso !</strong> Seu seguro foi aprovado!!!.")
                    $("#show").append("</div>")                  
                }else {
                    $("#resultado").append("<br>Infelizmente o seguro não foi aceito").css("color", "red");
                }
            } else {
                $("#resultado").html("Erro ao buscar o valor FIPE. Verifique o código FIPE.");
            }
        })
    });
});





