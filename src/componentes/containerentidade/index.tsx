 import { useEffect, useState } from "react";
import { api } from "../../api";
import { Entidades } from "../../types/entidade";
import DadosEntidade from "../dadosentidade/dadosentidade";

function ContainerEntidade() {
  const [entidades, setEntidades] = useState<Entidades[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    carregarEntidades();
  }, []);
    



  
  const carregarEntidades = async () => {
    setLoading(true);
    try {
      let response = await fetch(
        "https://maossolidarias.onrender.com/entidades/listar" 
      );
      let json = await response.json();

      const dataArray = Array.isArray(json) ? json : [json];

      setEntidades(dataArray);
    } catch (e) {
      alert("Falha no carregamento das informações");
      setLoading(false);
      console.error(e);
    }
  };

  return (
    <div>
    <div className="ContainerEntidade">
      {entidades.map((item, index) => (
        <DadosEntidade key={index} dados={item} />
      ))}
    </div>
    </div>
  );
}

export default ContainerEntidade;
