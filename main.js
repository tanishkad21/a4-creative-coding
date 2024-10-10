let bubbleRadius = 40;
let glowIntensity = 1;
let bubbleCounter = 0;

const svg = d3.select("#bubbleGarden");

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function createNewBubble() {
  const bubbleId = "bubble-" + bubbleCounter++;
  const randomX = Math.random() * 700 + 50; // Random position within the canvas
  const randomY = Math.random() * 500 + 50;
  const bubbleColor = getRandomColor(); // Get a random color for this bubble

  const group = svg
    .append("g")
    .attr("class", "bubble-group")
    .attr("id", bubbleId);

  const bubble = group
    .append("circle")
    .attr("cx", randomX)
    .attr("cy", randomY)
    .attr("r", bubbleRadius)
    .attr("fill", "none")
    .attr(
      "stroke",
      `rgba(${parseInt(bubbleColor.slice(1, 3), 16)}, ${parseInt(
        bubbleColor.slice(3, 5),
        16
      )}, ${parseInt(bubbleColor.slice(5, 7), 16)}, ${glowIntensity})`
    )
    .attr("stroke-width", 3)
    .attr("filter", "url(#glow)")
    .on("mouseover", () => popBubble(group)); // Pop when the cursor goes over the bubble


  animateBubble(`#${bubbleId}`);
}

function animateBubble(selector) {
  d3.select(selector)
    .select("circle")
    .transition()
    .duration(10000)
    .attr("cy", () => Math.random() * 500 + 50)
    .on("end", () => animateBubble(selector)); }


function popBubble(group) {
  group
    .transition() 
    .duration(500) 
    .style("opacity", 0)
    .remove(); 
}
svg
  .append("defs")
  .append("filter")
  .attr("id", "glow")
  .append("feGaussianBlur")
  .attr("stdDeviation", "4.5")
  .attr("result", "coloredBlur");

function updateRadius(newRadius) {
  bubbleRadius = newRadius;
  d3.selectAll("circle").attr("r", bubbleRadius);
}

function updateGlow(newGlow) {
  glowIntensity = newGlow;
  d3.selectAll("circle").attr("stroke", function () {
    const color = d3.select(this).attr("stroke");
    const colorWithoutAlpha = color.slice(0, -5);
    return `${colorWithoutAlpha}, ${glowIntensity})`;
  });
}
