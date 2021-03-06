import Footer from "components/Footer";
import NavBar from "components/NavBar";
import { Link } from "react-router-dom";
import "./styles.css"

const Home = () => {
    return (
        <>
        <NavBar/>
     
        <div className="container"  >
            <div className="jumbotron" >     
            <h1 className="display-5 mt-3">Gerenciar Categorias </h1>
              <hr/>   
              <p className="lead">Gereng Categories permite ao usuário uma forma de administrar as categorias de seu interessse através de informações referentes a: </p>
              <div className="container-text">     
        <p>• Categoria mais relevante</p>
        <p>• Fluxo de movimento com a média de entradas e saídas</p>
        <p>• Valor atual de cada categoria</p>
        <p>• Quantidade de itens adicionados e removidos em determinado periodo</p>
        <p>• Data de registro das atualizações</p>
        <p><b>Acesse informações relacionadas as categorias:</b></p>
        </div>

        <div className="row">
        <div className="mb-5 col-sm-6 col-lg-6 col-xl-4 mb-4">
        <Link className="gerencg-btn " to="/gerencg/dashboard"> Dashboard </Link>
        </div>
        <div className="col-sm-6 col-lg-6 col-xl-4 mb-4">
        <Link className="gerencg-btn" to="/gerencg/listing"> Categorias </Link>
        </div>
        </div>

        <hr className="mb-0 mt-5"/>
            </div>
        </div>
        <Footer/>
        </>
    );
}

export default Home;