import React from 'react'
import P5Panel from './P5Panel'

const sketch = p => {
    const width = 800
    const height = 600
    const max_depth = 18
    let depth = 1
    let angle = Math.random() * 0.6 * p.PI

    p.setup = () => {
        p.createCanvas(width, height)
        p.frameRate(1.6)
    }

    p.draw = () => {
        if (depth > max_depth) {
            depth = 1
            angle = Math.random() * 0.6 * p.PI
        }

        p.background(255)
        p.stroke(0)
        p.translate(400, height)
        branch(200, depth++)

    }

    const branch = (len, depth) => {
        if (depth === 0) return
        depth--
        p.line(0, 0, 0, -len)
        p.translate(0, -len)
        p.push()
        p.rotate(angle)
        branch(len * 0.67, depth)
        p.pop()
        p.push()
        p.rotate(-angle)
        branch(len * 0.67, depth)
        p.pop()
    }
}

function FractalTrees() {
    return <P5Panel title="Fractal Trees"
        sketch={sketch}
    />
}

export default FractalTrees