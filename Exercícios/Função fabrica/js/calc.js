function criaCalculadora() {
    return {
        display: document.querySelector('.display'),

        inicia() {
            alert('Iniciei');
            this.cliqueBotoes();
        },

        cliqueBotoes() {
            document.addEventListener('click', function (e) {
                const el = e.target;
                if (el.classList.contains('num')) {
                    this.btnParaDisplay(el.innerText);
                }
            }.bind(this));
        },
        btnParaDisplay(valor) {
            this.display;
        },
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();