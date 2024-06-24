import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button'
import Card from './components/Button/Card'
import Preços from './components/preços/preços'
import NavBar from './components/NavBar/NaveBar'
import Input from './components/Button/Input/Input'


function App() {

  const produtos = [
    {
      nome: "celular",
      preco: "R$1000",
      detalhamentos:"teste",
      imagem:"http://via.placeholder.com/200",
      desconto:"-10%"
    },
    {
      nome: "capinha",
      preco: "R$20",
      detalhamentos:"teste",
      imagem:"https://via.placeholder.com/200",
      desconto:"-5%"
    },
    {
      nome: "TV",
      preco: "R$5000",
      detalhamentos:"teste",
      imagem:"https://via.placeholder.com/200",
      desconto:"-10%"
    },
    {
      nome: "Geladeira",
      preco: "R$20000",
      detalhamentos:"teste",
      imagem:"https://via.placeholder.com/200",
      desconto:"-10%"
    },
    {
      nome: "folgão",
      preco: "R$4000",
      detalhamentos:"teste",
      imagem:"https://via.placeholder.com/200",
      desconto:"-10%"
    },
    {
      nome: "sofá",
      preco: "R$2000",
      detalhamentos:"teste",
      imagem:"https://via.placeholder.com/200",
      desconto:"-10%"
    },
  ]
  return (
    <>
      
      <NavBar Titulo='NavBar'/>
      <NavBar Localizacao ='Coloque sua Localização AQUI!!'/>
      <NavBar Login ='Faça seu Login'/>
      <NavBar Carrinho ='Carrinho'/>
      <Input Pesquisar='Pesquisa'/>
      <Button testo="Mais vendidos"/>
      <Button testo='oferta do dia' />
      <Button testo='Suplementos' />
      <Button testo='Livros' />
      <Button testo='Ideias de Presentes' />
      <Button testo='Eletronicos' />
      {/* aqui eu pensei em colocar "novidades na (Nome da loja)  */}
      <Button testo='Novidades' />
      <Button testo='Computadores' />
      <Button testo='Roupas' />
      <Button testo='Games' />
      <Button testo='Beleza' />
      <Button testo='Games' />




      {
        produtos.map((produto) => (
          <Card nome={produto.nome} preco={produto.preco} detalhamentos={produto.detalhamentos} imagem={produto.imagem} desconto={produto.desconto}/>
     ))
      }
      <Button testo='Ver mais'/>

    </>

  )
}

export default App
