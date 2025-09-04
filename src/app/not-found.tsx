import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-accent-50 to-primary-100 dark:from-secondary-900 dark:via-primary-900 dark:to-secondary-800">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-slate-900 dark:text-white mb-4">404</h1>
        <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">Página no encontrada</p>
        <Link 
          href="/" 
          className="inline-block px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
