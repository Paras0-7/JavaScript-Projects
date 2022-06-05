// imports
import { API_KEY as api} from "./configure.js";
import { maxResults } from "./configure.js";
import { RES_PER_PAGE } from "./configure.js";
import { API_URL as api_url } from "./configure.js";
import { getJson } from "./helper.js";

export const state ={
    searchResults : {
        query : "",
        results : [],
        resultsPerPage : RES_PER_PAGE,
        page:1
    }
};


export const loadSearchResults = async function(query){
    try{
        state.searchResults.query = query;
        const data = await getJson(`${api_url}part=snippet&maxResults=${maxResults}&q=${query}&key=${api}`);
       
        const { items } = data;
        
        console.log(items)
        state.searchResults.results = items.map((item)=>{
            return {
                id : item.id.videoId,
                title: item.snippet.title,
                description: item.snippet.description,
                channel: item.snippet.channelTitle,
                imgUrl: item.snippet.thumbnails.high.url,
            };
        });
        
    }
    catch(err){
        throw new Error(err);
    }
}


export const getSearchResultsPage = function(page=state.searchResults.page){
    state.searchResults.page = page;
    const start = (page - 1) * state.searchResults.resultsPerPage;
    const end = page*state.searchResults.resultsPerPage;

    return state.searchResults.results.slice(start,end);
}