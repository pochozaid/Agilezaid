import { Component, State } from '@stencil/core';

@Component({
    tag: "spi-list",
    styleUrl: "spi-list.scss"
})
export class SpiList {
    
    @State() posts: any = [];
    @State() posts2: any =[];

    componentWillLoad() {
        return fetch('http://app-aead2b86-a4bb-4a14-9b97-cd0d09d78ae6.cleverapps.io/formations')
        .then(response => response.json())
        .then(data => {
        this.posts = data;
        console.log(this.posts)
        });
        }

        componentDidLoad() {
            this.modifyselection();
        }

    modifyselection( ) {   
        let rows = document.getElementsByTagName('tr');
        for (var i = 1; i < rows.length; i++) {
            let element = rows[i];
            element.onmouseover = () => element.classList.toggle('is-selected');
            element.onmouseout = () => element.classList.toggle('is-selected');
        }
    }

    deletefnct(pst){
        let url='http://app-aead2b86-a4bb-4a14-9b97-cd0d09d78ae6.cleverapps.io/formations'
        return fetch((url),{
        method:'DELETE',headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(pst),
          }).then(() => {alert("Deleted !!");
          location.href='/list';
        }).catch((error) => {
            alert(' Error ! please retry !! ');
            console.error(error);
          });
    }

    
    getensbynum(num) {
        this.getens();
        let url = 'http://app-aead2b86-a4bb-4a14-9b97-cd0d09d78ae6.cleverapps.io/formations'
        return fetch(url + num)
            .then(response => response.json())
            .then(data => {
                this.posts2 = data;
                console.log(this.posts2);
            });
        
    }

    getens(){
        let t1 = document.getElementById("md");
        t1.classList.toggle("is-active");
    }
    getens2(){
        let t1 = document.getElementById("md");
        t1.classList.remove("is-active");
        //t1.classList.toggle("is-clipped ");
    }

    render() {
        return (
            
            <section class="container">
            <div class="container has-text-centered">
                  
                  <h1 class="title">
                  <br></br><br></br>
                  <div class="section-heading">
       <h2 class="title is-3"><font color="white">Toutes les formations:</font></h2><br></br>
       
      </div>
                      </h1>
                      </div>
            <br></br>
              <div class="columns features">
              <div class="columns is-desktop is-multiline">
              {this.posts.map(
                            (pst) =>
                <div class="column is-4">
                  <div class="card is-shady">
                    <div class="card-image">
                      <figure class="image is-4by3">
                        <img src="http://financeparticipative.org/wp-content/uploads/2018/06/Formations-FPF-e1529498115967.png" alt="Placeholder image" class="modal-button" data-target="modal-image2"/>
                      </figure>
                    </div>
                    <div class="card-content">
                      <div class="content">
                        <h4>{pst.nomFormation}</h4>
                        <p>{pst.codeFormation}</p>
                        <div class="field is-grouped">
                        <p class="control">
                        <stencil-route-link url={'/ue/'+pst.codeFormation}>       
                       <a class="button is-link" id="showModal"><i class="fas fa-info"></i>&nbsp;Détails</a>
                       </stencil-route-link> 
                        </p>
                        <p class="control">
                            <a class="button is-danger" onClick={() => this.deletefnct(pst)}><i class="fas fa-trash-alt"></i>&nbsp;Supprimer</a>
                        </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                )}
                
                   
           </div>
            </div>
        </section>
        );
    }
}