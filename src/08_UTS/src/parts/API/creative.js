import React, { Component } from "react";

class Creative extends Component {
    state = {
        error: null,         // jika terjadi gagal ambil data dari API
        isLoaded: false,     // untuk status ketika sedang memuat
        dataArtikel: []      // untuk menampung data API
    };
    componentDidMount() {
        fetch("https://my-json-server.typicode.com/mahe62/mahe62.github.io/creative")
            .then(response => response.json())
            .then(
                (dataJson) => {
                    this.setState({
                        isLoaded: true,
                        dataArtikel: dataJson
                    })
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                })
    }
    render() {
        const { error, isLoaded, dataArtikel } = this.state;

        if (error) {
            return <div>Terjadi galat: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Sedang memuat...</div>;
        } else {
            return (
                <div>
                    {
                        dataArtikel.map(creative => {
                            return <DaftarArtikel title={creative.title} kategori={creative.kategori} pic={creative.img} />
                        })
                    }
                </div>
            );
        }
    }

}
function DaftarArtikel(props) {
    console.log(props)
       return (
        <div class="mix category-2 col-md-3 col-sm-6">
            <div class="thumb-p">
                <img src={props.pic} alt="" />
                <div class="overlay-p">
                    <a href="images/p1.jpg" data-rel="lightbox"><i class="fa fa-plus"></i></a>
                </div>
            </div>
            <div class="content-p">
                <h4>{props.title}</h4>
                <span>{props.kategori}</span>
            </div>
        </div>
    );
    
}
export default Creative