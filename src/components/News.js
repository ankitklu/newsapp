import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';
import PropTypes from 'prop-types';

const News = (props) => {

    const [articles, setArticles] = useState([]);
    // const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            console.log("componentDidMount");
            let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=3aac54aa8c0c49ec84df76a1dca01b10&page=1&pageSize=${props.pageSize}`;
            let data = await fetch(url);
            let parsedData = await data.json();
            console.log(parsedData);

            setArticles(parsedData.articles);
            setTotalResults(parsedData.totalResults);
        };

        fetchData();
    }, [props.country, props.category, props.pageSize]);

    const controlNextPage = async () => {
        if (page + 1 > Math.ceil(totalResults / props.pageSize)) {
            // Handle reaching the last page
        } else {
            console.log("Next page");
            let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=3aac54aa8c0c49ec84df76a1dca01b10&page=${page + 1}&pageSize=${props.pageSize}`;
            let data = await fetch(url);
            let parsedData = await data.json();
            console.log(parsedData);

            setPage(page + 1);
            setArticles(parsedData.articles);
        }
    };

    const controlPrevPage = async () => {
        if (page <= 1) {
            // Handle reaching the first page
        } else {
            console.log("Prev page");
            let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=3aac54aa8c0c49ec84df76a1dca01b10&page=${page - 1}&pageSize=${props.pageSize}`;
            let data = await fetch(url);
            let parsedData = await data.json();
            console.log(parsedData);

            setPage(page - 1);
            setArticles(parsedData.articles);
        }
    };

    return (
        <>
            <div className="container my-3">
                <h2 className="text-center" style={{marginTop:'80px'}}>Monkey News headlines</h2>
                <div className="row">
                    {articles.map((element) => (
                        <div className="col-md-4" key={element.url}>
                            <NewsItem
                                title={element.title ? element.title : ""}
                                description={element.description ? element.description : ""}
                                imageUrl={element.urlToImage ? element.urlToImage : ""}
                                newsUrl={element.url ? element.url : ""}
                                author={element.author ? element.author : "Anonymous"}
                                date={element.publishedAt}
                                source={element.source.name}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className="container d-flex justify-content-between">
                <button type="button" disabled={page <= 1} className="btn btn-dark" onClick={controlPrevPage}>&larr; Previous</button>
                <button type="button" disabled={page + 1 > Math.ceil(totalResults / props.pageSize)} className="btn btn-dark" onClick={controlNextPage}>Next &rarr;</button>
            </div>
        </>
    );
};

News.defaultProps = {
    country: "in",
    pageSize: 8
};

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number
};

export default News;
