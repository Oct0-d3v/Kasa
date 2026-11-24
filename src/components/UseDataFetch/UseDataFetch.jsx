import { useEffect, useState } from "react";

function UseDataFetch () {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    async function getLogements() {
      try {
        const reponse = await fetch("http://localhost:5173/Data/logements.json");

        if (!reponse.ok) {
          throw new Error("Problème de connexion API");
        }

        else {
          const donnees = await reponse.json();
          setLogements(donnees);
        }
      }
      catch (erreur) {

        console.log(erreur.message);
      }
    }

    getLogements();

  }, [])

  return { logements }

}

export default UseDataFetch