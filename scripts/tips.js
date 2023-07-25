import { getTip } from "./database.js";

export const tipList = () => {
  // Invoke the function that you imported from the database module
  const tip = getTip();

  // Start building a string filled with HTML syntax
  let htmlString = '<article id="tipList">';

  // Create HTNL representations of each fish here
  for (const tip of tips) {
    // Why is there a backtick used for this string?
    htmlString += `<section id="tip card">
        // 
`;
  }
  htmlString += `</article>`;

  return htmlString;
};
