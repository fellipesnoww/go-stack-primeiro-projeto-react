import React, {useEffect, useState} from 'react';
import {useRouteMatch, Link} from 'react-router-dom';
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi';
import logoImage from '../../assets/logo.svg';

import {Header, RepositoryInfo, Issues} from './styles';

import api from '../../services/api';

interface RepositoryParams{
    repository: string;
}


interface Repository{
    full_name: string;
    owner: {
        login: string;
        avatar_url:string;
    };
    description: string;
    stargazers_count: number;
    forks_count: number;
    open_issues_count: number;
}

interface Issue{
    id: number;
    title: string;
    user: {
        login: string;
    };
    html_url: string;
}

const Repository:React.FC = () => {
    const { params } = useRouteMatch<RepositoryParams>();
    const [repository, setRepository] = useState<Repository | null>(null);
    const [issues, setIssues] = useState<Issue[]>([]);

    useEffect(() => {
        api.get(`repos/${params.repository}`).then(response => {
            setRepository(response.data);
        });

        api.get(`repos/${params.repository}/issues`).then(response => {
            setIssues(response.data);
        });
        
    }, [params.repository]);

    return(
        <>
            <Header>
                <img alt="logoImage"src={logoImage}/>
                <Link to="/">
                    <FiChevronLeft size={16}/>
                    Voltar
                </Link>
            </Header>

            {repository && (
                <RepositoryInfo>
                <header>
                    <img src={repository.owner.avatar_url} alt={repository.owner.login}/>
                    <div>
                        <strong>{repository.full_name}</strong>
                        <p>{repository.description}</p>
                    </div>                    
                </header>
                <ul>
                        <li>
                            <strong>{repository.stargazers_count}</strong>
                            <span>Stars</span>
                        </li>
                        <li>
                            <strong>{repository.forks_count}</strong>
                            <span>Forks</span>
                        </li>
                        <li>
                            <strong>{repository.open_issues_count}</strong>
                            <span>Issues Abertas</span>
                        </li>
                    </ul>
            </RepositoryInfo>
            )}
            
            <Issues>
                {issues.map(item => (
                    <a key={item.id} href={item.html_url}>                   
                        <div>
                            <strong>{item.title}</strong>
                            <p>{item.user.login}</p>
                        </div>                   
                        <FiChevronRight size={20}/>
                    </a>
                ))}
            </Issues>
        </>
    );
}

export default Repository;