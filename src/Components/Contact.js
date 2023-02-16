
import "./Contact.css"
import "../App.css"

export default function Contact() {
  return (
    <div className="container contactDiv ScrollSnapStart">
        <div className="col-lg-4 col-9 mx-auto ">
            <h1 className="text-center mb-4">contact me</h1>
            <form className="d-flex flex-column justify-content-center">
            
                    <input className=" mb-4" type="text" name="name" placeholder="name"/>


                    <input className=" mb-4" type="email" name="email" placeholder="email"/>

                    <textarea className=" mb-4" name="message" placeholder="say something like &quot;Hi, i'd like to hire you&quot;" />


                <button className="btn btn-sm btn-light greenBtn mb-3">submit</button>
                <a href="https://wa.link/bgcmwk" target="_blank" className="btn btn-sm btn-outline-light greenBtn">WhatsApp me</a>
            </form>
        </div>
    </div>
  )
}
