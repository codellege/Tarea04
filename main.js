let inputs = document.getElementById('userInput');
let newalert = document.getElementById('otheralert');
inputs.addEventListener('keypress', validar);

let text = '';

function validar(e) {
    if (e.code == 'Enter') {
        let number = Number(inputs.value);
        if (!isNaN(number)) {
            if (number > 0) {
                text = `<div class="alert bg-success text-white">
                    <strong>Positivo</strong>
                    </div>`
            } else if (number < 0) {
                text = `<div class="alert bg-danger text-white">
                    <strong>Negativo</strong>
                    </div>`
            } else {
                text = `<div class="alert bg-warning">
                    <strong>Neutral</strong>
                    </div>`
            }
        } else {
            text = `<div class="alert bg-dark text-white">
                    <strong>No es un numero</strong>
                    </div>`
        }

        newalert.innerHTML = text;
        e.target.value = '';
    }
}