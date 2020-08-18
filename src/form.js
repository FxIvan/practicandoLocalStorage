import React,{Component} from 'react'
import './form.css'
class Form extends Component{

    state={
        nombre:'',
        email:'',
    }
    

    handleChange=(e)=>{
        const {name,value} = e.target /* tomamos el valor del input e.target.name -->nombre del input y e.target.value --> que es lo que esta dentro del input*/
        this.setState( {[name]:value} )/*sabemos que dentro de un objeto hay name a cual se le otorga a cada uno un valor*/     
    }

    handleSubmit=(e)=>{
        
        e.preventDefault()
        localStorage.setItem("datos",JSON.stringify(this.state)) /*setItem es agregarlo en el localStorage*/
        let datosStorage = JSON.parse(localStorage.getItem("datos"));/* getItem es extraer los datos*/
        console.log(datosStorage)
              
    }


    render(){
        const { nombre,email}=this.state
        return(
            <div className='login-box'>
                <form onSubmit={this.handleSubmit} className='form'>
                        <h1>Bienvenido</h1>
                        <input type='text' name='nombre' value={ nombre } onChange={this.handleChange}/>
                        <br/>
                        <input type='email' name='email' value = {email} onChange={this.handleChange}/>
                        <br/>
                        <button type='submit' className='boton'>Enviar</button>
                    
                </form>
            </div>
    
                //<p>{JSON.stringify(this.state)}</p>
            
        )
    }
}

export default Form