import { useState, useEffect } from "react";
import Cabecalho from "../componentes/cabecalho";
import InfoEntidade from "../componentes/infoentidade/infoentidade";
import PerfilEntidade from "../componentes/perfilentidade/perfilentidade";
import { Entidades } from "../types/entidade";
import { api } from "../api";

async function DetalhamentoEntidade() {

  const [entidades, setEntidades] = useState<Entidades[]>([]);
  const [loading, setLoading] = useState(false);
  const [entidadesIds, setEntidadesIds] = useState<string[]>([])

  useEffect(() => {
    carregarEntidades(entidadesIds);
  }, [entidadesIds]);

  const carregarEntidades = async (ids: string[]) => {
    setLoading(true);
    try {
      const promises = ids.map(async (id) => {
        return api.CarregarEntidadeIndividual(id);
    });

    const responses = await Promise.all(promises);
    const dataArray = responses.flatMap(response => Array.isArray(response) ? response : [response]);

    setEntidades(dataArray);
    setLoading(false);
  } catch (e) {
    alert("Falha no carregamento das informações");
    setLoading(false);
    console.error(e);
  }
};
  
  return (
    <div>
      <Cabecalho />
      {entidades.map((entidade, index) => (
        <PerfilEntidade key={index} dados={entidade}/>
      ))}
       {entidades.map((item, index) => (
        <InfoEntidade key={index} dados={item} />
      ))}
      

      
    </div>
  );
}

export default DetalhamentoEntidade;
