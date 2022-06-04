import * as model from './model.js';
import searchView from './searchView.js';
import resultsView from './resultsView.js';
import paginationView from './paginationView.js';

const videoContainer = document.querySelector('.videos');

const controlSearchResults = async function(){
    try{
        const query = searchView.getSearchQuery();
        if(!query) return;

        await model.loadSearchResults(query);
        resultsView.render(model.getSearchResultsPage(1));
        paginationView.render(model.state.searchResults);
    }catch(err){
        console.log(err)

    }
}


const controlPagination = function(gotoPage){

    resultsView.render(model.getSearchResultsPage(gotoPage));
    paginationView.render(model.state.searchResults)
}
const init = function(){
    searchView.addHandlerSearch(controlSearchResults);
    paginationView.addHandlerPage(controlPagination);
}

init();