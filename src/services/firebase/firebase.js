
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getDocs, collection, query, where, getDoc, doc } from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyCFFCfUml6eeYvitMgABEa1D0z4PTIwyPs",
  authDomain: "app-bg-react.firebaseapp.com",
  projectId: "app-bg-react",
  storageBucket: "app-bg-react.appspot.com",
  messagingSenderId: "118273842639",
  appId: "1:118273842639:web:1cc8976cadd1b15a9306ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firestore
export const db = getFirestore(app)

export const getProducts = (id) => {
  return new Promise((resolve, reject) => {
    const collectionRef = id ?
      query(collection(db, 'Products'), where('category', '==', id)) :
      collection(db, 'Products')

    getDocs(collectionRef).then(response => {
        const products = response.docs.map(doc => {
            return { id: doc.id, ...doc.data() }
        })

        resolve(products)
    }).catch((error) => {
        reject('Error obteniendo productos: ', error)
    })
  })
}

export const getProductById = (productId) => {
  return new Promise((resolve ,reject) => {
    const docRef = doc(db, 'Products', productId)

    getDoc(docRef).then(response => {
        const product = { id: response.id, ...response.data()}
        resolve(product)
    }).catch((error) => {
        reject('Error obteniendo producto: ', error)
    })
  })
}