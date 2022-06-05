import {youtubeURL} from './configure.js';
class ResultsView {
    _data;
    _parentElement = document.querySelector('.videos');''
    _errorMessage = "No videos found for your query! Please try again";

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
        return this._data.map((video)=>{
        return `
                <section class="video">
                    <div class="img-box">
                        <img src="${video.imgUrl}">
                    </div>
                    <div class="description">
                        <div class="info">
                            <h1>${video.title}</h1>
                            <p class="channel">${video.channel}</p>
                            <p>${video.description}</p>
                        </div>
                        <a href="${youtubeURL}${video.id}" target="_blank" ><button class="video-btn" >Watch</button></a>
                        
                    </div>
                </section>
            `;
    }).join('');
    } 

    clear(){
        this._parentElement.innerHTML="";
    }
}

export default new ResultsView();
