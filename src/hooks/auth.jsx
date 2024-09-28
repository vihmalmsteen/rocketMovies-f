/* eslint-disable react/prop-types */
/**
 * Esse script cria um contexto para a aplicação React.
 * Contextos permitem que componentes compartilhem informações sem
 * precisar passar props manualmente.
 * Nesse caso, o contexto chamado de "MyContext" é criado
 * com um estado inicial vazio ({}).
 * Ele será usado em main.jsx, englobando a tag Routes.
 * Significa que todas as rotas terão acesso ao (valor do) contexto.
 */
import {createContext, useContext, useState, useEffect} from 'react';
import {api} from '../services/api';


export const authContext = createContext({});

export function AuthProvider({children}) {
    const [data, setData] = useState({});
    

    /**
     * Faz login na API e atualiza o estado do contexto.
     * @param {Object} data - email e senha do usu rio
     * @param {string} data.email - email do usu rio
     * @param {string} data.password - senha do usu rio
     */
    async function signIn({ email, password }) {
        try {
            const response = await api.post("/sessions/create", { email, password });
            const {user, token} = response.data
            // Agora que o usuario esta logado, necessário adicionar o token recebido na resposta da API nos headers 
            // de todas as requisicoes futuras, para que a API saiba quem esta fazendo a requisicao e possa autorizar ou nao.
            // Para isso, uso o metodo "defaults" do axios, que permite definir opcoes default para todas as requisicoes
            // feitas com o axios. No caso, estou definindo que o header "Authorization" deve ter o valor 
            // "Bearer <token>", onde <token> é o token recebido na resposta da API:
            api.defaults.headers.common['authorization'] = `Bearer ${token}`;
            setData({user, token});
            
            localStorage.setItem("@rocketMovies:user", JSON.stringify(user));
            localStorage.setItem("@rocketMovies:token", token);
        } catch (error) {
            if (error.response) {
                const {data} = error.response
                const htmlParsed = new DOMParser().parseFromString(data, "text/html")
                const message = htmlParsed.querySelector("pre").textContent
                const texto = String(message).split(":")[1].split("at")[0].trim()+'.'
                alert(texto)
            } else {
                alert("Houve um erro no login, tente novamente.");
            }
        }
    }

    /**
     * Atualiza o perfil do usu rio logado.
     * @param {{user: Object, avatarFile: File}} data - objeto com o usuario e o arquivo de avatar
     * @param {Object} data.user - objeto com as informacoes do usuario
     * @param {File} data.avatarFile - arquivo do avatar do usuario
     */
    

    function signOut() {
        localStorage.removeItem("@rocketMovies:token")
        localStorage.removeItem("@rocketMovies:user")
        setData({})
    }
    

    useEffect(() => {
        const token = localStorage.getItem("@rocketMovies:token");
        const user = localStorage.getItem("@rocketMovies:user");
        if (token && user) {
            api.defaults.headers.common['authorization'] = `Bearer ${token}`;
            setData({ token, user: JSON.parse(user) });
        }
    }, []);

    return (
        <authContext.Provider value={{signIn, signOut, user: data.user}}>
            {children}
        </authContext.Provider>
    )
}

// http://localhost:5173/signin

/**
 * Hook que retorna o valor do contexto de autenticao.
 * Pode ser usado em qualquer lugar da aplicao para acessar o valor do contexto.
 * O valor do contexto é o objeto passado como "value" no componente "authContext.Provider".
 * @returns {{}} valor do contexto de autenticao.
 */
export function useAuth() {
    const context = useContext(authContext);          // authContext inicia um contexto vazio
    return context;
}

