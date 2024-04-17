import React, { useState } from "react";
import './Counter.css'

export function Counter() {

    const [contador, setContador] = useState(0)

    return (
        <div style={{
            marginTop: '20px',
            marginLeft: '20px',
            textAlign: 'center'
        }}>
            <h1>{contador}</h1>

            <div>
                <button onClick={() => setContador(contador - 1)}>Diminuir</button>

                <button onClick={() => setContador(contador + 1)}>Aumentar</button>
            </div>
        </div>
    )
}