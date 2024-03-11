import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Error() {
  // Utilise le hook useEffect pour mettre à jour le titre de l'onglet
  useEffect(() => {
    document.title = `Page non trouvée- Kasa`;
  }, []);
  
  return (
    <section className="page-error">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/" className='page-error__home-link'>Retourner sur la page d’accueil</Link>
    </section>
  )
}
export default Error;