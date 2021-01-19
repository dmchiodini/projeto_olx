import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PageArea } from './styled';
import useApi from '../../helpers/OlxAPI';

import { PageContainer, PageTitle } from '../../components/MainComponents';

const Page = () => {
    const api = useApi();
    const { id } = useParams();

    const [ userInfo, setUserInfo ] = useState({});    

    const [ name, setName ] = useState(userInfo.name);
    const [ email, setEmail ] = useState(userInfo.email);
    const [ state, setState ] = useState(userInfo.state);

    useEffect((id) => {
        const getUserInfo = async () => {
            const json = await api.getUser(id);
            setUserInfo(json);
            setName(json.name);
            setEmail(json.email);
            setState(json.state);
        }
        getUserInfo(id);
    }, []);

    return (
        <PageContainer>
            <PageTitle>Minha Conta</PageTitle>
            <PageArea>
               <form>
                   <label className="area">
                        <div className="area--title">Nome</div>
                        <div className="area--input">                            
                            <input 
                                type="text"  
                                disabled={true}                     
                                value={name}
                                required
                            />
                        </div>
                   </label>
                   <label className="area">
                        <div className="area--title">E-mail</div>
                        <div className="area--input">
                            <input 
                                type="email" 
                                disabled={true}
                                value={email}
                                required
                            />
                        </div>
                   </label>
                   <label className="area">
                        <div className="area--title">Estado</div>
                        <div className="area--input">
                            <select name="state" value={state} disabled={true}>
                                <option>{state}</option>
                            </select>
                        </div>
                   </label>
               </form>
            </PageArea>
        </PageContainer>
    );
}

export default Page;