import React, { Component } from 'react'
import'./BlogPost.css';
import Post from './Post';
import API from '../../Services/index'

class BlogPost extends Component {
    state = {
        listArtikel: [],
        insertArtikel:{
            userID: 1, 
            id: 2, 
            title: "Silami1 GG",
            body: "Aymard GG"
        }
    }

    ambilDataDariServerAPI = () => {
        API.getNewsBlog().then(result => {
            this.setState({
                listArtikel: result
            })
        })
    }

    componentDidMount(){
        // fetch( 'https://jsonplaceholder.typicode.com/posts') 
        //     .then(response => response.json())
        //     .then(jsonHasilAmbilDariAPI => {
        //         this.setState( {
        //             listArtikel: jsonHasilAmbilDariAPI
        //         })
        //     })
        this.ambilDataDariServerAPI();
    }

    handleTombolSimpan = () => {
        // fetch('http://localhost:3001/posts',{
        //     method: 'post',
        //     headers: {
        //         'Accept' : 'application/json', 
        //         'Content-Type' : 'application/json'
        //     },
        //     body: JSON.stringify(this.state.insertArtikel)
        // })
        API.postNewsBlog(this.state.insertArtikel)
            .then((response) => {
                this.ambilDataDariServerAPI();
            });
    }

    handleHapusArtikel = (data) => {
        API.deleteNewsBlog(3);
        
    }
    render() {
        this.handleTombolSimpan();
        this.handleHapusArtikel();
        return (
            
            // <div class="post-artikel">
            //     <h2>Submission Aricle</h2>
            //     <div class="artikel">
            //         <div class="gambar-artikel">
            //             <img src="http://placeimg.com/80/80/tech" alt="Gambar, Tumbnail Artikel"/>
            //         </div>
            //         <div class="konten-artikel">
            //             <div className="judul-artikel">Article Title</div>
            //             <p className="isi-artikel">Filling Article</p>
            //         </div>
            //     </div>
            // </div>
            <div className="post-artikel">
                <h2>Daftar Artikel</h2>
                {
                    
                    this.state.listArtikel.map(artikel => {
                        return <Post key={artikel.id} judul = {artikel.title} isi = {artikel.body}/>
                    })
                }
                </div>
                  
        )
    }
}

export default BlogPost;
