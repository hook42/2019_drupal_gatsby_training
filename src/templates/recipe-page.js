import React from "react"
import {graphql} from "gatsby"
//import { Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"

const RecipePage = ({ data }) => (
  <Layout>
    <SEO title={data.nodeRecipe.title} />
    <article>
	    <h1>{data.nodeRecipe.title}</h1>
  <i><p className="publication-date">{data.nodeRecipe.created}</p></i>
  <Img
    fixed={data.nodeRecipe.relationships.field_image.localFile.childImageSharp.fixed} 
    alt={data.nodeRecipe.field_image.alt}
  />
  <div class="details" style={{
    display: 'flex',
    flexDirection: 'column',
    padding: '1em 0',
  }}>
    <h2>Overview</h2>
    <span>Preparation time: {data.nodeRecipe.field_preparation_time}</span>
    <span>Cooking time: {data.nodeRecipe.field_cooking_time}</span>
    <span>Difficulty: {data.nodeRecipe.field_difficulty}</span>
    <span>Number of servings: {data.nodeRecipe.field_number_of_servings}</span>
  </div>
  <h2>Ingredients</h2>
  <ul>
    { data.nodeRecipe.field_ingredients.map(( item ) => <li>{item}</li>) }
  </ul>
  <h2>Instructions</h2>
  <span dangerouslySetInnerHTML={{__html: data.nodeRecipe.field_recipe_instruction.processed}}></span>

    </article>
  </Layout>
)


export const query = graphql`
  query($slug: String!) {
  nodeRecipe (fields: { slug: { eq: $slug } }) {
    id
    title
    field_cooking_time
    field_difficulty
    field_ingredients
    field_preparation_time
    field_number_of_servings
    field_recipe_instruction {
      processed
    }
    field_image {
          alt
        }
        relationships {
          field_image {
            localFile {
              childImageSharp {
                fixed(width: 125, height: 125) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
  }
}

`

export default RecipePage
