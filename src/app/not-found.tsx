import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f8fafc' }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '4rem', fontWeight: 'bold', color: '#1e293b', marginBottom: '1rem' }}>404</h1>
        <p style={{ fontSize: '1.25rem', color: '#64748b', marginBottom: '2rem' }}>Página no encontrada</p>
        <Link 
          href="/" 
          style={{ 
            display: 'inline-block', 
            padding: '0.75rem 1.5rem', 
            backgroundColor: '#3b82f6', 
            color: 'white', 
            borderRadius: '0.5rem', 
            textDecoration: 'none' 
          }}
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
