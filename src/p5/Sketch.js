
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

export default sketch