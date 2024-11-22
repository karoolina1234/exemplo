import React, { useState, useEffect } from 'react';

const Home = () => {
  const [data] = useState([
    { id: 1, nome: 'Carlos Silva', email: 'carlos.silva@example.com' },
    { id: 2, nome: 'Maria Oliveira', email: 'maria.oliveira@example.com' },
    { id: 3, nome: 'João Santos', email: 'joao.santos@example.com' },
    { id: 4, nome: 'Ana Pereira', email: 'ana.pereira@example.com' },
    { id: 5, nome: 'Pedro Souza', email: 'pedro.souza@example.com' },
  ]);
  const [filteredData, setFilteredData] = useState(data);
  const [searchTerm, setSearchTerm] = useState('');

  // Filtra os dados com base no termo de busca
  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    // Filtra os dados
    const filtered = data.filter(
      (item) =>
        item.nome.toLowerCase().includes(term) ||
        item.email.toLowerCase().includes(term)
    );
    setFilteredData(filtered);
  };

  useEffect(() => {
    // Inicializa a tabela com todos os dados
    setFilteredData(data);
  }, [data]);

  return (
    <div className="w3-container w3-padding-32">
      <h1 className="w3-center">Tela de Filtro e Tabela</h1>

      {/* Filtro de busca */}
      <div className="w3-row w3-padding-16">
        <div className="w3-col s12">
          <input
            type="text"
            className="w3-input w3-border w3-large"
            placeholder="Buscar por nome ou e-mail..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
      </div>

      {/* Tabela */}
      <table className="w3-table w3-striped w3-bordered w3-hoverable w3-centered">
        <thead>
          <tr className="w3-blue">
            <th>ID</th>
            <th>Nome</th>
            <th>E-mail</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.nome}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
