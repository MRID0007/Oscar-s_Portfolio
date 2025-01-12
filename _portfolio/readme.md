# How to Upload New Albums to the Site

Follow these steps to upload and customize new albums for the site:

---

## **1. Add Album Assets and Files to the `_sub` Folder**

### **1.1 Prepare and Add Assets**
- Compress all images into `.JPEG` format (approximately 200KB each).
- Name the files sequentially:
  - Example: `01.JPEG`, `02.JPEG`, ..., `20.JPEG`, etc.
- Create a folder for the album inside the `_sub` directory:
  - Name the folder sequentially, such as `album1`, `album2`, etc.
- Add the prepared image files to the folder.

### **1.2 Add the `album.html` File**
- Inside the album folder, add an `album.html` file.
- Use the following template for the file:
  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>{Album Name} Album</title>
      <link rel="stylesheet" href="../../styles.css">
  </head>
  <body>
      <!-- Header Section -->
      <header class="intro">
          <h1>{Album Name} 2024</h1>
          <p>{Caption}</p>
      </header>

      <!-- Masonry Gallery Section -->
      <section class="masonry-gallery">
          <!-- Replace src attributes with actual image paths -->
          <div class="masonry-item"><img src="01.JPEG" alt="Photo 1"></div>
          <div class="masonry-item"><img src="02.JPEG" alt="Photo 2"></div>
          <!-- Add more as needed -->
      </section>

      <!-- {OPTIONAL} Suggested Albums Section -->
      <section class="suggested-albums">
          <h2>You May Also Like</h2>
          <div class="suggested-gallery">
              <div class="suggested-item">
                  <a href="../{REFERRED ALBUM e.g., album1}/album.html">
                      <img src="../../assets/work_thumbnails/{REFERRED THUMBNAIL}.JPEG" alt="{REFERRED ALBUM}">
                      <p>{REFERRED ALBUM}</p>
                  </a>
              </div>
              <div class="suggested-item">
                  <a href="../{REFERRED ALBUM e.g., album2}/album.html">
                      <img src="../../assets/work_thumbnails/{REFERRED THUMBNAIL}.JPEG" alt="{REFERRED ALBUM}">
                      <p>{REFERRED ALBUM}</p>
                  </a>
              </div>
          </div>
      </section>

      <!-- Footer Section -->
      <footer>
          <div class="footer-content">
              <div class="social-icons">
                  <a href="https://linkedin.com/in/oscarlupton" target="_blank" aria-label="LinkedIn">
                      <!-- LinkedIn Icon SVG -->
                  </a>
                  <a href="https://instagram.com/oscarlupton" target="_blank" aria-label="Instagram">
                      <!-- Instagram Icon SVG -->
                  </a>
              </div>
              <p>Oscar Lupton, 2025</p>
          </div>
      </footer>
      <script src="../../script.js"></script>
  </body>
  </html>
  ```

### **1.3 Customization**
- Update `{Album Name}` with the actual name of the album.
- Replace `{Caption}` with a short description of the album.
- For the `{OPTIONAL}` section, replace `{REFERRED ALBUM}` and `{REFERRED THUMBNAIL}` with the correct referred album details.

---

## **2. Add the Album to the `index.html` File**

### **2.1 Update the Gallery Section**
- Open the `index.html` file in the root directory.
- Add a photo container for the new album in the **Gallery Section** using this code snippet:
  ```html
  <!-- Photo Container: {Album Name} -->
  <div class="gallery-item-wrapper glow-{album-name}">
      <a href="_sub/album{Album Number e.g., 1, 2, etc.}/album.html">
          <div class="gallery-item">
              <img src="assets/work_thumbnails/{Thumbnail Asset Location}.JPEG" alt="{Album Name}">
              <p>{Album Name}</p>
          </div>
      </a>
  </div>
  ```
- Replace:
  - `{Album Name}` with the album’s name.
  - `{Album Number}` with the album folder number.
  - `{Thumbnail Asset Location}` with the location of the album’s thumbnail.

---

### Example:
If you are adding an album titled **"DreamHack Summer 2024"**:
1. Add your compressed images (`01.JPEG`, `02.JPEG`, etc.) into `_sub/album3/`.
2. Create an `album.html` file in `_sub/album3/` with the following:
   ```html
   <h1>DreamHack Summer 2024</h1>
   <p>Photography highlights from DreamHack Summer 2024.</p>
   ```
3. Add the following snippet to the `index.html` gallery section:
   ```html
   <div class="gallery-item-wrapper glow-dreamhack-summer">
       <a href="_sub/album3/album.html">
           <div class="gallery-item">
               <img src="assets/work_thumbnails/dreamhack-summer2024-thumb.JPEG" alt="DreamHack Summer 2024">
               <p>DreamHack Summer 2024</p>
           </div>
       </a>
   </div>
   ```