const ErrorFallback = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Oops! Algo deu errado
        </h1>
        <p className="text-gray-600 mb-8">
          Estamos trabalhando para resolver este problema.
        </p>
        <button 
          onClick={() => window.location.reload()}
          className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-light"
        >
          Recarregar Página
        </button>
      </div>
    </div>
  );
};

export default ErrorFallback;
