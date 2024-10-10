# **Bubble Garden**

**Hosted Link**: [Bubble Garden](http://a4-tanishkadalavi.glitch.me)

## Project Summary

The **Bubble Garden** is an interactive web browser game that has **D3.js** and **SVG**. This project allows users who interact with the bubble garden to create and delete neon bubbles. The bubble size and strength of the glow is editable, and when the curser hovers over the bubble it will pop. The project is designed with the intent to show how a browser with client side development can create a simple but engaging interactive experience.

## Goal

The app is meant to show an interactive visual experience using **D3.js** and **SVG**, so users can control features such as bubble size and glow intensity, as well as popping them.

## Challenges Faced

- **MIME Type Issues**: Encountered MIME type mismatch errors, which I resolved by ensuring proper static file serving via the Express server.
- **Interactivity**: Dynamic control for bubble size and glow using sliders was used to have smooth animations when popping bubbles or them floating around randomly.
- **Positioning and Layout**: The web browser is organized understand how to interact with the bubble garden and is clear and straight forward.

## Instructions for Use

1. **Create a New Bubble**: Click the "Create New Bubble" button to add a bubble to the garden.
2. **Adjust Bubble Size**: Use the "Bubble Size" slider to change the size of the bubbles.
3. **Adjust Glow Intensity**: Use the "Glow Intensity" slider to control how strongly each bubble glows.
4. **Pop Bubbles**: Move the cursor over a bubble to make it disappear.

## Additional Instructions

- Ensure JavaScript is enabled in your browser to experience full interactivity.
- If the bubbles are not appearing, refresh the page to reset the garden.

## Technologies Used

- **Express.js**: For serving the application and static files.
- **D3.js**: For manipulating the SVG elements and handling interactions with the bubbles.
- **HTML/CSS**: For structuring and styling the user interface.
- **JavaScript**: For implementing interactivity like bubble creation, size adjustment, glow intensity control, and the popping mechanism.
