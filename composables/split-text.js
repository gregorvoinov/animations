// https://codepen.io/stanko/pen/eYMQOVP

function spanner(el, words) {
  const spans = words.map((word) => {
    return `<span>${word}</span>`
  });
  el.innerHTML = spans.join(" ")
}

function liner(el, words){
  const lines = []
  let line = []
  let previousTop = null
  
  // Create an nested array based on the position of a word
  el.querySelectorAll('span').forEach((wordSpan, index) => {
    const wordRect = wordSpan.getBoundingClientRect()
    if (previousTop !== wordRect.top && index > 0) {
      // Push the current line with words
      lines.push(line)
      // Start a new line with the first word
      line = [words[index]]
    } else {
      // Add word to the current line
      line.push(words[index])
    }
    previousTop = wordRect.top
  });
  // add last line to array
  lines.push(line)

  // combine each nested array to a single div (line)
  const createLines = lines
    .map((line, i) => {
      return `<div class="split-line"><span style="display:block">${line.join(" ")}</span></div>`;
    })
    // remove new line
    .join("\n")

  el.innerHTML = createLines

  return lines
}

function create(el, words, type){
  spanner(el, words)
  if(type === 'lines') {
    liner(el, words)
  }
}

export function splitText({el, type}) {
  //replace multiple whistespaced with one, removes whitespace from both ends
  const text = el.innerText.replace(/  +/g, ' ').trim()
  // create array of words
  const words = text.split(' ')
  create(el, words, type)
  // recreate on Resize
  function onResize() {
    create(el, words, type)
  }
  window.addEventListener("resize", onResize)
}
