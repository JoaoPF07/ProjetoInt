import { Link } from "react-router-dom";
import { api } from "../../api";
import { Entidades } from "../../types/entidade";

type Props = {
  dados: Entidades;
};

function DadosEntidade({ dados }: Props) {

  const deletarEntidade = async (id:string) => {
    try {
     await api.DeletarEntidade (id);
    } catch(error) {
      alert("Erro ao deletar a entidade:" + error)
    }
  }

  const handleDelete = () => {
    if (dados && dados.ID) {
      deletarEntidade(dados.ID);
    }
  }
  return (
    <div className="ContainerEntidade">
      <Link className="link" to={`/perfil-entidade/ID/${dados.ID}`}>
        <div className="divlista">
          <div
            style={{
              backgroundImage: `url('/imgdocontainer.png')`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            className="imgContainer"
          ></div>
          <br />
          <div className="divContainer">
            <b>Nome: {dados.nome}</b>
            <br /><br />
            <b>Cidade:{dados.cidade}</b>
            <br /><br />
            <b>Estado:{dados.estado}</b>
            <br /><br />
            <b>Endereço: {dados.endereco}</b>
            <br />
            <br />
            <br /><br />
          </div>
        </div>
      </Link>
      <button onClick={handleDelete}>Delete</button>


            
            
    </div>
  );
}

export default DadosEntidade;
