var nomes = [
    'Débito',
    '1x',
    '2x',
    '3x',
    '4x',
    '5x',
    '6x',
    '7x',
    '8x',
    '9x',
    '10x',
    '11x',
    '12x',
    'Pix',
    
]

var taxas = [ // PRIMEIRA LISTA 1 DIA UTIL - SEGUNDA LISTA NO MESMO DIA
    ['Pro', [// TAXAS VISA E MASTERCARD:
               [0.74, 0.74, 3.99, 4.99, 5.99, 6.99, 7.99, 8.99, 8.99, 8.99, 8.99, 8.99, 8.99, 0.99],
               [0.74, 0.74, 3.99, 4.99, 5.99, 6.99, 7.99, 8.99, 8.99, 8.99, 8.99, 8.99, 8.99]],
               // TAXAS ELO, AME, HIPERCARD:
               [[2.57, 4.34, 7.02, 7.58, 8.38, 9.38, 10.38, 10.98, 11.38, 12.38, 12.88, 13.74, 13.78, 0.99],
               [2.57, 4.34, 7.02, 7.58, 8.38, 9.38, 10.38, 10.98, 11.38, 12.38, 12.88, 13.74, 13.78, 0.99]],

               
            ],
    ['Pro Regular 2k', [// TAXAS VISA E MASTERCARD:
                      [1.36, 3.14, 5.63, 6.19, 6.99, 7.99, 8.99, 9.59, 9.99, 10.99, 11.49, 12.35, 12.39, 0.99],
                      [1.68, 3.58, 6.98, 7.59, 8.47, 9.34, 10.18, 11.03, 11.88, 12.38, 12.59, 12.99, 13.08, 0.99]],
                      // TAXAS ELO, AME, HIPERCARD:
                      [[2.55, 4.33, 7.02, 7.58, 8.38, 9.38, 10.38, 10.98, 11.38, 12.38, 12.88, 13.74, 13.78, 0.99],
                      [2.87, 4.77, 8.37, 8.98, 9.86, 10.73, 11.57, 12.42, 13.27, 13.77, 13.98, 14.38, 14.47, 0.99]],
                      
                    
                    ],
    ['Pro regular 20k', [// TAXAS VISA E MASTERCARD:
              [0.99, 2.99, 5.59, 6.15, 6.95, 7.95, 8.95, 9.55, 9.99, 9.99, 9.99, 9.99, 9.99, 0.99],
              [1.31, 3.43, 6.94, 7.55, 8.43, 9.30, 10.14, 10.39, 10.64, 10.64, 10.68, 10.68, 10.68, 0.99]],
              // TAXAS ELO, AME, HIPERCARD:              
              [[2.18, 4.18, 6.98, 7.54, 8.34, 9.34, 10.34, 10.94, 11.34, 11.38, 11.38, 11.38, 11.38, 0.99],
              [2.50, 4.62, 8.33, 8.94, 9.82, 10.69, 11.53, 11.78, 12.03, 12.07, 12.07, 12.07, 12.07, 0.99]]
            
            ],
    ['Pro regular -2k', [// TAXAS VISA E MASTERCARD:
            [1.69, 3.49, 8.99, 10.99, 11.99, 12.99, 13.99, 14.99, 15.99, 16.99, 17.99, 17.99, 17.99, 0.99],
            [1.98, 4.49, 9.99, 11.99, 12.99, 13.99, 14.99, 15.99, 16.99, 17.99, 18.99, 18.99, 18.99, 0.99]],
            // TAXAS ELO, AME, HIPERCARD:              
            [[2.69, 4.68, 10.18, 12.18, 13.18, 14.18, 15.18, 16.18, 17.18, 18.18, 19.18, 19.18, 19.18, 0.99],
            [2.98, 5.68, 11.18, 13.18, 14.18, 15.18, 16.18, 17.18, 18.18, 19.18, 20.18, 20.18, 20.18, 0.99]]
            
               
            ],
    ['Ultra', [// TAXAS VISA E MASTERCARD:
                [1.29, 3.09, 5.59, 6.15, 6.95, 7.95, 8.95, 9.55, 9.95, 10.95, 10.99, 10.99, 10.99, 0.99],
                [1.69, 3.49, 6.59, 7.15, 7.95, 8.95, 9.95, 10.55, 10.95, 11.95, 11.99, 11.99, 11.99, 0.99]],
                // TAXAS ELO, AME, HIPERCARD: 
                [[2.48, 4.28, 6.98, 7.54, 8.34, 9.34, 10.34, 10.94, 11.34, 12.34, 12.38, 12.38, 12.38, 0.99],
                [2.88, 4.68, 7.98, 8.54, 9.34, 10.34, 11.34, 11.94, 12.34, 13.34, 13.38, 13.38, 13.38, 0.99]],
            
               
            ],
    ['Básico', [// TAXAS VISA E MASTERCARD:
                [1.98, 4.98, 9.91, 11.29, 12.64, 13.97, 15.27, 16.55, 17.81, 19.04, 20.24, 21.43, 22.59, 0.99],
                [2.99, 5.99, 10.91, 12.29, 13.64, 14.97, 16.27, 17.55, 18.81, 20.04, 21.24, 22.43, 23.59, 0.99]],
                // TAXAS ELO, AME, HIPERCARD: 
                [[2.98, 6.17, 11.10, 12.48, 13.83, 15.16, 16.46, 17.74, 19.00, 20.23, 21.43, 22.62, 23.78, 0.99],
                [2.98, 6.17, 12.10, 13.48, 14.83, 16.16, 17.46, 18.74, 20.00, 21.23, 22.43, 23.62, 24.78, 0.99]],
            
               
            ],

];

// variaveis do HTML

const planoSelecionado = document.getElementById('plano');

const outputValor = document.getElementById('valor');
const inputValor = document.getElementById('valor-venda');
const valorPagoCliente = document.getElementById('valor_pago_cliente');
const totalTaxas = document.getElementById('totalTaxas');
const valorTaxas = document.getElementById('valorTaxas');
const recebimento = document.getElementById('recebimento');
const bandeira = document.getElementById('bandeira');

const parcelas = document.getElementById('parcelamento');
const qtdParcelas = document.getElementById('qtd_parcelamento');
const opts_parcelas = parcelas.children;

const repassarTaxas = document.getElementById('repassarTaxas');

const formatarValor = (valor) => {
    let valorFormatado = valor.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      });

      return valorFormatado;
}

function atualizarValor (taxas_plano) {
    
    // OBTER O VALOR DA VENDA, CONVERTER EM FLOAT E FAZER O CALCULO
    let valorPreenchido = parseFloat(inputValor.value);
    let taxa = taxas_plano[parcelas.value];

    let valorFinal = 0;
    let clienteValor = 0;
    console.log(taxa);
    if (repassarTaxas.value === "false") {
        valorFinal = valorPreenchido - (taxa/100 * valorPreenchido);
        clienteValor = valorPreenchido
    }
    else {
        let inteiro = 1 - (taxa/100);
        
        valorFinal = valorPreenchido;
        clienteValor = valorPreenchido / inteiro;

    }

    // FORMATAR EM DUAS CASAS DECIMAIS E TROCAR '.' POR ','

    let valorFormatado = formatarValor(valorFinal);
    let clienteValorFormatado = formatarValor(clienteValor);
    let valorParcelas = formatarValor(clienteValor/parcelas.value);
    let valorTaxasFormatado = formatarValor(clienteValor - valorFinal);

    if (repassarTaxas.value == "true") {
        valorTaxasFormatado = (clienteValor - valorPreenchido).toFixed(2).replace('.', ',');
    }

    outputValor.innerHTML =   valorFormatado;
    valorPagoCliente.innerText = clienteValorFormatado;
    qtdParcelas.innerHTML = `${parcelas.value}x de R$ ${valorParcelas}`;
    totalTaxas.innerHTML = taxa + '%';
    valorTaxas.innerHTML = valorTaxasFormatado;

    if (parcelas.value == 0) {
        qtdParcelas.innerHTML = `À vista`;
    }

}

function atualizarDados (event) {
    console.log(222);
    // Pega as taxas no Array de taxas para depois substituir nas options no html
    let taxas_plano = taxas[planoSelecionado.value][bandeira.value][recebimento.value];
    console.log(taxas[planoSelecionado.value][bandeira.value], '  <-' );
    // percorre as options (cada parcela do HTML) para atualizar e add a taxa certa do plano
    for (i = 0; i < opts_parcelas.length; i++) {
        console.log(taxas_plano[i], ' aq');
        opts_parcelas[i].innerHTML = `${nomes[i]} <span class="porcentagem">(${taxas_plano[i]}%)</span>`;
        
    }

    // atualizar valor final
    atualizarValor(taxas_plano);
}

planoSelecionado.addEventListener('change', atualizarDados);
repassarTaxas.addEventListener('change', atualizarDados);
parcelas.addEventListener('change', atualizarDados);
recebimento.addEventListener('change', atualizarDados);
inputValor.addEventListener('input', atualizarDados);
bandeira.addEventListener('change', atualizarDados);

// atualiza as taxas para o plano selecionado quando o site é carregado
atualizarDados({ target: planoSelecionado });

