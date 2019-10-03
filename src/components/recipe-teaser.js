import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

//import Layout from "../components/layout"
//import Image from "../components/image"
//import SEO from "../components/seo"

const RecipeTeaser = ({recipeImg, imgAlt, recipeTitle, recipeDate, recipeSummary, recipeSlug}) => (
  <>
    <article>
	    <Link to={recipeSlug}> 
        <h2>{recipeTitle}</h2>
      </Link>
      <Img
        fixed={recipeImg}
        alt={imgAlt}
      />
	    <p>{recipeDate}</p>
	    <p>{recipeSummary}</p>
    </article>
  </>
)

export default RecipeTeaser
