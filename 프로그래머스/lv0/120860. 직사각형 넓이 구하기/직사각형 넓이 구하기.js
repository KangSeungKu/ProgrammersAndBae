const solution = dots => {
    const [x1, y1] = dots.pop();
    let width = 0;
    let height = 0;

    dots.forEach(([x2, y2]) => {
        width = Math.max(width, Math.abs(x2 - x1));
        height = Math.max(height, Math.abs(y2 - y1));
    });

    return width * height;
}