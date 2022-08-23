
export const imageUpload = async(file) => {

    if (!file) throw new Error('No existe el archivo');

    const apiURL = "https://api.cloudinary.com/v1_1/cursoreactmarta/upload"; // URL de Cloudinary

    const formData = new FormData();

    // Estos son los datos que se le pasan a la API para subir imágenes
    formData.append('upload_preset', 'journal-react');
    formData.append('file', file);

    try {
        
        const resp = await fetch(apiURL, {
            method: 'POST',
            body: formData
        });
        
        if (!resp.ok) {
            throw new Error("No se pudo cargar el archivo.");
        }
        else {
            const cloudResponse = await resp.json();
            return cloudResponse.secure_url;
        }

    } catch (error) {
        throw new Error(error.message);
    }

}