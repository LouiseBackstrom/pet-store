import React from 'react'
import ListItem from '././ListItem/ListItem'
import { Food } from './ProductScreen'

interface Props {
    items: Food[]
    
    addFood: (food: Food) => void
}

class List extends React.Component<Props> {
    
   
    render () {
    return (
        <div>
            <ul>
                {this.props.items.map((item) => { 
                return <ListItem 
                key={item.id}
                food={item} 
                addToCart={this.props.addFood}
                />})};
            </ul>
        </div>
        )
    }
}

export default List