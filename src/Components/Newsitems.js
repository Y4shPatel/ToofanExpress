import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Newsitems extends Component {
  static propTypes = {

  }

  render() {
    let {title, description , imageUrl, newsUrl, author, date, source}= this.props
    return (
   <>
  <div className="card my-4" >
  <img src={!imageUrl?"https://cdn.ndtv.com/common/images/ogndtv.png":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}...  <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'90%',zIndex:'1'}}>
     {source}</span></h5>
    <p className="card-text">{description}...</p>
    <p class="card-text"><small class="text-muted">by {!author?"unknown":author} on {new Date(date).toGMTString()} </small></p>
    <a href={newsUrl}  className="btn btn-primary ">Read more</a>
  
  </div>
</div>
    
   </>
    )
  }
}

export default Newsitems
