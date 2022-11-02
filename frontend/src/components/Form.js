import React, {useState} from 'react'
import APIService from '../components/APIService';

function Form(props) {
    const [title, setTitle] = useState(props.article.title)
    const [body, setBody] = useState(props.article.body)

    const updateArticle = () => {
        APIService.UpdateArticle(props.article.id, {title, body})
        .then(resp => props.updatedData(resp))
        .catch(error => console.log(error))

    }

    const insertArticle = () => {
        APIService.InsertArticle({title, body})
        .then(resp => props.insertedArticle(resp))
        .catch(error => console.log(error))

    }


    return (
        <div>
            {props.article ? (

                <div className = "mb-3">
                    <label htmlFor = "title" className = "form-label">Title</label>
                    <input type="text" className = "form-control" value = {title} placeholder = "Please Enter title" onChange = {(e) => setTitle(e.target.value)}/>
                
                
                    <label htmlFor = "body" className = "form-label">Description</label>
                    <textarea row = "5" value = {body} onChange = {(e) => setBody(e.target.value)} className = "form-control" placeholder = "Please Enter Description"/>
                    { props.article.id ? <button onClick = {updateArticle} className = "btn btn-success mt-3" >Update</button>
                    :
                    <button onClick = {insertArticle} className = "btn btn-success mt-3" >insert</button>
                    }
                    
                
                
                </div>
            
            ):null}  
        </div>
    )

}          
    
export default Form
