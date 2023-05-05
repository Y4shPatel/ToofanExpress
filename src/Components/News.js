import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import Newsitems from './Newsitems';
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) =>  {

    const [articles , setArticles] = useState([])
    const [loading , setLoading] = useState(true)
    const [page , setPage] = useState(1)
    const [totalresults , setTotalresults] = useState(0)
    // document.title= `TOOfanExpress - ${this.props.category}`




    const  updateNews = async ()=> {
     
        let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=15a355c476fc49e2b93993e2a26e9930&page=${page - 1}&pagesize=6`;
        setLoading(true)
        let data= await fetch(url)
        

        let parsedData= await data.json()
      

        setArticles(parsedData.articles)
        setTotalresults( parsedData.totalresults)
        setLoading(false)

}

    useEffect(()=> {
       updateNews();
    },[])

        
//     const handlePrevPage= async ()=> {
//     setPage(page - 1)
//         updateNews();
//     }

// const handleNextPage = async ()=>{
//     setPage(page + 1)
//         updateNews();}


    const    fetchMoreData = async() => {
       
         let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=15a355c476fc49e2b93993e2a26e9930&page=${page + 1}&pagesize=6`;
         setPage(page + 1);  
         let data= await fetch(url)
         let parsedData= await data.json()
          
         setArticles(articles.concat(parsedData.articles))
         totalresults(parsedData.totalresults)
          
    }

    
        return (
            <>
                <h1 style={{marginTop : '70px'}}> TOOfanExpress- Top {props.category} headlines</h1>
                <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalresults}
          loader={<h4>Loading...</h4>}
          >

            <div className="container">
                <div className="row">
                {articles.map((element) =>
                   { return <div className="col-md-4" key={element.url}>
                   <Newsitems title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,80):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/></div>
        
                })}
                </div>
                </div>
      </InfiniteScroll>

                 {/* <div className=" cotainer d-flex justify-content-between">
                 <button disabled={this.state.page<=1} type="button" className="btn btn-primary" onClick={this.handlePrevPage}>&larr; Previous page</button>
                 <button disabled={((this.state.page + 1)> Math.ceil((this.state.totalresults)/6))} type="button" className="btn btn-primary" onClick={this.handleNextPage}>Next Page &rarr;</button>
                 </div> */}
                    </>


              
                )
  
                }

News.defaultProps = {
    country:"in",
    pageSize:5,
    category: "general"

}

News.propTypes = {
country: PropTypes.string,
pageSize: PropTypes.number,
category: PropTypes.string,
} 


                export default News
