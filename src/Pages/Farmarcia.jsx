import React from 'react';
import './Farmarcia.css'



function Farmarcianovadireçao() {
 
  const [fila, setFila] = useState([])


  function gerarSenha(){
    let senha = {
      numero: Date.now(),
      tipo: "normal",
    }
    setFila([...fila, senha])
  }
function atender(){
  if(fila.length){
    alert(fila[0].numero)
    setFila(fila.slice(1))// REMOVE O PRIMEIRO DA FILA
    //let filatemp = [...fila]
    //filatemp.splice(0, 1)
    // setFila(filaTemp)


  }else{
  alert("Não tem ninguém na fila, finge que tá fazendo alguma coisa e vai descansar")
  }


}


  return (
    <>
    <button onClick={atender}>Atender</button>
        <button onClick={gerarSenha}>Senha normal</button>
        
        {fila.map( (senha) =>  (
            <div key={senha.numero}>
              <p>{senha.numero}</p>
              <p>{senha.tipo}</p>
            </div>
        ) )}
     
    </>
  )
}

export default Farmarcianovadireçao