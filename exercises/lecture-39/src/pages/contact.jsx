import Nav from '../nav';
import './contact.css'
function Contact() {
    return (
        <>
            <Nav />
            <div className="wrapper">
                <div className="form-container">
                    <div className="col-left">
                        <div className="login-text">
                            <h2>Welcome Back</h2>
                            <p>Create your account.<br />It's totally free.</p>
                            <a className="btn" href="">Sign Up</a>
                        </div>
                    </div>

                    <div className="col-right">
                        <div className="login-form">
                            <h2>Form</h2>
                            <form>
                                <p>
                                    <label>Username or email address<span>*</span></label>
                                    <input type="text" placeholder="Username or Email" required />
                                </p>
                                <p>
                                    <label>Message<span>*</span></label>
                                    <input type="text" placeholder="Message" required />
                                </p>
                                <p>
                                    <input type="submit" value="Send" />
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
