import './App.css';
import {useState, useEffect} from 'react';
import ArticleList from './components/ArticleList';
import Form from './components/Form'

function App() {

  const [articles, setArticles] = useState([])
  const [editedArticle, setEditedArticle] = useState(null)

  useEffect(() => {
   fetch('http://192.168.0.240:8333/get', {
      'method':'GET',
      headers: {
        'Content-Type':'application/json'

      }
    })

    .then(resp => resp.json())
    .then(resp => setArticles(resp))
    //.then(resp => console.log(resp))
    .catch(error => console.log(error))

  },[])

  const editArticle = (article) => {
    //console.log("hello world")
    setEditedArticle(article)

  }

  const updatedData = (article) => {
    const new_article = articles.map(my_article => {
      if(my_article.id === article.id) {
        return article
      } else {
        return my_article
      }
    })
    setArticles(new_article)


  }

const openForm = () => {
  setEditedArticle({title:'', body:''})
}

const insertedArticle = (article) => {
  const new_articles = [...articles, article]
  setArticles(new_articles)
}

const deleteArticle = (article) => {
  const new_articles = articles.filter(myarticle => {
    if(myarticle.id === article.id) {
      return false;
    }
    return true
  })

  setArticles(new_articles)
}



  return (
    <div className="App">
      <div className = "row">
        <div className = "col">
          <h1>Hello again react</h1>
        
        </div>
        <div className = "col">
          <button className = "btn btn-success"
          onClick = {openForm}
          >InsertArticle</button>
        </div>
      </div>
      
      <br/>
      <br/>

      <ArticleList articles = {articles} editArticle = {editArticle}  deleteArticle = {deleteArticle}/>
      
      {editedArticle ? <Form article = {editedArticle} updatedData = {updatedData} insertedArticle = {insertedArticle}/> : null}

      
    </div>
  );
}

export default App;
