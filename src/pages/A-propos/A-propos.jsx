import {useEffect} from 'react';

function APropos() {
  // Utilise le hook useEffect pour mettre à jour le titre de l'onglet
  useEffect(() => {
    document.title = `A propos - Kasa`;
  }, []);
  
  return (
    <div>
      <h1>A propos</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
      </p>
    </div>
  )
}

export default APropos;
