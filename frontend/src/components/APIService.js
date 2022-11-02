export default class APIService {
    static UpdateArticle(id, body) {
        return fetch(`http://192.168.0.240:8333/update/${id}/`, {
            'method':'PUT',
            headers: {
              'Content-Type':'application/json'
      
            },
            body: JSON.stringify(body)
          })
          .then(resp => resp.json())
    }

    static InsertArticle(body) {
        return fetch(`http://192.168.0.240:8333/add`, {
            'method':'POST',
            headers: {
              'Content-Type':'application/json'
      
            },
            body: JSON.stringify(body)
          })
          .then(resp => resp.json())
    }


    static DeleteArticle(id) {
        return fetch(`http://192.168.0.240:8333/delete/${id}/`, {
            'method':'Delete',
            headers: {
              'Content-Type':'application/json'
      
            },
            
          })
          
    }



}


