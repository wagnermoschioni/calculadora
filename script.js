function addVal(valor) {
    aux = document.calculadora.expressao.value;
    if (valor=='CE')
        document.calculadora.expressao.value ='';
        else if (valor == '=')
        //document.calculadora.expressao.value = eval(document.calculadora.expressao.value.replaceAll(',','.')).toString().replaceAll('.',',');
        document.calculadora.expressao.value = eval(document.calculadora.expressao.value.replaceAll(',','.')).toLocaleString('pt-BR');
        else if (valor == '←') {
        aux = aux.substr(0, aux.length -1)
        document.calculadora.expressao.value = aux
    }   else if (valor == 0 && aux == '')
    document.calculadora.expressao.value = ''
        else
        document.calculadora.expressao.value += valor;
}

document.querySelectorAll('form span').forEach(item => {
 item.addEventListener('click', (e) => {
    addVal(item.innerHTML);
 })
});