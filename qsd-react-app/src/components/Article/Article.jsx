import './Article.css'
import React from 'react'

export function Article({thumbnail, url, title, provider, description}) {
    return (
        <article id='article'>
            <img src={thumbnail} alt="" />

            <div className="article-infos">
                <a href={url} >{title}</a>
                <h3>{provider}</h3>

                <p>{description}</p>
            </div>
        </article>
    )
}