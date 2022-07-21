
export const getImagen = async() => {

    try {

        const apiKey = '4JLBLrHyLvEK1wT3VmiTMe73aintuoXO';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        console.log(url);
        return url;

    } catch (error) {
        // manejo del error
        return 'No se encontró la imagen';
    }
    
    
    
}



