import React, { Component } from "react"
import {preprojects, center} from "../../css/items.module.css"
import Preproject from "./Preproject"
import Title from "../Title"

export default class PreprojectList extends Component {
  state = {
    preprojects: [],
    sortedPreprojects: [],
  }

  componentDidMount() {
    this.setState({
      preprojects: this.props.preprojects.edges,
      sortedPreprojects: this.props.preprojects.edges,
    })
  }

  render() {
    return (
      <section className={preprojects}>
        <Title title="proyectos" subtitle="MMXXI" />
        <div className={center}>
          {this.state.sortedPreprojects.map(({ node }) => {
            return <Preproject key={node.id} preproject={node} />
          })}
        </div>
      </section>
    )
  }
}
