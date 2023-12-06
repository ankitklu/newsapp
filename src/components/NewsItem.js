import React from 'react'

const NewsItem =(props)=> {
    let {title, description, imageUrl, newsUrl, author, date, source}= props;

    return (
      <div className="my-3">
        <div className="card">
        <button type="button" class="btn btn-info">{source}<span class="badge badge-light"></span></button>
          <img src={!imageUrl?"https://www.hindustantimes.com/ht-img/img/2023/11/28/1600x900/senthil_1691852664044_1701149899087.jpg":imageUrl} className="card-img-top" alt="..."/>
          <div className="card-body">
          
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small class="text-muted">By {author} on {date}</small></p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-primary">Read more</a>
          </div>
        </div>
      </div>
    )
}

export default NewsItem