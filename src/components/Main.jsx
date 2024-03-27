import {useState} from "react";
export default function Main(){
    const [nome,setNome] = useState("");
    const [telefone, setTelefone] = useState("")
    const [idade, setIdade] = useState("")
    const [listaContatos, setContatos]= useState([])

    const registrar = (event) => {
        event.preventDefault();
        alert("Deu certo!");
        setContatos([...listaContatos,{
            nomeSalvo: nome,
            telefoneSalvo: telefone,
            idadeSalvo: idade
        }]);
    }
    console.table(listaContatos);
    return(
        <main>
            <form onSubmit={registrar}>
                <label htmlFor="nome">Nome</label>
                <input
                     type="text"
                     name="nome-contato"
                     id="nome"
                       onChange={(event)=> setNome(event.target.value)}/>
                     {nome}
                     <br></br>
                     <br></br>
           
                <label htmlFor="telefone">Telefone</label>
                 {/*onChange= Atributo que quadno altera o input dispara uma funcao--!>*/}
                {/*} setTelefone /salva a informacao/ (informacao)*/}
                <input 
                    type="tel" 
                    name="telefone-contato" 
                    id="telefone" 
                    onChange={(event)=> setTelefone(event.target.value)}/>
                {telefone}
                
                <br></br>
                <br></br>
                
                <laber htmlform="idade">Idade</laber>
                <input
                    type="age"
                    name="idade-contato"
                    id="idade"
                    onChange={(event)=> setIdade(event.target.value)}/>
                
                <br></br>
                <button type="submit">Enviar</button>


            </form>
        </main>

    );
}