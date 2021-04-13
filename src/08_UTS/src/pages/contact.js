import Fourth from '../component/fourth';
import Kontak from '../component/kontak';
export default function Contact() {
    return (
        <div>
             <div class="page-h">
        <div class="container">
            <div class="row">
                <div class="col-md-12 text-center">
                    <h3>Contact</h3>
                </div>
            </div>
        </div>
    </div>
    
    
    <div class="contact">
        <Kontak/>
    </div>


    <div class="fourth-section">
        <Fourth/>
    </div>
        </div>
    );
}