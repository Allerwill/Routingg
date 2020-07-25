import React, { Component } from "react";
import Tour from "../views/Tour";
import { tourData } from "./TourData";
import "../sassc/tourlist.scss";


export default class TourList extends Component {
    state = {
        tours: tourData
    };
    removeTour = id => {
        const { tours } = this.state;
        const sortedTours = tours.filter(tour => tour.id !== id);
        this.setState({
            tours: sortedTours
        });
    };
    render() {
        // console.log(this.state.tours);
        const { tours } = this.state;

        return (
            <section className="tourList">
                {tours.map(tour => (
                    <Tour key={tour.id} tour={tour} removeTour={this.removeTour} />
                ))}
            </section>
        );
    }
}
