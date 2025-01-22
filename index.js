// Import libraries as node js has no access to client side DOM methods

// Module to write data to files and store in folders
import fs from 'node:fs';
// A virtual interface to retrieve data from the DOM
import { JSDOM } from 'jsdom';
// Http-client for fetch requests - enables to retrieve binary data formats through the arrayBuffer() method
import fetch from 'node-fetch';

// Website to retrieve images from
const url = 'https://memegen-link-examples-upleveled.netlify.app/';

// Fetch website data from the DOM in string-format via response object.data
function run() {
  fetch(url)
    .then(function (futureData) {
      return futureData.text();
    })

    .then(function (text) {
      // Virtual access to the DOM of the fetched website data
      const dom = new JSDOM(text);
      const document = dom.window.document;

      // Extract <img> tags and create an array of <img> elements
      const imgTags = document.getElementsByTagName('img');
      const imgTagsArr = Array.from(imgTags);

      // Extract values from the 'src' attribute of gathered <img> tags and return an array of strings
      const imgUrlArr = [];
      imgTagsArr.forEach(function (img) {
        if (img.getAttribute('src').endsWith('.jpg?width=300')) {
          imgUrlArr.push(img.getAttribute('src'));
        }
      });

      // Reduce # of links to pictures to 10
      const imageUrls = imgUrlArr.slice(0, 10);

      // Evoking to fetch, download and store image data to the directory
      function downloadImg(img, fileName) {
        // Fetching image data
        fetch(img)
          .then(function (response) {
            return response.arrayBuffer();
          })

          // Accesing the binary img-data of the response object with the arrayBuffer() method to store the data with Buffer
          // `/Users/juergen/projects/node-meme-scraper/memes/${fileName}`
          .then(function (arrayBuffer) {
            const buffer = Buffer.from(arrayBuffer);
            fs.writeFile(`memes/${fileName}`, buffer, (err) => {
              if (err) {
                console.error(err);
              } else {
                // Response object.value = resolved
              }
            });
          })
          .catch(function (error) {
            console.log('Error downloading file:', error);
          });
      }
      // Calling 'downloadImg' function within loop to get every img 1)named and 2)saved by 'downloadImg' function
      imageUrls.forEach(function (img, i) {
        const fileName = String(i + 1).padStart(2, '0') + '.jpg';
        downloadImg(img, fileName);
      });
    })

    .catch(function (error) {
      console.log('Error ocurred:', error);
    });
}
run();
