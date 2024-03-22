/** @type {import('tailwindcss').Config} */
export const content = ["./dist/*.{html,js}"];
export const theme = {
  extend: {
    colors: {
      "color-primary": "#ade8f4",
      "color-secondery": "#48cae4",
      "color-shadow1": "#6a6a6a8a;",
    },
  },
};
export const plugins = [];
// npx tailwindcss -i ./src/input.css -o ./dist/style.css --watch

