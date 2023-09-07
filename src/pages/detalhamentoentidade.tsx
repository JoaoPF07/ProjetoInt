import { useState, useEffect } from "react";
import Cabecalho from "../componentes/cabecalho";
import InfoEntidade from "../componentes/infoentidade/infoentidade";
import PerfilEntidade from "../componentes/perfilentidade/perfilentidade";
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
        <div key={entidade.ID}>
          <h2>{entidade.nome}</h2>
          {entidade.email}
          {entidade.estado}
        </div>
      ))}
    </div>
  );
}

export default DetalhamentoEntidade;
