import React from 'react';
import {FiChevronRight} from 'react-icons/fi';

import logoImage from '../../assets/logo.svg';

import {Title, Form, Repositories} from './styles';

const Dashboard:React.FC = () => {
    return(
        <>
            <img alt="logoImage"src={logoImage}/>
            <Title>Explore repositórios no Github.</Title>

            <Form action="">
                <input placeholder="Digite o nome do repositório"/>
                <button>Pesquisar</button>
            </Form>

            <Repositories>
                <a href="teste">
                    <img src="https://avatars.githubusercontent.com/u/48105194?s=460&u=6ebc9d607602161c75c2e9d4f22eb1cc80b3ce19&v=4" alt="avatar"/>
                    <div>
                        <strong>Teste React</strong>
                        <p>Testes do React JS </p>
                    </div>
                    <FiChevronRight size={20}/>
                </a>
                <a href="teste">
                    <img src="https://avatars.githubusercontent.com/u/48105194?s=460&u=6ebc9d607602161c75c2e9d4f22eb1cc80b3ce19&v=4" alt="avatar"/>
                    <div>
                        <strong>Teste React</strong>
                        <p>Testes do React JS </p>
                    </div>
                    <FiChevronRight size={20}/>
                </a>
                <a href="teste">
                    <img src="https://avatars.githubusercontent.com/u/48105194?s=460&u=6ebc9d607602161c75c2e9d4f22eb1cc80b3ce19&v=4" alt="avatar"/>
                    <div>
                        <strong>Teste React</strong>
                        <p>Testes do React JS </p>
                    </div>
                    <FiChevronRight size={20}/>
                </a>
                <a href="teste">
                    <img src="https://avatars.githubusercontent.com/u/48105194?s=460&u=6ebc9d607602161c75c2e9d4f22eb1cc80b3ce19&v=4" alt="avatar"/>
                    <div>
                        <strong>Teste React</strong>
                        <p>Testes do React JS </p>
                    </div>
                    <FiChevronRight size={20}/>
                </a>
            </Repositories>
        </>
    )
}

export default Dashboard;