// import React from 'react';
// import '../App.scss';
//
// function Tour() {
//     return (
//         <div>
//             <h1>This is Tour page!</h1>
//         </div>
//     );
// }
//
// export default Tour ;

import React, { Component } from "react";
import "../sassc/tour.scss";
import "../Data/TourList"
import "../Data/TourData"

export default class Tour extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1,
        };
    }
    state = {
        showInfo: false,
    };
    handleInfo = () => {
        this.setState({
            showInfo: !this.state.showInfo,
        });
    };
    addCount = () => {
        this.setState({ count: this.state.count + 1 });
    };
    lowerCount = () => {
        this.setState({ count: this.state.count - 1 });
    };
    resetCount = () => {
        this.setState({ count: 0 });
    };
    render() {
        const { id, ten, img, gia, info } = this.props.tour;
        const { removeTour } = this.props;

        return (
            <article className="Tour">
                <div className="img-container">
                    <img src={img} alt="city tour" />
                    <span className="close-btn" onClick={() => removeTour(id)}>
            <i className="fas fa-window-close" />
          </span>
                </div>
                <div className="tour-info">
                    <h3>{ten}</h3>
                    <h4>{gia}</h4>
                    <h3>SL : {this.state.count}</h3>
                    <h5>
                        info{" "}
                        <span onClick={this.handleInfo}>
              <i className="fas fa-caret-square-down" />
            </span>
                    </h5>

                    {this.state.showInfo && <p>{info}</p>}
                    <button type="button" onClick={this.addCount}>
                        +
                    </button>
                    <button type="button" onClick={this.lowerCount}>
                        -
                    </button>
                    <button type="button" onClick={this.resetCount}>
                        More
                    </button>
                </div>
            </article>
        );
    }
}

