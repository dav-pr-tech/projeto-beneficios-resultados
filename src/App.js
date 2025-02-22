import React, { useState } from 'react';
import ResultForm from './components/ResultForm';
import ResultTable from './components/ResultTable';

function App() {
    const [escopo, setEscopo] = useState([]);

    const handleAdicionarTarefa = (novasTarefas) => {
        setEscopo([...escopo, ...novasTarefas]);
    };

    const salvarJSON = () => {
        const jsonEscopo = JSON.stringify(escopo);
        const blob = new Blob([jsonEscopo], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'beneficios-resultados.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    const carregarJSON = (event) => {
        const fileReader = new FileReader();
        fileReader.onload = (e) => {
            try {
                const content = JSON.parse(e.target.result);
                setEscopo(content);
            } catch (error) {
                console.error('Erro ao carregar arquivo JSON:', error);
                alert('Erro ao carregar arquivo JSON. Verifique o formato do arquivo.');
            }
        };
        fileReader.readAsText(event.target.files[0]);
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>Projeto de Benefícios-resultados</h1>
            </header>
            <main>
                <ResultForm onAdicionarTarefa={handleAdicionarTarefa} />
                <ResultTable escopo={escopo} />
                <div>
                    <button onClick={salvarJSON}>Salvar como JSON</button>
                    <label htmlFor="uploadJson">
                        <input
                            id="uploadJson"
                            type="file"
                            style={{ display: 'none' }}
                            onChange={carregarJSON}
                        />
                        <button type="button" onClick={() => document.getElementById('uploadJson').click()}>
                            Carregar JSON
                        </button>
                    </label>
                </div>
            </main>
        </div>
    );
}

export default App;
