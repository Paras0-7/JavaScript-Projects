class PaginationView {
    _data;
    _parentElement = document.querySelector(".pagination");

    render(data){
        if(!data){
            return this.renderError();
        }
        this._data = data;
        
        
        const markUp = this._generateMarkup();
        this.clear();
        this._parentElement.insertAdjacentHTML('beforeend',markUp);
    }

    _generateMarkup(){
        const currentPage = this._data.page;
        const numPages = Math.ceil(this._data.results.length / this._data.resultsPerPage);
        
        const pages= Array.from({length:numPages}, (_, i) => i+1);;
        

        return pages.map(function(page){
            return `
                <button class="pageNo ${currentPage===page?"active" : ""}" data-goto=${page} >
                    ${page}
                </button>
            `;
        }).join('');
        
    }

    clear(){
        this._parentElement.innerHTML="";
    }

    addHandlerPage(handler){
        this._parentElement.addEventListener('click',function(e){
            const btn = e.target.closest(".pageNo");
            
            if(!btn) return;
            
            const gotoPage = btn.dataset.goto;
            handler(Number.parseInt(gotoPage));
        })
    }

}

export default new PaginationView();