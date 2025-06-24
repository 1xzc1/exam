import { useEffect, useState } from "react";
import {searchBooks} from "../../store/actions"
import { connect } from "react-redux";


const mapStateToProps = state => {
    return {
        data: state.books.books
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        search: (data) => dispatch(searchBooks(data)),
    }
}
const UseEffect = (props) => {
    const [searchText, setSearchText] = useState('');
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
            
            props.search(url)
        }
    }
    useEffect(()=>{
        if (props.data && props.data.docs) {
        let list = props.data.docs.map(item => {
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

    },[props.data])
    
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

export default connect(mapStateToProps, mapDispatchToProps)(UseEffect);