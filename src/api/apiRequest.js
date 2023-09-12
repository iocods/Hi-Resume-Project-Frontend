
const apiRequest = async (url = '', optionsObject = null, errorMessage = null) => {
    try{
        const response = await fetch(url, optionsObject);
        if(!response.ok) throw Error("please Reload the app");
    } catch(error){
        errorMessage = error.message;
    } finally{
        return errorMessage;
    }
}
export default apiRequest;