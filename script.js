console.log('Hello :)');

function checkOne() {
    document.getElementById('emptyCheckboxOne').classList.add('hide');
    document.getElementById('tickedCheckboxOne').classList.remove('hide');
}

function unCheckOne() {
    document.getElementById('emptyCheckboxOne').classList.remove('hide');
    document.getElementById('tickedCheckboxOne').classList.add('hide');
}

function checkTwo() {
    document.getElementById('emptyCheckboxTwo').classList.add('hide');
    document.getElementById('tickedCheckboxTwo').classList.remove('hide');
}

function unCheckTwo() {
    document.getElementById('emptyCheckboxTwo').classList.remove('hide');
    document.getElementById('tickedCheckboxTwo').classList.add('hide');
}

function checkThree() {
    document.getElementById('emptyCheckboxThree').classList.add('hide');
    document.getElementById('tickedCheckboxThree').classList.remove('hide');
}

function unCheckThree() {
    document.getElementById('emptyCheckboxThree').classList.remove('hide');
    document.getElementById('tickedCheckboxThree').classList.add('hide');
}