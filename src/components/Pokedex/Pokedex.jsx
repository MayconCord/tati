import React from "react";
import Pokemon from "./Pokemon/Pokemon";

function Pokedex(props) {

    const {pokemons, loading} = props;

    return(
        <div>
            <div>
            
            </div>
            <div>
            {loading ? (
                <div>Carregando...</div>
            ) : (
                <div className="row">
                    <div className="d-flex align-content-stretch justify-content-center flex-wrap">
                        {pokemons && pokemons.map((pokemon, index) => {
                            return (<div>
                                <Pokemon key={index} pokemon={pokemon} />
                            </div>)
                        })}
                    </div>
                </div>
                
            )}
            </div>
            <div>
            </div>
        </div>
    );
}

export default Pokedex