import React, {useState} from "react";

function Search(props) {

    const [input, setInput] = useState('');

    const onChangeSearch = (e) => {
        setInput(e.target.value);
        props.onChangeSearchValue(e.target.value);
    }

    return(
        <div className="searchbar-container p-5">
            <div className="searchbar">
                <input inputMode="text" value={input} onChange={onChangeSearch} className="form-control" placeholder="Digite o nome do pokemon"/>
            </div>
            <div className="searchbar-btn">
            </div>
        </div>
    );
}

export default Search;