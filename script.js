let result = document.getElementById('result');

function appendValue(value) {
  result.value += value;
}

function clearResult() {
  result.value = '';
}

function deleteChar() {
  result.value = result.value.slice(0, -1);
}

function calculateResult() {
  try {
    result.value = eval(result.value);
  } catch {
    result.value = 'Error';
  }
}
