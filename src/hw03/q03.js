document.addEventListener('DOMContentLoaded', (event) => {
    const rootDiv = document.getElementById('root');
    
    // parte 8
    const link = document.createElement('a');
    link.href = 'https://keybr.com';
    link.textContent = 'Google';
    rootDiv.appendChild(link);

    // parte 7
    const h2 = document.createElement('h2');
    h2.textContent = 'MANIPULANDO EL DOM';
    rootDiv.appendChild(h2);

    // parte 9
    const buyList = [
        "books",
        "bread",
        "eraser",
        "earphones",
        "collection-cards",
        "hdmi",
        "vga",
        "motherboard",
        "university-books",
      ];
  
      const ul = document.createElement('ul');
  
      buyList.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        ul.appendChild(li);
      });
  
      rootDiv.appendChild(ul);
  });
  
