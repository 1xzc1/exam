import { useEffect, useState } from "react";
import axios from "../../axios";

const UseEffect = () => {
    const [searchText, setSearchText] = useState('');
    const [result, setResult] = useState({});
    const [list, setList]= useState(null);

   
    const onChange = (e) => {
        setSearchText(e.target.value);
    }
    const search = () => {
        let url= '/search.json?q='
        let text = searchText
        if(text.length > 0) {
            text.split(' ').join('+');
            url += text;

            axios.get(url).then(res=>{
                setResult(res.data);
            })
        }
    }
    useEffect(()=>{
        if (result && result.docs) {
        let list = result.docs.map(item => {
            return (
                <li key={item.key}>
                    <div>
                        <img src={`https://covers.openlibrary.org/b/id/${item.cover_i}-M.jpg`}/>
                    </div>
                    <div>
                        <span>Author: {item.author_name}</span>
                        <br/>
                        <span>Book title: {item.title}</span>
                    </div>
                </li>
            )
        })
        setList(list)}

    },[result])
    
    return (
        <div>
            <label>
                search book 
                <input onChange={onChange}/>
                <button onClick={search}>search</button>
            </label>
            <ul>
                {list}
            </ul>
        </div>
    )
}

export default UseEffect;