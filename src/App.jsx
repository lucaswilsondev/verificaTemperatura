import React, { useState } from 'react';
import regionsData from './regions.json';

function App() {
  const [region, setRegion] = useState('');
  const [temperatureData, setTemperatureData] = useState(null);

  const handleInputChange = (e) => {
    setRegion(e.target.value);
  };

  const handleSearch = () => {
    const regionInfo = regionsData.regions.find(r => r.name.toLowerCase() === region.toLowerCase());
    if (regionInfo) {
      setTemperatureData(regionInfo);
    } else {
      setTemperatureData(null);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Temperaturas por Região</h1>
      <input
        type="text"
        placeholder="Digite o nome da região"
        value={region}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>Buscar</button>

      {temperatureData ? (
        <div>
          <h2>Região: {temperatureData.name}</h2>
          <p>Temperatura Média: {temperatureData.average_temperature}°C</p>
          <p>Manhã: {temperatureData.temperatures.morning}°C</p>
          <p>Tarde: {temperatureData.temperatures.afternoon}°C</p>
          <p>Noite: {temperatureData.temperatures.night}°C</p>
        </div>
      ) : (
        <p>Região não encontrada.</p>
      )}
    </div>
  );
}

export default App;
