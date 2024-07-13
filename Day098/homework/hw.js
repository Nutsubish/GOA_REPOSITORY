// exa morcha gakvetili 








fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));



fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(data => console.log('Data:', data));




fetch('https://invalid.url')
  .then(response => response.json())
  .catch(error => console.error('you made error: ', error));




fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .catch(error => console.error('Bro that is error: ', error))
  .finally(() => console.log('Done'));




fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(data => {
    const element = document.createElement('div');
    element.textContent = JSON.string(data);
    document.body.appendChild(element);
  });



fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(data => {
    console.log('yea 1:', data);
    return data;
  })
  .then(data => {
    console.log('yea 2:', data);
  });


fetch('https://via.placeholder.com/150')
  .then(response => response.blob())
  .then(imagesomething => {
    const imageObjectURL = URL.createObjectURL(imagesomething);
    const img = document.createElement('img');
    img.src = imageObjectURL;
    document.body.appendChild(img);
  });



setTimeout(() => {
  fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(data => console.log(data));
}, 3000);





fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => setTimeout(() => response.json().then(data => console.log(data)), 3000));




fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(data => {
    console.log('First request:', data);
    return new Promise(resolve => setTimeout(resolve, 3000));
  })
  .then(() => fetch('https://jsonplaceholder.typicode.com/posts/2'))
  .then(response => response.json())
  .then(data => console.log('Second request:', data));



fetch('https://invalid.url')
  .catch(error => setTimeout(() => console.error('Error:', error), 3000));



fetch('https://jsonplaceholder.typicode.com/posts/1')
  .finally(() => setTimeout(() => console.log('Request completed after delay.'), 3000));



fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(data => setTimeout(() => alert(JSON.string(data)), 3000));




fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(data => {
    setTimeout(() => {
      if (data.userId === 1) {
        const element = document.createElement('div');
        element.textContent = JSON.string(data);
        document.body.appendChild(element);
      }
    }, 3000);
  });




const formData = new FormData();
formData.append('userId', 1);

setTimeout(() => {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: formData
  })
    .then(response => response.json())
    .then(data => console.log('Response:', data));
}, 3000);


// race kargad ver gavige 