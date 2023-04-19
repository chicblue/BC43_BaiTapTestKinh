import React, { Component } from 'react'
import dataGlasses from "./dataGlasses.json";
import './TestGlasses.css'
export default class TestGlasses extends Component {

    state = {
        glassesCurent: {
            "id": 2,
            "price": 50,
            "name": "GUCCI G8759H",
            "url": "./glassesImage/v2.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    }
  




    renderGlasessList = () => {
        return dataGlasses.map((glassesItem, Index) => {
            return <img onClick={()=>{this.changeGlasses(glassesItem)}} className='ms-2 p-2 border border-2 img-list' key={Index} src={glassesItem.url} />
        });
    }
    changeGlasses = (newGlasses)=>{
        this.setState({
            glassesCurent:newGlasses
        })
    }
    render() {
        return (

            <div style={{backgroundImage:'url(./glassesImage/background.jpg)',backgroundSize: '1300px',minHeight: '1000px'}}>
                <div className="bg-opacity">
                    <h3 style={{ backgroundColor: 'rgba(0,0,0,0.3)' }} className='  text-light fs-1 text-center py-3 '> Try Glasses App Online</h3>
                    <div className="container">
                        <div className='row mt-5 text-center'>
                            <div className='col-6'>
                                <div className='position-relative'>
                                    <img className="img-model position-absolute " src="./glassesImage/model.jpg" alt='model.jpg' />
                                    <img class="position-absolute img-glasses" src={this.state.glassesCurent.url} />
                                    <div className='position-relative info-glasses '>
                                        <span className='fw-bold text-primary'>{this.state.glassesCurent.name}</span><br />
                                        <span className='fs-des'>{this.state.glassesCurent.desc}</span>
                                    </div>
                                </div>
                            </div>
                            <div className='col-6'>
                                <img className='img-model' src="./glassesImage/model.jpg" alt='model.jpg'></img>

                            </div>
                        </div>
                        <div className='bg-light container text-center mt-5 d-flex justify-content-center'>
                            {this.renderGlasessList()}
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
