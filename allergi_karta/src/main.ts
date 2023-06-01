document.querySelectorAll('path').forEach(svg_path => {
  svg_path.addEventListener('click', () => {
    document.querySelectorAll('path').forEach(svg_path => {
      svg_path.setAttribute('class', '')
    })
    let selected: string = svg_path.getAttribute("class");
    if (selected == "selected")
      svg_path.setAttribute('class', '')
    else
      svg_path.setAttribute('class', 'selected')


  })
})
