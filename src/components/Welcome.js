import React from 'react';

class Welcome extends React.Component{
    render(){
        return(
            <div>
                <h3>Lista de {this.props.name}</h3>
                <ul>
                    <li>Desayunar</li>
                    <li>Actividad Preferida</li>
                    <li>Comer</li>
                    <li>Llegar a Casa</li>
                    <li>Descansar</li>
                </ul>
                <h3>Debe terminarse esta lista antes del {this.props.date}</h3>
            </div>
        );
    }
}

export default Welcome