function calculate() {
    const km = document.getElementById('km').value || 0;
    const electricity = document.getElementById('electricity').value || 0;

    const totalCO2 = (km * 30 * 0.12) + (electrity * 0.45);

    document.getElementById('result').innerText = 'Monthly CO₂: ' + totalCO2.toFixed(2) + ' kg';
}