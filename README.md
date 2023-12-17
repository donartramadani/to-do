
Notes:
On this project I have used pure React with Typescript and Vite. I have used the following packages:
Tailwind CSS and Headless UI for the UI components and styling. (this is my go-to styling library)

Another package that I have installed is SVGO for optimizing the SVG files. I have used this package because I have used SVG files for the icons and I wanted to optimize them for better performance. I've used it in combination with my own script that I have created to generate the React components from the SVG files. I have used this script because I wanted to have the SVG files as React components and not as images. For me this is the best DX when using custom icons since the design team can just provide the file with all needed svg files and they are generated instantly as React components when we run `npm run generate-icons`.

To run the project simply run `npm run install` and then `npm run dev`. To generate the React components from the SVG files run `npm run generate-icons`

In some parts of the code I have left a few inline comments to explain my thought process and why I have done something in a certain way. 