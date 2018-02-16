import * as React from "react"
import { Application, Container } from "pixi.js"

// var Frame = require("../helper/frame.js")
// var Client = require("../client.js")
// var Player = require("../models/helicopter.js")

export default class Game extends React.Component {
  app: Application
  stage: Container

  componentDidMount() {
    this.app = new Application(256, 256, { backgroundColor: 0x000000 })
    this.app.view.style.position = "absolute"
    this.app.view.style.display = "block"
    document.body.appendChild(this.app.view)

    this.stage = new Container()

    this.gameLoop()
  }

  gameLoop = () => {
    requestAnimationFrame(this.gameLoop)
    this.app.renderer.render(this.stage)
  }

  render() {
    return <div id="game" />
  }
}
