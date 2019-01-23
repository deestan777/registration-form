//username - от 5 до 10 символов



var form = document.querySelector('.registration-form');

form.addEventListener('submit', submitForm);

function submitForm(event){
    event.preventDefault();
    var isValid = validateForm();

    if (isValid) {
        alert('Valid :-)')
        form.submit();
    } else {
        alert('Invalid form');
    }
}

function validateForm() {
    var isValid,
    isValidUsername,
    username = document.querySelector('.username'),
    isValidPassword,
    password = document.querySelector('.password'),
    isEqualPassword,
    repeatPassword = document.querySelector('.repeat-password'),
    isValidEmail,
    email = document.querySelector('.email'),
    isValidPhone,
    phone = document.querySelector('.phone'),
    license = document.querySelector('#license');

    isValidUsername = Validator.validateUsername(username.value);

    if (!isValidUsername) {
        username.classList.add('error');
    } else {
        username.classList.remove('error');
    }

    isValidPassword = Validator.validatePassword(password.value);

    isEqualPassword = password.value == repeatPassword.value;

    isValidEmail = Validator.validateEmail(email.value);

    isValidPhone = Validator.validatePhone(phone.value);

    isValid = isValidUsername 
    && isValidPassword 
    && isEqualPassword
    && isValidEmail
    && isValidPhone
    && license.checked;

    return isValid;
}

var Validator = {
    validateUsername: function(value){
        return value.trim().length >= 5 && value.trim().length <= 10;
    },
    validatePassword: function(value){
        var validLength,
            numberOfDigits,
            numberOfCapitalizedLetters;

        validLength = value.trim().length >= 6;

        for (var i = 0; i < value.length; i++) {
            if (isNaN(parseInt(value[i]))) {
            numberOfDigits = false;
            continue;
        } else {
            numberOfDigits = true;
            break;
            }
        }

        for (var j = 0; j < value.length; j++) {
            if (value[j] ==  value[j].toUpperCase()) {
                numberOfCapitalizedLetters = true;
                break;
            } else {
                numberOfCapitalizedLetters = false;
            }
        }

 return validLength && numberOfDigits && numberOfCapitalizedLetters;
    },
    validateEmail: function(value){
        return value.includes('@') && value.includes('.');
    },
    validatePhone: function(value){
        return value = true;
    }
};