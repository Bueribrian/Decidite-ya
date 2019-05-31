import React, { Component } from 'react'

export default class Indecision extends Component {
constructor(){
 super()
 this.state = {
  decisions:[]
 }
}

addDecision =(e)=>{
 let valor = e.target.value
 if(e.key === 'Enter'){
  let arrd= this.state.decisions
  arrd.push(valor)
  console.log(valor)
  this.setState({
   decisions: arrd
  })
  e.target.value = ''
 }
}
decide = ()=>{
 if(this.state.decisions.length > 0){
  let decisionsInput = Array.from(document.querySelectorAll('li'))
  decisionsInput.forEach(d=>d.style.color='black')
 decisionsInput[Math.floor(Math.random()*decisionsInput.length)].style.color='red'
 }else{
  alert('El dios maquina necesita opciones para elegir')
 }
}
destroyAll = ()=>{
 this.setState({
  decisions: []
 })
}
render() {
   return (
  
    <>
     <div className="nes-container with-title is-centered p-3">
         <h1 className="title">I can not decide</h1>
         <p>Deja que la maquina decida por vos</p>
     </div>
     <div style={{ "display": "flex", "justifyContent": "center","marginBottom":"1rem" }}>
        <button type="button" className="nes-btn is-error" onClick={this.destroyAll}>DESTRUIR TODO</button>
     </div>
     <div style={{ "display": "flex", "justifyContent": "center" }}>
        <button type="button" className="nes-btn" onClick={this.decide}>Decide por mi DIOS MAQUINA!</button>
     </div>
     <div className="nes-field p-3">
         <div className="lists">
          <h2>Tus opciones</h2>
        <ul className="nes-list is-circle">
          {this.state.decisions.map((d, index) => <li key={index}>{d}</li>)}
        </ul>
      </div>
        <label htmlFor="name_field">Write a decisison</label>
        <input type="text" id="name_field" placeholder='...' className="nes-input" onKeyPress={this.addDecision}/>
    </div>
    </>
   )
  }
}



