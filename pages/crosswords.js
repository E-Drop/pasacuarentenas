import React from 'react';
import CrossWordsComponent from '../components/CrossWordsComponent';

const completed = [[{},{value:'o', number: 1},{value:'f'},{value:'t'},{value:'a'},{value:'l', number: 2},{value:'m'},{value:'o'},{value:'l'},{value:'o'},{value:'g'},{value:'o'},{}],[{},{},{},{},{},{value:'e'},{},{},{},{},{},{},{}],[{value:'c', number: 3},{value:'o'},{value:'n'},{value:'j'},{value:'u'},{value:'n'},{value:'t'},{value:'i'},{value:'v'},{value:'i'},{value:'t'},{value:'i'},{value:'s'}],[{value:'i'},{},{},{},{},{value:'t'},{},{},{},{},{},{},{}],[{value:'e'},{},{value:'p', number:4},{value:'u'},{value:'p'},{value:'i'},{value:'l'},{value:'a'},{},{},{},{},{}],[{value:'g'},{},{value:'a'},{},{},{value:'l'},{},{},{},{value:'v', number: 5},{},{},{}],[{value:'o'},{},{value:'r'},{},{},{value:'l', number: 6},{value:'a'},{value:'g'},{value:'r'},{value:'i'},{value:'m'},{value:'a'},{value:'l'}],[{},{},{value:'p'},{},{},{value:'a'},{},{},{},{value:'s'},{},{},{}],[{},{value:'g', number: 7},{value:'a'},{value:'f'},{value:'a'},{value:'s'},{},{value:'o', number: 8},{value:'p'},{value:'t'},{value:'i'},{value:'c', number: 9},{value: 'a'}],[{},{},{value:'d'},{},{},{},{},{},{},{value:'a'},{},{value:'e'},{}],[{},{},{value:'o'},{},{},{},{},{},{},{},{},{value:'j'},{}],[{value:'p', number: 10},{value:'e'},{value:'s'},{value:'t'},{value:'a'},{value:'ñ'},{value:'a'},{value:'s'},{},{},{},{value:'a'},{}],[{},{},{},{},{},{},{},{},{value:'i', number: 11},{value:'r'},{value:'i'},{value:'s'},{}]];

export default class CrossWords extends React.Component{
  constructor(props) {
    super(props);
    this.state= {
    };
  }

  render(){

    return (
      <div>
      <h1>CrossWords #1</h1>
      <CrossWordsComponent completed={completed}/>
      </div>
    )
  }
};
