import { articles_url, country_code, category, _api_key} from '../config/config';

export async function getArticles() {

    try {
        let articles = await fetch( `${articles_url}?country=${country_code}&category=${category}`, 
            {headers: {
                'X-API-Key': _api_key
            }
        });

        let result = await articles.json();
        articles = null;

        return result.articles;
    }
    catch(error) {
        throw error;
    }
}