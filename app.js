// https://www.omnicalculator.com/finance/information-ratio

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const v4 = document.getElementById('v4');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const informationratioRadio = document.getElementById('informationratioRadio');
const beginningportfoliovalueRadio = document.getElementById('beginningportfoliovalueRadio');
const endingportfoliovalueRadio = document.getElementById('endingportfoliovalueRadio');
const benchmarkreturnRadio = document.getElementById('benchmarkreturnRadio');
const trackingerrorRadio = document.getElementById('trackingerrorRadio');

let informationratio;
let beginningportfoliovalue = v1;
let endingportfoliovalue = v2;
let benchmarkreturn = v3;
let trackingerror = v4;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');
const variable4 = document.getElementById('variable4');

informationratioRadio.addEventListener('click', function() {
  variable1.textContent = 'Beginning portfolio value';
  variable2.textContent = 'Ending portfolio value';
  variable3.textContent = 'Benchmark return';
  variable4.textContent = 'Tracking error';
  beginningportfoliovalue = v1;
  endingportfoliovalue = v2;
  benchmarkreturn = v3;
  trackingerror = v4;
  result.textContent = '';
});

beginningportfoliovalueRadio.addEventListener('click', function() {
  variable1.textContent = 'Information ratio';
  variable2.textContent = 'Ending portfolio value';
  variable3.textContent = 'Benchmark return';
  variable4.textContent = 'Tracking error';
  informationratio = v1;
  endingportfoliovalue = v2;
  benchmarkreturn = v3;
  trackingerror = v4;
  result.textContent = '';
});

endingportfoliovalueRadio.addEventListener('click', function() {
  variable1.textContent = 'Information ratio';
  variable2.textContent = 'Beginning portfolio value';
  variable3.textContent = 'Benchmark return';
  variable4.textContent = 'Tracking error';
  informationratio = v1;
  beginningportfoliovalue = v2;
  benchmarkreturn = v3;
  trackingerror = v4;
  result.textContent = '';
});

benchmarkreturnRadio.addEventListener('click', function() {
  variable1.textContent = 'Information ratio';
  variable2.textContent = 'Beginning portfolio value';
  variable3.textContent = 'Ending portfolio value';
  variable4.textContent = 'Tracking error';
  informationratio = v1;
  beginningportfoliovalue = v2;
  endingportfoliovalue = v3;
  trackingerror = v4;
  result.textContent = '';
});

trackingerrorRadio.addEventListener('click', function() {
  variable1.textContent = 'Information ratio';
  variable2.textContent = 'Beginning portfolio value';
  variable3.textContent = 'Ending portfolio value';
  variable4.textContent = 'Benchmark return';
  informationratio = v1;
  beginningportfoliovalue = v2;
  endingportfoliovalue = v3;
  benchmarkreturn = v4;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(informationratioRadio.checked)
    result.textContent = `Information ratio = ${computeinformationratio().toFixed(2)}`;

  else if(beginningportfoliovalueRadio.checked)
    result.textContent = `Beginning portfolio value = ${computebeginningportfoliovalue().toFixed(2)}`;

  else if(endingportfoliovalueRadio.checked)
    result.textContent = `Ending portfolio value = ${computeendingportfoliovalue().toFixed(2)}`;

  else if(benchmarkreturnRadio.checked)
    result.textContent = `Benchmark return = ${computebenchmarkreturn().toFixed(2)}`;

  else if(trackingerrorRadio.checked)
    result.textContent = `Tracking error = ${computetrackingerror().toFixed(2)}`;
})

// calculation

// information ratio = (portfolio return - benchmark return) / tracking error
// portfolio return = (ending portfolio value - beginning portfolio value) / beginning portfolio value

function computeinformationratio() {
  return (((Number(endingportfoliovalue.value) - Number(beginningportfoliovalue.value)) / Number(beginningportfoliovalue.value)) - (Number(benchmarkreturn.value) / 100)) / (Number(trackingerror.value) / 100);
}

function computebeginningportfoliovalue() {
  return Number(costofGoodsManufactured.value) - Number(directLaborCost.value) - Number(factoryOverheadCost.value) - Number(openingWorkinProcessInventory.value) + Number(endingWorkinProcessInventory.value);
}

function computeendingportfoliovalue() {
  return (((Number(informationratio.value) * (Number(trackingerror.value) / 100)) + (Number(benchmarkreturn.value) / 100)) * Number(beginningportfoliovalue.value)) + Number(beginningportfoliovalue.value);
}

function computebenchmarkreturn() {
  return (((Number(endingportfoliovalue.value) - Number(beginningportfoliovalue.value)) / Number(beginningportfoliovalue.value)) - (Number(informationratio.value) * (Number(trackingerror.value) / 100))) * 100;
}

function computetrackingerror() {
  return ((((Number(endingportfoliovalue.value) - Number(beginningportfoliovalue.value)) / Number(beginningportfoliovalue.value)) - (Number(benchmarkreturn.value) / 100)) / Number(informationratio.value)) * 100;
}