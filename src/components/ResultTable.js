import React from "react";

const ResultTable =  ({ escopo }) => {
    return (
        <div style={{ marginTop: '20px' }}>
            <h2>Benefícios resultados do Projeto</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr style={{ backgroundColor: '#f2f2f2' }}>
                        <th style={{ padding: '10px', textAlign: 'left' }}>Benefícios/Resultados Esperados</th>
                        <th style={{ padding: '10px', textAlign: 'left' }}>Descrição</th>
                    </tr>
                </thead>
                <tbody>
                    {escopo.map((tarefa, index) => (
                        <tr key={index} style={{ borderBottom: '1px solid #ddd' }}>
                            <td style={{ padding: '10px' }}>{tarefa.tarefa}</td>
                            <td style={{ padding: '10px' }}>{tarefa.descricao}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ResultTable;