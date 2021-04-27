import React from 'react';
import API from '../services/Artikel';
import {
    Button,
    Card
} from 'react-bootstrap';

function DaftarArtikel(props) {
    return (
        <div>
            <Card.Body>
                <Card.Title><h2>{props.judul}</h2></Card.Title>
                <Card.Text>
                    {props.isiArtikel}
                </Card.Text>
            </Card.Body>
        </div>
    );
}
export default class BlogPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataArtikel: [],
            postArtikel: {
                userId: 1,
                title: '',
                body: ''
            }      // untuk menampung data API
        };
    }
    handleTombolSimpan = (e) => {
        e.preventDefault();

        API.postNewsBlog(this.state.postArtikel)
            .then((response) => {
                this.ambilDataDariServerAPI();    // refresh data
                alert('Data berhasil disimpan!');
            });
    }
    handleOnChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        this.setState(prevState => {
            prevState.postArtikel[name] = value;
            return {
                postArtikel: prevState.postArtikel
            };
        });
    }
    handleTombolHapus = (e) => {
        e.preventDefault();

        API.deleteNewsBlog(e.target.value)
            .then((response) => {
                this.ambilDataDariServerAPI();    // refresh data
                alert('Data berhasil dihapus!');
            });
    }
    ambilDataDariServerAPI = () => {
        API.getNewsBlog().then(result => {
            this.setState({
                dataArtikel: result
            })
        })
    }

    componentDidMount() {
        this.ambilDataDariServerAPI()
    }

    render() {
        const { dataArtikel, postArtikel } = this.state;

        return (
            <div>
                    <div>
                        <form onSubmit={this.handleTombolSimpan}>
                            <label>
                                Judul Artikel:
                  <input type="text" name="title" defaultValue={postArtikel.title} onChange={this.handleOnChange} />
                            </label>
                            <label>
                                Isi Artikel:
                  <input type="text" name="body" defaultValue={postArtikel.body} onChange={this.handleOnChange} />
                            </label>
                            <input type="submit" value="Simpan" />
                        </form>
                    </div>
                    <hr></hr>
                        <h2>Daftar Artikel</h2>
                    {
                        dataArtikel.map(artikel => {
                            return (

                                <div key={artikel.id}>
                                        <Card style={{ width: '20rem' }}>
                                            <DaftarArtikel judul={artikel.title} isiArtikel={artikel.body} />
                                            <Button variant="outline-danger" value={artikel.id} onClick={this.handleTombolHapus}>Hapus</Button>

                                        </Card>
                                </div>

                            )
                        })
                    }
            </div >
        );
    }
}