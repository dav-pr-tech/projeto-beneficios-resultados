import React, { useState } from 'react';

const ResultForm  = ({ onAdicionarTarefa }) => {
    const [tarefa, setTarefa] = useState('');
    const [descricao, setDescricao] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        const novaTarefa = {
            tarefa,
            descricao,

        };
        onAdicionarTarefa([novaTarefa]);
        setTarefa('');
        setDescricao('');
    };

    return (
        <div style={{ marginBottom: '50px' }}>
            <h2>Adicionar Benefícios-resultados</h2>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: '300px' }}>
                <label>
                Benefícios/Resultados Esperados:
                    <input type="text" value={tarefa} onChange={(e) => setTarefa(e.target.value)} required />
                </label>
                <label>
                    Descrição:
                    <input type="text" value={descricao} onChange={(e) => setDescricao(e.target.value)} required />
                </label>
                <button type="submit" style={{ marginTop: '10px' }}>Adicionar Benefícios-resultados</button>
            </form>
        </div>
    );
};

export default ResultForm; 