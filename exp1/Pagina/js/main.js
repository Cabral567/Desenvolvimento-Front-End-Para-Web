// This file will include JavaScript for functionalities such as input masks for CPF, phone, and CEP.

document.addEventListener('DOMContentLoaded', function() {
    const cpfInput = document.getElementById('cpf');
    const phoneInput = document.getElementById('phone');
    const cepInput = document.getElementById('cep');

    function applyMask(input, mask) {
        input.addEventListener('input', function() {
            let value = input.value.replace(/\D/g, '');
            let formattedValue = '';
            let maskIndex = 0;

            for (let i = 0; i < value.length; i++) {
                if (mask[maskIndex] === '0') {
                    formattedValue += value[i];
                    maskIndex++;
                } else {
                    formattedValue += mask[maskIndex];
                    maskIndex++;
                    i--; // Stay on the same character
                }
                if (maskIndex >= mask.length) break;
            }
            input.value = formattedValue;
        });
    }

    applyMask(cpfInput, '000.000.000-00');
    applyMask(phoneInput, '(00) 00000-0000');
    applyMask(cepInput, '00000-000');
});