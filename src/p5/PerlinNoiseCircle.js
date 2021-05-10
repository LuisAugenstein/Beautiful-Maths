import React from 'react'
import P5Panel from './P5Panel'

const sketch = p => {
    const width = 800
    const height = 600
    let tx = 0
    let ty = 0
    p.setup = () => {
        p.createCanvas(width, height)
        p.background(255)
    }

    p.draw = () => {
        let nx = p.noise(tx, 0)
        let ny = p.noise(ty, 1)
        tx += 0.003
        ty += 0.003
        nx = p.map(nx, 0, 1, -0.5 * width, 1.5 * width)
        ny = p.map(ny, 0, 1, -0.5 * height, 1.5 * height)
        p.ellipse(nx, ny, 120, 120)
    }
}

function PerlinNoiseCircle() {
    return <P5Panel title="Perlin Noise Circle"
        sketch={sketch}
    />
}

export default PerlinNoiseCircle