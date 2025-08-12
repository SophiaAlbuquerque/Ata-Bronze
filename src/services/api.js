export async function getProdutos(categoria = null) {
  try {
    const token = process.env.BLING_TOKEN;
    let url = `https://api.bling.com.br/Api/v3/produtos?pagina=1`;

    if (categoria) {
      url += `&categoria=${encodeURIComponent(categoria)}`;
    }

    const response = await fetch("https://api.bling.com.br/Api/v3/produtos", {
    headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
    },
    });

    if (!res.ok) {
      throw new Error("Erro ao buscar produtos");
    }

    const data = await res.json();
    
    return data.data.map((produto) => ({
      id: produto.id,
      title: produto.nome,
      price: produto.preco,
      discount: produto.desconto || null,
      freeShipping: produto.freteGratis || false,
      image: produto.imagem?.[0]?.link || "https://via.placeholder.com/200",
      category: produto.categoria?.descricao || "Outros"
    }));

  } catch (err) {
    console.error(err);
    return [];
  }
}
