import "./style.css"

const Card = ({ nome, preco, detalhamentos, imagem, desconto }) => {
     return (
          <div className="card">
               <h2>{nome}</h2>
               <p>{preco}</p>
               <p>{detalhamentos}</p>
               <img className="imagem" src={imagem} alt="" />
               <p>{desconto}</p>
             
          </div>
     )

}
export default Card