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

  

  const handleCarregar = async (
    id:string,
  ) => {
    setLoading(true);
    try {
      let json = await api.CarregarEntidadeIndividual (
        id,
      );

      if (Array.isArray(json)) {
        setEntidades(json);
      } else {
        alert("Os dados carregados não são uma matriz.");
      }
  
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
      <div>
        <p>teste de id: </p> {ID}
        </div>
        {entidades.map((entidade) => (
          <div key={entidade.ID}>
            <InfoEntidade entidade={entidade} />
            <PerfilEntidade entidade={entidade} />
          </div>
        ))}


     

      
    </div>
  );
}

export default DetalhamentoEntidade;
