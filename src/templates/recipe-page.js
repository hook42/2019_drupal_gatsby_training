import React from "react"
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Img from "gatsby-image"


const RecipePage = ({data}) => (
  <Layout>
    <div>
      <h1>{data.nodeRecipe.title}</h1>
      <i><p className="publication-date">{data.nodeRecipe.created}</p></i>
      <Img fixed={data.nodeRecipe.relationships.field_image.localFile.childImageSharp.fixed} />
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
      <h2>Instructions</h2>
      <p dangerouslySetInnerHTML={{__html: data.nodeRecipe.field_recipe_instruction.processed}}></p>
    </div>
  </Layout>
)

export const query = graphql`
  query($slug: String!) {
    nodeRecipe(fields: {slug: {eq: $slug } } ) {
      title
      created
      field_summary {
        processed
      }
      field_preparation_time
      field_difficulty
      field_cooking_time
      field_number_of_servings
      field_recipe_instruction {
        processed
      }
      relationships{
            field_image {
              localFile {
                childImageSharp {
                  fixed(width: 500) {
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

