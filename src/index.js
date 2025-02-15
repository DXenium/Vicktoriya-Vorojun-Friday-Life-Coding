import { Article } from './js/Article';
import { ArticleModal } from './js/ArticleModal';
import { Modal } from './js/Modal';

const data =  [
    {
        id: 1,
        title: 'Increasing Prosperity With Positive Thinking',
        urlToImage: './img/strategies/1.jpg',
        tags: ['Art', 'Design'],
        content: 'The most intuitive way to imagine your next user experience.',
        date: '01.01.2020'
    },
    {
        id: 2,
        title: 'Motivation Is The First Step To Success',
        urlToImage: './img/strategies/2.jpg',
        tags: ['Culture'],
        content: 'The most intuitive way to imagine your next user experience.',
        date: '01.01.2020'
    },
    {
        id: 3,
        title: 'Success Steps For Your Personal Or Business Life',
        urlToImage: './img/strategies/3.jpg',
        tags: ['Art', 'Design', 'Culture'],
        content: 'The most intuitive way to imagine your next user experience.',
        date: '01.01.2020'
    },
    {
        id: 4,
        title: 'Success Steps For Your Personal Or Business Life Plus Funny Image on the Back',
        urlToImage: './img/strategies/4.jpg',
        tags: ['Art', 'Design', 'Culture'],
        content: 'The most intuitive way to imagine your next user experience.',
        date: '01.01.2020'
    },
    {
        id: 5,
        title: 'Increasing Prosperity With Positive Thinking',
        urlToImage: './img/strategies/5.jpg',
        tags: ['Art', 'Design'],
        content: 'The most intuitive way to imagine your next user experience.',
        date: '01.01.2020'
    },
    {
        id: 6,
        title: 'Increasing Prosperity With Positive Thinking',
        urlToImage: './img/strategies/1.jpg',
        tags: ['Art', 'Design'],
        content: 'The most intuitive way to imagine your next user experience.',
        date: '01.01.2020'
    },
    {
        id: 7,
        title: 'Motivation Is The First Step To Success',
        urlToImage: './img/strategies/2.jpg',
        tags: ['Art', 'Design'],
        content: 'The most intuitive way to imagine your next user experience.',
        date: '01.01.2020'
    },
    {
        id: 8,
        title: 'Success Steps For Your Personal Or Business Life',
        urlToImage: './img/strategies/3.jpg',
        tags: ['Art', 'Design', 'Culture'],
        content: 'The most intuitive way to imagine your next user experience.',
        date: '01.01.2020'
    }

]


window.onload = function() {

    //Render Articles
    if(data){
        renderArticlesToDom();
    }

    // Tags
    addTagsClickHandler();

    // //Generate Base Modal from Modal Class
    // addToolsClickHandler();

}

const addTagsClickHandler = () => {
    document.querySelector('.stategies__tags').addEventListener('click', (e)=>{
        if(e.target.classList.contains('tag')) {
            let clickedTag = e.target;
            removeSeceltedTags();
            selectClickedTag(clickedTag);
            if(clickedTag.innerText === 'All') {
                showAllStrategies();
            } else {
                filterStratigyBySelectedTag(clickedTag.innerText);
            }
        }
    })
}

const removeSeceltedTags = () => {
    let tags = document.querySelectorAll('.stategies__tags .tag');
    tags.forEach(tag => {
        tag.classList.remove('tag_selected');
        tag.classList.add('tag_bordered');
    })
}

const selectClickedTag = (clickedTag) => {
    clickedTag.classList.add('tag_selected');
    clickedTag.classList.remove('tag_bordered');
}

const showAllStrategies = () => {
    let strategies = document.querySelectorAll('.strategy-wrapper .strategy');
    strategies.forEach(strategy => {
                strategy.classList.remove('strategy_hidden');
    });
}

const filterStratigyBySelectedTag = (selectedTag) => {
    let strategies = document.querySelectorAll('.strategy-wrapper .strategy');
    strategies.forEach(strategy => {
        strategy.classList.add('strategy_hidden');
        strategy.querySelectorAll('.tag').forEach(tag => {
            if(tag.innerText === selectedTag){
                strategy.classList.remove('strategy_hidden');
            }
        })
    })
}

const renderArticlesToDom = () => {
    let strategiesWrapper = getStrategiesWrapper();
    generateArticles(data).forEach(article => {
        strategiesWrapper.appendChild(article.generateArticle())
    })

    addStrategyClickHandler();
}

const getStrategiesWrapper = () => {
    const strategiesContainer = document.querySelector('.strategy-wrapper');
    strategiesContainer.innerHTML = '';
    return strategiesContainer;
}

const generateArticles = (data) => {
    let articles = [];
    data.forEach(article => {
        articles.push(new Article(article))
    });
    return articles;
}

// const addToolsClickHandler = () => {
//     document.querySelector('.tools__button button').addEventListener('click', () => {
//         generateToolsModal();
//     })
// };

// const  generateToolsModal = () => {
//     renderModalWindow()
// }

const renderModalWindow = (content) => {
    let modal = new Modal ('tools-modal');
    modal.buildModal(content);
}

const addStrategyClickHandler = () => {
    document.querySelector('.strategy-wrapper').addEventListener('click', (e)=>{
        if(e.target.closest('.strategy')) {
            let clickedStrategyId = e.target.closest('.strategy').getAttribute('data-id');
            let clickedStrategyData = getClickedData(clickedStrategyId)

            renderAricleModalWindow(clickedStrategyData);
        }
    })
}

const getClickedData = (id) =>{
    return data.find(article => article.id == id)
}

const renderAricleModalWindow = (article) => {
    let modal = new ArticleModal ('article-modal', article);
    modal.renderModal();
}