import Button from "./eventos/Button"

function Evento({ numero }) {
    function meuEvento() {
        console.log(`Ativando primeiro evento!`)
    }

    function segundoEvento() {
        console.log('Ativnado o segundo evento!')
    }

    return(
        <div>
            <p>Clique para disparar um evento:</p>
            <Button event={meuEvento} text="Primeiro Evento"></Button>
             <Button event={segundoEvento} text="Segundo Evento"></Button>
        </div>
    )
}

export default Evento