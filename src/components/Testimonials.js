import React, { Component } from 'react';
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'
import { useNavigate } from 'react-router-dom';
export default class Testimonials extends Component {
  render() {
    let resumeData = this.props.resumeData;

    const navigate = useNavigate();

    const goToConnect = () => {
      navigate('/SignInscreen'); // rediriger vers la page d'accueil
    };
  
    return (
      <section id="testimonials">
        <div className="text-container">
          <div className="row">
            <div className="two columns header-col">
              <h1><span>Client Testimonials</span></h1>
            </div>
            <div className="ten columns flex-container">
              <div className="flexslider">
                <ul className="slides">
                  {
                    resumeData.testimonials && resumeData.testimonials.map((item)=>{
                      return(
                        <li>
                          <blockquote>
                            <p>
                            {item.description}
                            </p>
                            <cite>{item.name}</cite>
                          </blockquote>
                        </li>
                      )
                    })
                  }
                </ul>
              </div> {/* div.flexslider ends */}
            </div> {/* div.flex-container ends */}
          </div> {/* row ends */}
        </div>  {/* text-container ends */}
      </section>
        );
  }
}