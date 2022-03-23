import { collection, getDocs } from './firestore';

async function obtenerRecetas(baseDeDatos) {
  const citiesCol = collection(baseDeDatos, 'recetas');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map((doc) => doc.data());
  return cityList;
}

export { obtenerRecetas };