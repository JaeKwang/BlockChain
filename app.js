import {API_KEY} from "./config.js";

const endPoint = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
const newsList = document.getElementById("news-list");

async function fetchData()
{
    try
    {
        const res = await fetch(endPoint);
        const data = await res.json();
        appendNews(data.articles);

    } catch (error){
        newsList.innerHTML = `<li>Fail to load news => ${error}</li>`;
    }
}

function appendNews(article)
{
    newsList.innerHTML = "";
    article.forEach((v) => {
        console.log(v);
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <h2>${v.title}</h2>
            ${v.description != null ? `<p>${v.description}</p>` : `<h>No Data</h>`}
            <a href="${v.url}" target="_blank">link</a>
        `;
        newsList.appendChild(listItem);
    })
}

fetchData();
