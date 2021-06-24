//import react for functional components
import React, { Component } from "react";
import axios from "axios";
// ./ tells computer start in current directory
import PortfolioItem from "./portfolio-item";
//java script class


export default class PortfolioContainer extends Component {
//constructor will allow you to set an intial state for component list custom functions 
//requires super() keyword
    constructor() {
        super();
        //state is the state of your component duh

      this.state = {
          pageTitle: "Welcome to my portfolio",
          isLoading: false,
          data: []
      };
      //whenever using a custom function must bind function in constructor
      this.handleFilter = this.handleFilter.bind(this);

    }

    handleFilter(filter) {
        this.setState({
            data: this.state.data.filter(item => {
                return item.category === filter;
            })
        })
    }

    getPortfolioItems() {
        axios.get("https://jameshwu.devcamp.space/portfolio/portfolio_items")
      .then(response => {
        // handle success
        console.log("response data", response);
        this.setState({
            data: response.data.portfolio_items
        })
      })
      .catch(error => {
        // handle error
        console.log(error);
      })
      }
    

    portfolioItems() {
    
    
      //returns "Portfolio Item" from portfolio-item folder, loops through array on line 15
     return this.state.data.map(item => {
         debugger;
       return <PortfolioItem
        key={item.id}
         item= {item}
        />
       
     });
    }

    componentDidMount() {
        this.getPortfolioItems();
    }

    //click button on page and updates page title
    render() {
        if (this.state.isLoading) {
            return <div>Loading...</div>
        }


        //using <PortfolioItem /> less dynamic
        return (
            <div>
                <h2>{this.state.pageTitle}</h2>

                <button onClick={() => this.handleFilter('Swampmaster')}> 
                    Swampmaster
                </button>
                <button onClick={() => this.handleFilter('Secretly John Wick')}>
                    Secretly John Wick
                </button>
                <button onClick={() => this.handleFilter('super hot')}>
                    super hot
                </button>
                <button onClick={() => this.handleFilter('Best guys of 2021')}>
                    Best guys of 2021
                </button>
                
                {this.portfolioItems()}

            </div>
        );
    }
}