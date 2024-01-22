
  const fontSizeControl = document.getElementById('font-size-control');
  const textElement = document.getElementById('text');
  const initialFontSize = fontSizeControl.value;
  textElement.style.fontSize = `${initialFontSize}px`;

  fontSizeControl.addEventListener('input', () => {
    const fontSizeValue = fontSizeControl.value;
    textElement.style.fontSize = `${fontSizeValue}px`;
  });



