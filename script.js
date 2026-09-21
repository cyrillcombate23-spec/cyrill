document.getElementById('feedbackForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name     = document.getElementById('name').value.trim();
  const email    = document.getElementById('email').value.trim();
  const subject  = document.getElementById('subject').value.trim();
  const rating   = document.getElementById('rating').value;
  const comments = document.getElementById('comments').value.trim();
  const errorBox = document.getElementById('errormsg');

  errorBox.textContent = '';

  if (!name || !email || !subject || !rating || !comments) {
    errorBox.textContent = 'Please fill in all fields before submitting.';
    return;
  }

  
  const ratingLabels = {
    "5": "5 - Amazing",
    "4": "4 - Very Good",
    "3": "3 - Average",
    "2": "2 - Needs Improvement",
    "1": "1 - Poor"
  };

  
  document.getElementById('outName').textContent     = name;
  document.getElementById('outEmail').textContent    = email;
  document.getElementById('outSubject').textContent  = subject;
  document.getElementById('outRating').textContent   = ratingLabels[rating] || rating;
  document.getElementById('outMessage').textContent  = comments;


  document.getElementById('outputContainer').classList.remove('hidden');


  this.reset();
})