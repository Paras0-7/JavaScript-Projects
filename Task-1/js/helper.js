const timeout = function(){
    return new Promise(function(_,reject){
        setTimeout(function(){
            reject(new Error('Request took to long!! Please check your internet connection'));
        }, 5000);
    });
}
export const getJson = async function(url){
        try{
                const response = await Promise.race([fetch(`${url}`), timeout()]);
                const data = await response.json();
                return data;
        }catch(err){
            throw new Error(err);
        }
}