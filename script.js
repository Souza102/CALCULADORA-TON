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
    
]

var taxas = [ // PRIMEIRA LISTA 1 DIA UTIL - SEGUNDA LISTA NO MESMO DIA
    ['Black', [// TAXAS VISA E MASTERCARD:
               [0.79, 0.79, 3.99,4.99, 5.99, 6.99, 6.99, 6.99, 6.99, 6.99, 6.99, 6.99, 6.99],
               [0.79, 0.79, 3.99,4.99, 5.99, 6.99, 6.99, 6.99, 6.99, 6.99, 6.99, 6.99, 6.99]],
               // TAXAS ELO, AME, HIPERCARD:
               [[2.57, 4.34, 7.02, 7.58, 8.38, 9.38, 10.38, 10.98, 11.38, 12.38, 12.88, 13.74, 13.28],
               [1.29, 1.29, 4.49, 5.49, 5.49, 7.49, 8.49, 9.49, 9.49, 9.49, 9.49, 9.49, 9.49]],

               
            ],
    ['Black Padrão', [// TAXAS VISA E MASTERCARD:
                      [1.38, 3.15, 5.63,6.19, 6.99, 7.99, 8.99, 9.59, 9.99, 10.99, 11.49, 12.35, 12.39],
                      [2.38, 4.15, 6.63, 7.19, 7.99, 8.99, 9.99, 10.59, 10.99, 11.99, 12.49, 13.35, 13.39]],
                      // TAXAS ELO, AME, HIPERCARD:
                      [[2.57, 4.34, 7.02, 7.58, 8.38, 9.38, 10.38, 10.98, 11.38, 12.38, 12.88, 13.74, 13.28],
                      [3.57, 5.34, 8.02, 8.58, 9.38, 10.38, 11.38, 11.98, 12.38, 13.38, 13.88, 14.74, 14.78]],
                      
                    
                    ],
    ['Mega', [// TAXAS VISA E MASTERCARD:
              [1.69, 3.49, 8.99,10.99, 11.99, 12.99, 13.99, 14.99, 15.99, 16.99, 17.99, 17.99, 17.99],
              [2.69, 4.49, 9.99, 11.99, 12.99, 13.99, 14.99, 15.99, 16.99, 17.99, 18.99, 18.99, 18.99]],
              // TAXAS ELO, AME, HIPERCARD:              
              [[2.88, 4.68, 10.38, 12.38, 13.38, 14.38, 15.38, 16.38, 17.38, 18.38, 19.38, 19.38, 19.38],
              [3.88, 5.68, 11.38, 13.38, 14.38, 15.38, 16.38, 17.38, 18.38, 19.38, 20.38, 20.38, 20.38]]
            
            ],
    ['Básico', [// TAXAS VISA E MASTERCARD:
                [1.99, 4.99, 9.91,11.29, 12.64, 13.97, 15.27, 16.55, 17.81, 19.04, 20.24, 21.43, 22.59],
                [2.99, 5.99, 10.91, 12.29, 13.64, 14.97, 16.27, 17.55, 18.81, 20.04, 21.24, 22.43, 23.59]],
                // TAXAS ELO, AME, HIPERCARD: 
                [[2.99, 6.18, 11.10, 12.48, 13.83, 15.16, 16.46, 17.74, 19.00, 20.23, 21.43, 22.62, 23.78],
                [3.99, 7.18, 12.10, 13.48, 14.83, 16.16, 17.46, 18.74, 20.00, 21.23, 22.43, 23.62, 24.78]],
            
               
            ],
    ['Turbo + Promo', [// TAXAS VISA E MASTERCARD:
                [0.79, 0.79, 3.99,4.99, 5.99, 6.99, 6.99, 6.99, 6.99, 6.99, 6.99, 6.99, 6.99],
                [0.79, 0.79, 3.99,4.99, 5.99, 6.99, 6.99, 6.99, 6.99, 6.99, 6.99, 6.99, 6.99]],
                // TAXAS ELO, AME, HIPERCARD:
                [[2.48, 4.28, 7.02, 7.58, 8.38, 9.38, 10.38, 10.98, 11.38, 12.38, 12.88, 12.94, 12.98],
                [3.48, 5.28, 8.02, 8.58, 9.38, 10.38, 11.38, 11.98, 12.38, 13.38, 13.88, 13.94, 13.98]],
        
           
        ],
    ['Turbo + Regular', [// TAXAS VISA E MASTERCARD:
                [1.29, 3.09, 5.63, 6.19, 6.99, 7.99, 8.99, 9.59, 9.99, 10.99, 11.49, 11.55, 11.59],
                [2.29, 4.09, 6.63, 7.19, 7.99, 8.99, 9.99, 10.59, 10.99, 11.99, 12.49, 12.55, 12.59]],
                // TAXAS ELO, AME, HIPERCARD:
                [[2.48, 4.28, 7.02, 7.58, 8.38, 9.38, 10.38, 10.98, 11.38, 12.38, 12.88, 12.94, 12.98],
                [3.48, 5.28, 8.02, 8.58, 9.38, 10.38, 11.38, 11.98, 12.38, 13.38, 13.88, 13.94, 13.98]],  
        ],
    ['Turbo -10k', [// TAXAS VISA E MASTERCARD:
                [1.45, 3.25, 6.09, 6.89, 7.69, 8.69, 9.69, 10.39, 10.99, 11.99, 12.59, 13.59, 13.99],
                [2.45, 4.25, 7.09, 7.89, 8.69, 9.69, 10.69, 11.39, 11.99, 12.99, 13.59, 14.59, 14.99]],
                // TAXAS ELO, AME, HIPERCARD:
                [[2.64, 4.44, 7.48, 8.28, 9.08, 10.08, 11.08, 11.78, 12.38, 13.38, 13.98, 14.98, 15.38],
                [3.64, 5.44, 8.48, 9.28, 10.08, 11.08, 12.08, 12.78, 13.38, 14.38, 14.98, 15.98, 16.38]],  
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

