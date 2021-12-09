import { RepositoryItem } from "./RepositoryItem";
import {useState, useEffect} from 'react';

import '../styles/repositories.scss';

interface Repository {
    name: string;
    description: string;
    html_url: string;
}

export function RepositoryList(){
    const [repositories, setrepositories] = useState<Repository[]>([]);
    //1 argumento -qual funcao quero executar, 
    //2 argumento- quando eu quero executar 
    // [var] - quando a var mudar / [] - executar uma unica vez / vazio - ficar em loop
    useEffect(()=>{
        fetch('https://api.github.com/users/FelipeTorress/repos')
            .then(response => response.json())
                .then(data => setrepositories(data))
    },[])

    return (
        <section className="repository-list">
            <h1>Lista de Repositorios</h1>
            <ul>
                {repositories.map(repository => <RepositoryItem key={repository.name} repository = {repository}/>)}
            </ul>
        </section>
    );
}