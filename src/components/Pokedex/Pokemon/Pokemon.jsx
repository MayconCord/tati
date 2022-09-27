import React from "react";
import './Pokemon.css';

function Pokemon(props) {
    const {pokemon} = props;
    const type = pokemon.types[0].type.name;
    const style = `p-4 border ${type} card-pokemon`;
        return(
        <div className={style} >
                <div className="pokemon-image-container">
                    <img src={pokemon['sprites']['versions']['generation-v']['black-white']['animated']['front_default']} alt={pokemon.name} className="pokemon-image" />
                </div>
                <div className="card-body">
                    <div className="card-top">
                        <div>
                            <span>{pokemon.id}</span>
                            <h4>{pokemon.name}</h4>
                        </div>                    
                    </div>
                    <div className="card-bottom">
                        <div className="pokemon-type">
                            {pokemon.types.map((type, index) => {
                                return (
                                    <div key={index} className="pokemon-type-text">{type.type.name}</div>
                                )
                            })} 
                        </div>
                    </div>
            </div>            
        </div>
    )
}

export default Pokemon;