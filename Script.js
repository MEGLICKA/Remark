
    window.onload = function() {
        document.getElementById('speedRomeoSlider').addEventListener('input', updateSimulation);
        document.getElementById('speedJulietSlider').addEventListener('input', updateSimulation);

        function updateSimulation() {
            let speedRomeo = parseFloat(document.getElementById('speedRomeoSlider').value);
            let speedJuliet = parseFloat(document.getElementById('speedJulietSlider').value);

            document.getElementById('romeoSpeedValue').innerText = speedRomeo.toFixed(1);
            document.getElementById('julietSpeedValue').innerText = speedJuliet.toFixed(1);

            let distance = 10;  // Privzeta razdalja med hišama
            let timeToMeet = distance / (speedRomeo + speedJuliet);
            let resultText = `Srečata se po ${timeToMeet.toFixed(2)} urah.`;
            document.getElementById('sliderOutput').innerText = resultText;
        }
    };

