
import formatDate from './formatDate'
import articleList from '../homePage/articleList'

function globalComponents(Vue) {
    Vue.component('format-date', formatDate)
    Vue.component('blog-article-list', articleList)
}

export default globalComponents