import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"


const RecipeTeaser = ({recipeTitle, recipeDate, recipeSummary, recipeImg, recipeSlug}) => (
  <div>
    <Img fixed={recipeImg} />
    <Link to={recipeSlug}>
      <h2>{recipeTitle}</h2>
    </Link>
    <p>{recipeDate}</p>
    <p>{recipeSummary}</p>
  </div>
)

export default RecipeTeaser

