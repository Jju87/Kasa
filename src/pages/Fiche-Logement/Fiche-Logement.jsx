import React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function FicheLogement() {
  const { LocationNumber } = useParams();
    // Utilise le hook useEffect pour mettre à jour le titre de l'onglet
    useEffect(() => {
      document.title = `Fiche Logement - ${LocationNumber}`;
    }, [LocationNumber]);

  return (
    <div>
      <h1>Fiche Logement</h1>
      <p>Numéro de location: {LocationNumber}</p>
    </div>
  );
}

export default FicheLogement;
