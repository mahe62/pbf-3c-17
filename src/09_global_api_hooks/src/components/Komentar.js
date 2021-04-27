import React from 'react';
import API from '../services/Komentar';
import {
    Button,
    Card,
    Container,
    Row, Col
} from 'react-bootstrap';
function DaftarKomentar(props) {
    return (
        <div>
            <Card.Body>
                <Card.Title><h2>{props.nama}</h2></Card.Title>
                <Card.Text>
                    {props.isiKomentar}
                </Card.Text>
            </Card.Body>

        </div>
    );
}
export default class CommentPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataKomentar: [],
            postKomentar: {
                userId: 1,
                nama: '',
                comment: ''
            }      // untuk menampung data API
        };
    }
    handleTombolSimpan = (e) => {
        e.preventDefault();

        API.postNewsComment(this.state.postKomentar)
            .then((response) => {
                this.ambilDataDariServerAPI();    // refresh data
                alert('Data berhasil disimpan!');
            });
    }
    handleOnChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        this.setState(prevState => {
            prevState.postKomentar[name] = value;
            return {
                postKomentar: prevState.postKomentar
            };
        });
    }
    handleTombolHapus = (e) => {
        e.preventDefault();

        API.deleteNewsComment(e.target.value)
            .then((response) => {
                this.ambilDataDariServerAPI();    // refresh data
                alert('Data berhasil dihapus!');
            });
    }
    ambilDataDariServerAPI = () => {
        API.getNewsComment().then(result => {
            this.setState({
                dataKomentar: result
            })
        })
    }

    componentDidMount() {
        this.ambilDataDariServerAPI()
    }

    render() {
        const { dataKomentar, postKomentar } = this.state;

        return (
            <div>
                <h2>Komentar</h2>
                <div>

                    <form onSubmit={this.handleTombolSimpan}>
                        <label>
                            Nama:
                                    <input type="text" name="nama" defaultValue={postKomentar.title} onChange={this.handleOnChange} />
                        </label>
                        <label>
                            Isi Komentar:
                                    <input type="text" name="comment" defaultValue={postKomentar.body} onChange={this.handleOnChange} />
                        </label>
                       
                        <Button> <input type="submit" value="Simpan" /></Button>
                    </form>
                </div>
                <hr></hr>
                {
                    dataKomentar.map(comment => {
                        return (
                            <div key={comment.id}>
                                <Card style={{ width: '18rem' }}>
                                    <DaftarKomentar nama={comment.nama} isiKomentar={comment.comment} />
                                    <Button variant="danger" value={comment.id} onClick={this.handleTombolHapus}>Hapus</Button>
                                    <hr></hr>
                                </Card>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}