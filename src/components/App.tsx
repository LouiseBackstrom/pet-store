import React from "react"
import StartScreen from "./StartScreen"
import ProductScreen from "./ProductScreen"
import CheckoutScreen from "./CheckoutScreen"
import NavigationMenu from "./NavigationMenu";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export interface Food {
    id: number
    type: string
    animal: string
    img: string
    quantity: number
  }
export type Cart = {
    id: number
    type: string
    animal: string
    img: string
    quantity: number
  }
  
  interface Props {}

  interface State {
    dcfood: Food[]
    cart: Cart[]
    quantity: number
    food: Food[]
  }

export default class App extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
          dcfood: [{
            id: 0,
            type: 'dry',
            animal: 'dog',
            img: 'https://cdn.royalcanin-weshare-online.io/XiKc-mQBaxEApS7LrwSZ/v2/mini-dental-ccn-packshot?w=320&auto=compress&fm=jpg',
            quantity: 1
          }, {
            id: 1,
            type: 'wet',
            animal: 'dog',
            img: 'https://cdn.royalcanin-weshare-online.io/zCJQa2sBaxEApS7LRh5U/v80/ad-jack-russel-packshot-bhn18?w=320&auto=compress&fm=jpg',
            quantity: 1
          }, {
            id: 2,
            type: 'dry',
            animal: 'cat',
            img: 'https://cdn.royalcanin-weshare-online.io/m2kUrmsBG95Xk-RB3Pu-/v4/hairskin-ne-fcn-packshot?w=320&auto=compress&fm=jpg',
            quantity: 1
          }, {
            id: 3,
            type: 'wet',
            animal: 'cat',
            img: 'https://cdn.royalcanin-weshare-online.io/-Gkua2QBG95Xk-RBidKW/v2/16-kitten-sterilised-b1-ne?w=320&auto=compress&fm=jpg',
            quantity: 1
        }],
            cart: [],
            quantity: 1,
            food: []
        }
      }

      addFood = (food: Food)=>{
        this.setState({
          cart: [...this.state.cart, food]
          })
      }

      handleRemove = (food: Food) => {
        let index = this.state.cart.indexOf(food);
    
        this.setState({
          quantity: this.state.quantity - 1,
          cart: [
            ...this.state.cart.slice(0, index),
            ...this.state.cart.slice(index + 1),
          ]
        })
      }
      addOne(){}

    render() {
    return (
      <Router>
        <div className="App">
          <nav>
          <NavigationMenu>
            {/* här ska button kopplas till rätt route path? */}
          </NavigationMenu>
          </nav>
        
        <Switch>
          <Route path="/" exact component={StartScreen}>
            <StartScreen />
            </Route>
            <Route path="/ProductScreen" component={ProductScreen}>
            <ProductScreen dcfood={this.state.dcfood} cart={this.state.cart} addFood={this.addFood}/>
            </Route>
            <Route path="/CheckoutScreen" component={CheckoutScreen}>
            {this.state.cart.map(item => (
            <CheckoutScreen food={item} handleRemove={this.handleRemove} cart={this.state.cart} addOne={this.addOne}/>
            ))}
            </Route>
            
       </Switch>
        </div>
        </Router>
        )
  }

}