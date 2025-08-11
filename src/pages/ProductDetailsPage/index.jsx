import { useParams, useNavigate } from 'react-router-dom';
import { mockProducts } from "../../mockProducts";
import { useState } from 'react';

function ProductDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const produto = mockProducts.find((p) => p.id === id);

  const [cep, setCep] = useState('');
  const [freteGratis, setFreteGratis] = useState(null);
  const [melhorEnvioFrete, setMelhorEnvioFrete] = useState(null);

  if (!produto) {
    return <h2 style={{ padding: '2rem' }}>Produto não encontrado.</h2>;
  }

  const calcularFreteGratuito = async () => {
    if (!cep) return alert("Informe um CEP válido.");

    const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await res.json();

    if (data.erro) {
      alert("CEP inválido.");
      return;
    }

    setFreteGratis(`Entrega para ${data.localidade} - ${data.uf}: Frete fixo R$ 19,90 (simulação gratuita)`);
  };

  const calcularFreteMelhorEnvio = async () => {
    if (!cep) return alert("Informe um CEP válido.");

    const body = {
        from: { postal_code: "01001-000" },
        to: { postal_code: cep },
        products: [{
        width: 15,
        height: 10,
        length: 20,
        weight: 1
        }],
        options: {
        receipt: false,
        own_hand: false,
        insurance_value: Number(produto.price) || 0
        },
        services: []
    };

    const res = await fetch("https://sandbox.melhorenvio.com.br/api/v2/me/shipment/calculate", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_MELHOR_ENVIO_TOKEN}`
        },
        body: JSON.stringify(body)
    });

    if (!res.ok) return alert("Erro ao consultar Melhor Envio");

    const data = await res.json();
    setMelhorEnvioFrete(data);
    };

  return (
    <div style={{ padding: '2rem' }}>
      <button onClick={() => navigate(-1)} style={{ marginBottom: '1rem', backgroundColor: '#eee', border: 'none', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer' }}>
        ← Voltar
      </button>

      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
        <img src={produto.image} alt={produto.title} style={{ maxWidth: '400px', width: '100%', borderRadius: '8px' }} />

        <div style={{ maxWidth: '500px' }}>
          <h1>{produto.title}</h1>
          <p style={{ fontSize: '1.2rem', color: '#555' }}>{produto.description}</p>

          <div style={{ marginTop: '1rem' }}>
            <strong style={{ fontSize: '1.5rem' }}>R$ {produto.price}</strong>
            {produto.discount && (
              <span style={{
                marginLeft: '1rem',
                backgroundColor: '#ff4d4d',
                color: 'white',
                padding: '0.2rem 0.5rem',
                borderRadius: '4px',
                fontSize: '0.9rem'
              }}>
                -{produto.discount}%
              </span>
            )}
          </div>

          {produto.freeShipping && (
            <p style={{ color: 'green', marginTop: '0.5rem' }}>Frete grátis</p>
          )}

          <button style={{
            marginTop: '1.5rem',
            padding: '0.75rem 1.5rem',
            backgroundColor: '#cc3366',
            color: '#fff',
            fontWeight: 'bold',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}>
            Adicionar ao carrinho
          </button>

          <hr style={{ margin: '2rem 0' }} />

          <h3>Calcular Frete</h3>
          <input
            type="text"
            placeholder="Digite seu CEP"
            value={cep}
            onChange={(e) => setCep(e.target.value)}
            style={{
              padding: '0.5rem',
              marginRight: '1rem',
              border: '1px solid #ccc',
              borderRadius: '4px'
            }}
          />
          <button onClick={calcularFreteGratuito} style={{ marginRight: '1rem' }}>
            Simular Frete Fixo
          </button>
          <button onClick={calcularFreteMelhorEnvio}>
            Consultar Melhor Envio
          </button>

          {freteGratis && <p style={{ marginTop: '1rem' }}>{freteGratis}</p>}

          {melhorEnvioFrete && (
            <div style={{ marginTop: '1rem' }}>
              <h4>Melhor Envio - Opções:</h4>
              <ul>
                {melhorEnvioFrete.map((opcao) => (
                  <li key={opcao.name}>
                    {opcao.name}: R$ {opcao.price} - Entrega em {opcao.delivery_time.days} dias úteis
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
