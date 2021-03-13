import React, { useState } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";

const RepositoriesList: React.FC = () => {
    const [term, setTerm] = useState<string>("");
    const { data, loading, error } = useTypedSelector((state) => state.repositories);
    const { SearchRepositories } = useActions();

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        SearchRepositories(term);
    };
    console.log(data, loading, error);

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input value={term} onChange={(e) => setTerm(e.target.value)} />
                <button>Search!</button>
            </form>
            { loading && <h3>Loading....</h3>}
            { error && <h3>{error}</h3>}
            { !error && !loading && (
                <ul>
                    {data.map(elem => (
                        <li key={elem}>{elem}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default RepositoriesList;