import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { mockProducts } from "../../mockProducts";

export default function ProdutosPage() {
  const { categoria } = useParams();
  const produtosFiltrados = mockProducts.filter(
    (produto) => produto.category.toLowerCase() === categoria.toLowerCase()
  );

const categoriaFormatada = categoria.charAt(0).toUpperCase() + categoria.slice(1);

return (
    <div style={{ padding: '2rem' }}>
        <h1 style={{ marginBottom: '1rem', color: 'var(--primary-color)' }}>{categoriaFormatada}</h1>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1.5rem' }}>
            {produtosFiltrados.map((produto, index) => (
                <Link
                    key={index}
                    to={`/produto/${produto.id}`}
                    style={{ textDecoration: 'none', color: 'inherit' }}
                >
                    <div style={{ border: '1px solid #ddd', borderRadius: 8, padding: '1rem' }}>
                        <img
                            src={produto.image}
                            alt={produto.title}
                            style={{ width: '100%', height: 200, objectFit: 'cover' }}
                        />
                        <h3>{produto.title}</h3>
                        <p><strong>R$ {produto.price}</strong></p>
                        {produto.discount && <p style={{ color: 'red' }}>-{produto.discount}%</p>}
                        {produto.freeShipping && <p style={{ color: 'green' }}>Frete grátis</p>}
                    </div>
                </Link>
            ))}
        </div>
    </div>
);
}
