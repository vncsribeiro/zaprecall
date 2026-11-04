import { useState } from 'react';

export default function Sidebar({ deck, result, changeIcon }) {


    return (
        <>
            {result.length === deck.length && (
                <div className="mensagem-final">
                    <h2>PARABÉNS!</h2>
                    <p>Você concluiu todos os flashcards!</p>
                </div>
            )}
            <div className="sidebar">
            <div>
                {`${result.length}/${deck.length} CONCLUÍDOS`}
            </div>
            <div>
                {result.map(value => changeIcon(value))}
            </div>
            
        </div>
        </>
        
    );
}