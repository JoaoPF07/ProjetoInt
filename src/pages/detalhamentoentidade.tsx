import { useState, useEffect } from "react";
import Cabecalho from "../componentes/cabecalho";
import { Entidades } from "../types/entidade";
import { api } from "../api";
import { useParams } from "react-router-dom";

function DetalhamentoEntidade() {
  const [entidades, setEntidades] = useState<Entidades[]>([]);
  const [loading, setLoading] = useState(false);
  const { ID } = useParams<{ ID: string }>();

  const handleCarregar = async (id: string) => {
    setLoading(true);
    try {
      let json = await api.CarregarEntidadeIndividual(id);

      const dataArray = Array.isArray(json) ? json : [json];
      setEntidades(dataArray);
      setLoading(false);
    } catch (e) {
      alert(e);
      setLoading(false);
      console.error(e);
    }
  };

  useEffect(() => {
    ID && handleCarregar(ID);
  }, [ID]);

  return (
    <div>
      <Cabecalho />

      <div
          style={{
            backgroundImage: `url('/imgdocontainer.png')`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          className="imgPerfil"
        ></div>
      {entidades.map((entidade) => (
        <div key={entidade.ID}>
         <div className="divflex">
      <div className="infPerfil">
        <div className="divcoluna">
          <div className="teste">
        <b>Email:{entidade.email}</b>
          </div>
        <br />
        <b>Telefone:{entidade.telefone}</b>
        <br />
        <b>Cpnj:{entidade.cnpj}</b>
        </div>
      </div>
      <div className="infPerfil">
        <div className="divcoluna">
        <b>Cidade:{entidade.cidade}</b>
        <br />
        <b>Estado: {entidade.estado}</b>
        <br />
        <b>Endereço: {entidade.endereco}</b>
      </div>
      </div>
      <div className="infPerfil">
        <div className="divcoluna">
        <b>Cep: {entidade.cep}</b>
        <br />
        <b>Complemento: {entidade.complemento}</b>
        </div>

      </div>
    </div>
        </div>
      ))}
    </div>
  );
}

export default DetalhamentoEntidade;
