import React, {Component} from 'react';
import "../styles/home.css";
import { init, destroy } from 'ityped';


class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            canShowContactBtn: false
        }
    }

    componentDidMount() {
        document.body.classList.add('bd-home');
        let that = this;
        // typed
        init(`#typedMessage`, {
            // required - for now, only accepting texts
            strings: ['Web Developer', 'Lifelong Learner', 'Frontend Developer'],
            //optional
            typeSpeed: 55, //default
            //optional
            backSpeed: 30, //default
            //optional
            startDelay: 500, //default
            //optional
            backDelay: 500, //default
            //optional
            loop: false, //default
            //optional
            showCursor: true, //default
            //optional
            cursorChar: "|", //default
            // optional callback called once the last string has been typed
            onFinished: function(){
                that.setState({
                    canShowContactBtn: true
                });
                console.log(that.state.canShowContactBtn);
            }
        });
    }

    componentWillUnmount() {
        document.body.classList.remove('bd-home');
    }

    render() {
        return (
            <div id="home" className="landing">
                <div className="modal fade" id="contactPopup" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Let's get in touch.</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p>If you would like to discuss your next project requirements or just chat over coffee please don't hesitate to contact me. I reply very fast over emails. I use phone number for emergencies only so I prefer email over phone.</p>
                                <a href="mailto:konstantindev925@gmail.com" className="btn btn-cta btn-lg btn-block mt-3">Email Me</a>
                            </div>
                        </div>
                    </div>
                </div>
                <header className="jumbotron text-center text-md-left hero">
                    <div className="container">
                        <h1 className="display-1">Konstantin Minevich</h1>
                        <h3 className="display-4"><span id="typedMessage"></span></h3>
                        <a href="#" data-toggle="modal" data-target="#contactPopup" className={"btn btn-cta btn-lg font-weight-bold mt-3" + (!this.state.canShowContactBtn ? " invisible" : " faded-in")}>Contact Me</a>
                    </div>
                </header>
            </div>
        )
    }
}

export default Home;
