import { generateHash, renderHeroes } from "../operaciones.js";
import { privateKey , publicKey } from "../autentificacion.js";

export const getMarvelData = (offset) =>{
    const timestamp = new Date().getTime().toString();
    const hash = CryptoJS.MD5(timestamp + privateKey + publicKey).toString();
    const limit =20;
    const apiUrl =`https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${publicKey}&hash=${hash}&limit=${limit}&offset=${offset}`;

    fetch(apiUrl)
        .then((Response)=>{
            if(!Response.ok){
                throw new Error(`Network respose was not okay`);
            }
            return Response.json();
        })
        .then((data)=>{
            renderHeroes(data.data.results);
        })
        .catch((error)=>{
            console.error(`There was a problem with the fetch operation`,error);
        })
}