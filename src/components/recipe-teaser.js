import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"


const RecipeTeaser = ({recipeTitle, recipeDate, recipeSummary, recipeImg}) => (
  <div>
    <Img fixed={recipeImg} />
    <h2>{recipeTitle}</h2>
    <p>{recipeDate}</p>
    <p>{recipeSummary}</p>
  </div>
)

export default RecipeTeaser

