const colorPicker = (palette: Array<string>) => {
  let finalPalette = [];

  for (let i = 0; i < palette.length; i++) {
    let color = palette[i];
    let r = parseInt(`${color[1]}${color[2]}`, 16);
    let g = parseInt(`${color[3]}${color[4]}`, 16);
    let b = parseInt(`${color[5]}${color[6]}`, 16);
    let hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b));

    if (hsp < 120) {
      finalPalette.push(color);
    }
  }

  return finalPalette;
};

const requestOptions = {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    mode: "transformer",
    num_colors: 4,
    temperature: "2.3",
    num_results: 4,
    adjacency: [
      "0",
      "65",
      "45",
      "35",
      "65",
      "0",
      "35",
      "65",
      "45",
      "35",
      "0",
      "35",
      "35",
      "65",
      "35",
      "0",
    ],
    palette: ["-", "-", "-", "-"],
  }),
};

export async function fetchColorPalette(): Promise<String[]> {
  return await fetch("https://api.huemint.com/color", requestOptions)
    .then((response) => response.json())
    .then((data) => {
      let colors: Array<string> = [];
      for (let i = 0; i < data.results.length; i++) {
        colors = [...colors, ...data.results[i].palette];
      }
      return colorPicker(colors);
    });
}
