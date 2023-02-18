import React, { Component } from "react";

export class Newsitem extends Component {
   
  render() {
    let { title, description,imageUrl,newsUrl,author,date } = this.props;
    return (
      <div className="my-3">
        <div className="card" >
          <img src={!imageUrl?"https://i.pcmag.com/imagery/reviews/07wZ3lYnKMOabGl4Cxj2OvA-9.fit_scale.size_1028x578.v1569475752.png":imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted">By {!author?"unknown": author} on {date}</small></p>
            <a rel="noreferrer"href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Newsitem;
