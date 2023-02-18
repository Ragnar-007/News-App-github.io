import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'

export class News extends Component {
    static defaultProps = {
      country: 'in',
      pageSize: 8,
      category: 'general',
    }

    static propTypes = {
      country: PropTypes.string,
      pageSize: PropTypes.number,
      category: PropTypes.string,

    }
    capitalFirstLetter = (string)=>{
      return string.charAt(0).toUpperCase()+ string.slice(1);
    }
    constructor(props){
        super(props);
        console.log("Hello I am a constructor");
        this.state={
            articles: [],
            loading: true,
            page:1,
            totalResults:0
        }
        document.title = `${this.capitalFirstLetter(this.props.category)}- News Monkey`;
    }
    async updateNews(){
      this.props.setProgress(10);
      const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ee16b56e71f449cba52a0e52d9d51e22&pagesize=${this.props.pageSize}`;
      this.setState({loading: true});
      this.props.setProgress(30);
      let data = await fetch(url);
      let parsedData= await data.json();
      this.props.setProgress(50);
      console.log(parsedData);
      this.setState({articles: parsedData.articles,
         totalResults:parsedData.totalResults,
         loading: false
        })
        this.props.setProgress(100);
      
    }


    async componentDidMount(){
      this.updateNews();
    }


    handleprevclick = async ()=>{
      this.setState({page: this.state.page - 1});
      this.updateNews();


    }

    handlenextclick = async ()=>{
      console.log("Next");
      
      this.setState({page: this.state.page + 1});
      this.updateNews();
    
    }
     fetchMoreData=async () => {
      this.setState({page: this.setState+1})
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ee16b56e71f449cba52a0e52d9d51e22&pagesize=${this.props.pageSize}`;

      let data = await fetch(url);
      let parsedData= await data.json();
      console.log(parsedData);
      this.setState({
        articles: this.state.articles.concat(parsedData.articles),
         totalResults:parsedData.totalResults,
         
        })
    }
  render() {
    console.log("render")
    return (
      <div className="container my-3">
        <h2 className="text-center"> NewsMonkey - Top Headlines on {this.capitalFirstLetter(this.props.category)} category</h2>
        {this.state.loading && <Spinner/>} 
        <InfiniteScroll
        dataLength={this.state.articles.length}
        next={this.fetchMoreData}
        hasMore={this.state.articles.length!==this.state.totalResults}
        loader={<Spinner/>}
        >
          <div className="container">


          
        <div className="row">
            { this.state.articles.map((element)=>{
                return <div className="col-md-4" key={element.key}>
                <Newsitem  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt}/>
            </div>
            })}
            
        </div>
        </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handleprevclick}>  &larr; Previous</button>
        <button disabled={this.state.page + 1> Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handlenextclick}>  Next &rarr;</button>
        </div> */}
      </div>
    )
  }
}

export default News
