export default function NotFound() {
  return (
    <div style={{ 
      margin: 0, 
      padding: 0, 
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f8fafc',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ 
          fontSize: '4rem', 
          fontWeight: 'bold', 
          color: '#1e293b',
          margin: '0 0 1rem 0'
        }}>
          404
        </h1>
        <p style={{ 
          fontSize: '1.25rem', 
          color: '#64748b',
          margin: '0 0 2rem 0'
        }}>
          Página no encontrada
        </p>
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <a 
          href="/" 
          style={{
            display: 'inline-block',
            padding: '0.75rem 1.5rem',
            backgroundColor: '#3b82f6',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '0.5rem',
            fontSize: '1rem',
            fontWeight: '500'
          }}
        >
          Volver al inicio
        </a>
      </div>
    </div>
  );
}