import React, { Component } from "react";

class IngredientList extends Component {
  state = [
    { name: "Kaiser Bun", color: "saddlebrown" },
    { name: "Sesame Bun", color: "sandybrown" },
    { name: "Gluten Free Bun", color: "peru" },
    { name: "Lettuce Wrap", color: "olivedrab" },
    { name: "Beef Patty", color: "#3F250B" },
    { name: "Soy Patty", color: "#3F250B" },
    { name: "Black Bean Patty", color: "#3F250B" },
    { name: "Chicken Patty", color: "burlywood" },
    { name: "Lettuce", color: "lawngreen" },
    { name: "Tomato", color: "tomato" },
    { name: "Bacon", color: "maroon" },
    { name: "Onion", color: "lightyellow" },
    { name: "Avocado", color: "brightgreen" },
    { name: "Mustard", color: "yellow" },
    { name: "Ketchup", color: "red" },
    { name: "Mayonaisse", color: "offwhite" },
  ];

  render() {
    return (
      <>
        <div>
          <input
            type="text"
            value={this.props.Ingredient}
            onClick={this.props.handleFilterChange}
            id="ing"
          />
        </div>
      </>
    );
  }
}

export default IngredientList;
