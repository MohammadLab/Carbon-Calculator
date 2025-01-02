function calculate() {
    const km = parseFloat(document.getElementById('km').value) || 0;
    const electricity = parseFloat(document.getElementById('electricity').value) || 0;

    const totalCO2 = (km * 30 * 0.12) + (electricity * 0.45);

    document.getElementById('result').innerText = 'Monthly CO2: ' + totalCO2.toFixed(2) + ' kg';
}
