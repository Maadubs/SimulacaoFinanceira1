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

    console.log(meses[x]);
    return meses[x];
}

obterMesAtual();
