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
      {entidades.map((entidade) => (
        <div className="divNomeEntidade">
          <b>{entidade.nome}</b>
        </div>
      ))}

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
                <div className="divBorda">
                  <b>EMAIL:{entidade.email}</b>
                </div>
                <br />
                <div className="divBorda">
                  <b>Telefone:{entidade.telefone}</b>
                </div>
                <br />
                <div className="divBorda">
                  <b>Cpnj:{entidade.cnpj}</b>
                </div>
              </div>
            </div>
            <div className="infPerfil">
              <div className="divcoluna">
                <div className="divBorda">
                  <b>Cidade:{entidade.cidade}</b>
                </div>
                <br />
                <div className="divBorda">
                  <b>Estado: {entidade.estado}</b>
                </div>
                <br />
                <div className="divBorda">
                  <b>Endereço: {entidade.endereco}</b>
                </div>
              </div>
            </div>
            <div className="infPerfil">
              <div className="divcoluna">
                <div className="divBorda">
                  <b>Cep: {entidade.cep}</b>
                </div>
                <br />
                <div className="divBorda">
                  <b>Complemento: {entidade.complemento}</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DetalhamentoEntidade;
