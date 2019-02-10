var converter = (function () {
  document.querySelector('.output').style.visibility = 'hidden';
  document.querySelector('.convert-lbs').addEventListener('input', convertData);

  function convertData(e) {
    var pounds,kilogram,grams,tons;
    document.querySelector('.output').style.visibility = 'visible';
    pounds = e.target.value;

    kilogram = pounds * 0.453592;
    grams = pounds * 453.592;
    tons = pounds * 0.0005;

    document.querySelector('.kg-value').innerHTML = kilogram;
    document.querySelector('.grams-value').innerHTML = grams;
    document.querySelector('.tons-value').innerHTML = tons;
  }
})();


