import React,{Component} from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css';



class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      data : [
        {label: 'Learning React...', important: false, like: false, id:1},
        {label: 'Writing JSX code', important: false, like: false, id:2},
        {label: 'Coding...', important: false, like: false, id:3}
      ],
      text: '',
      filter: 'all'
    }
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.important = this.important.bind(this);
    this.liked = this.liked.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
    this.onFilterSelect = this.onFilterSelect.bind(this);


    this.maxId = 4;
  }
  deleteItem(id){
    this.setState(({data}) => {
      const index = data.findIndex(elem => elem.id === id);
      const before = data.slice(0,index);
      const after = data.slice(index + 1);
      return {
        data: [...before,...after]
      }
    })
  }
  addItem(body){
    const newPost = {
      label: body,
      important: false,
      id: this.maxId++
    }
    this.setState(({data}) => {
      const newArr = [...data, newPost]
      return {
        data: newArr
      }
      
    })
  }

  important(id){
    this.setState(({data}) => {
      const index = data.findIndex((elem) => elem.id === id);
      const item = data[index];
      const newItem = {...item, important: !item.important};
      const newArr = [...data.slice(0,index), newItem, ...data.slice(index + 1)];
      return {
        data: newArr
      }
    })
  }

  liked(id){
    this.setState(({data}) => {
      const index = data.findIndex((elem) => elem.id === id);
      const item = data[index];
      const newItem = {...item, like: !item.like};
      const newArr = [...data.slice(0,index), newItem, ...data.slice(index + 1)];
      return {
        data: newArr
      }
    })
  }

  search(items,term){
    if (term.length === 0){
      return items
    }

    return items.filter(item => {
      return item.label.indexOf(term) > -1
    })
  }

  filterP(items,filter){
    if (filter === 'like'){
      return items.filter(e => e.like)
    } else {
      return items
    }
  }

  onUpdate(text){
    this.setState({text})
  }

  onFilterSelect(filter){
    this.setState({filter})
  }

  render(){
    const {data,text,filter} = this.state;
    const likedPosts = data.filter((e) => e.like).length;
    const allPosts = data.length;

    const showPosts = this.filterP(this.search(data,text),filter)

    return (
      <div className='app'> 
        <AppHeader likedPosts={likedPosts} allPosts={allPosts}/>
        <div className='search-panel d-flex'>
          <SearchPanel onUpdate={this.onUpdate}/>
          <PostStatusFilter onFilterSelect={this.onFilterSelect}/>
        </div>
        <PostList data={showPosts} onDelete={this.deleteItem} onToggleImportant={this.important} onToggleLiked={this.liked}/>
        <PostAddForm onAdd={this.addItem}/>
      </div>
      
    )
  }
}


export default App;