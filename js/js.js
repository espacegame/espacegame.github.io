const hiButton = document.getElementById('hiButton');
const noButton = document.getElementById('noButton');
const hiDiv = document.getElementById('hiDiv');
const noDiv = document.getElementById('noDiv');

hiDiv.style.display = 'block';
noDiv.style.display = 'none';
hiButton.disabled = true;
hiButton.addEventListener('click', function() {
    if (hiDiv.style.display === 'block') {
      hiDiv.style.display = 'none';
      noDiv.parentNode.replaceChild(hiDiv, noDiv);
      hiButton.disabled = true;
    } else {
      hiDiv.style.display = 'block';
      noDiv.parentNode.replaceChild(hiDiv, noDiv);
      hiButton.disabled = true;
    }
    noDiv.style.display = 'none';
    hiButton.disabled = true;
    noButton.disabled = false;
  });
  
  noButton.addEventListener('click', function() {
    hiDiv.style.display = 'none';
    noButton.disabled = true;
    if (noDiv.style.display === 'block') {
      noDiv.style.display = 'none';
      hiDiv.parentNode.replaceChild(noDiv, hiDiv);
      noButton.disabled = true;
    } else {
      noDiv.style.display = 'block';
      hiDiv.parentNode.replaceChild(noDiv, hiDiv);
      noButton.disabled = true;
    }
    noButton.disabled = true;
    hiButton.disabled = false;
  });
  