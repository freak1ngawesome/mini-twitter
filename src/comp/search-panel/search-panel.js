import React,{Component} from 'react';
import './search-panel.css'

class SearchPanel extends Component{
  constructor(props){
    super(props);
    this.state = {
      text: ''
    }
    this.onUpdate = this.onUpdate.bind(this);
  }

  onUpdate(e){
    const text = e.target.value;
    this.setState({text})
    this.props.onUpdate(text)
  }

  render(){
    return (
      <input
        className='form-control search-input'
        type='text'
        placeholder='Поиск по записям'
        onChange={this.onUpdate}
      />
    )
  }
}

export default SearchPanel;