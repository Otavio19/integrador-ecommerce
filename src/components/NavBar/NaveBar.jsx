import "./style.css"

const NavBar = ({ Titulo, Localizacao, Login, Devolucao, Pedidos, Carrinhos  }) => {
    return (
        <div>
       <a href="./App.jsx"></a><button>{Titulo}</button> 
       <button>{Localizacao}</button>
       <button>{Login}</button>
       <button>{Devolucao}</button>
       <button>{Pedidos}</button>
       <button>{Carrinhos}</button>
       


        </div>

    )
}
export default NavBar