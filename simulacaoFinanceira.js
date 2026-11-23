function simularInvestimento(valorInicial, taxa, meses) {
    let valor = valorInicial;
    while (meses) {
        valor = valor + valor * (taxa / 100);
        meses = meses - 1;
    }
    valor = Math.round(valor * 100) / 100;
    return valor;
}

const resultado = simularInvestimento(1000, 1.0, 12);

console.log(resultado);

const despesas = {
    alimentacao: 500,
    transporte: 150,
    aluguel: 1200,
    lazer: 200,
};

function gerenciarDespesas(despesas) {
    let totalDespesas = 0;
    for (let despesa in despesas) {
        totalDespesas += despesas[despesa];
    }
    return totalDespesas;
}

console.log(gerenciarDespesas(despesas));

function obterMesAtual() {
    const meses = [
        "Janeiroo",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro",
    ];
    const dataAtual = new Date(); // criar uma instancia
    let x = dataAtual.getMonth();

    return meses[x];
}

const investimentoInicial = 1000; // Valor inicial investido
const taxaMensal = 1.5; // Taxa de rendimento mensal em %
const meses = 12; // Duração do investimento
const metaInvestimento = 1500; // Meta para o saldo final do investimento
const metaOrcamento = 2000; // M

function gerarRelatorio(metaInvestimento, metaOrcamento) {
    const mes = obterMesAtual();
    const saldoFinalInvestimento = simularInvestimento(
        investimentoInicial,
        taxaMensal,
        meses,
    );
    const totalDespesa = gerenciarDespesas(despesas);
    console.log(`Mês: ${mes}`);
    console.log(`Saldo final do investimento ${saldoFinalInvestimento}`);
    console.log(`Total das despesas: ${totalDespesa}`);

    if (metaOrcamento < totalDespesa) {
        console.log(
            "Excedente em relação ao orçamento: " +
                (totalDespesa - metaOrcamento) +
                " Valor Excedido",
        );
    } else {
        console.log(
            "Economia em relação ao orçamento: " +
                (metaOrcamento - totalDespesa) +
                " Valor economizado",
        );
    }
    if (metaInvestimento <= saldoFinalInvestimento) {
        console.log("Meta atingida!" + saldoFinalInvestimento);
        console.log("Meta: " + metaInvestimento);
        console.log("Valor atingido: " + saldoFinalInvestimento);
    } else {
        console.log("Meta não atingida!");
        console.log("Meta: " + metaInvestimento);
        console.log("Valor atingido: " + saldoFinalInvestimento);
    }

    console.log("-------- RESUMO DAS DESPESAS --------");

    for (despesa in despesas) {
        console.log(`${despesa}: ${despesas[despesa]}`);
    }
}

gerarRelatorio(metaInvestimento, metaOrcamento);
