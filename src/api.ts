import { Entidades } from "./types/entidade";

export const api = {
  CarregarEntidadeIndividual: async (id: string): Promise<Entidades> => {
    let response = await fetch("https://maossolidarias.onrender.com/entidades/ID" + id, {
      method: "GET",
    });
    let json = await response.json();
    return json;
  },

  CarregarTodasEntidades: async () => {
    let response = await fetch("https://maossolidarias.onrender.com/entidades/listar", {
      method: "GET",
    });
    let json = await response.json();
    return json;
  },

  AdicionarEntidade: async (
    email: string,
    senha: string,
    nome: string,
    telefone: string,
    cnpj: string,
    endereco: string,
    complemento: string,
    cidade: string,
    estado: string,
    cep: string
  ) => {
    let response = await fetch("https://maossolidarias.onrender.com/entidades", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        senha: senha,
        nome: nome,
        telefone: telefone,
        cnpj: cnpj,
        endereco: endereco,
        complemento: complemento,
        cidade: cidade,
        estado: estado,
        cep: cep,
      }),
      headers: {
        "content-Type": "application/json",
      },
    });
    let json = await response.json();

    console.log(json);
    return json;
  },

  AlterarEntidade: async (id: string) => {
    let response = await fetch("https://maossolidarias.onrender.com/entidades" + id, {
      method: "PUT",
    });
    let json = await response.json();
    return json;
  },

  DeletarEntidade: async (id: string) => {
    let response = await fetch("https://maossolidarias.onrender.com/entidades" + id, {
      method: "DELETE",
    });
    let json = await response.json();
    return json;
  },

  Logar: async (username: string, password: string) => {
    {
      let response = await fetch("https://maossolidarias.onrender.com/auth/login", {
        method: "POST",
        body: JSON.stringify({
          username,
          password,
        }),
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      });
      let json = await response.json();
      console.log(json);
      return json;
    }
  },
};
