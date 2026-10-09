Mahal - Ten Months of Us

How to open:
  Double-click index.html, or with XAMPP running visit http://localhost/Mahal/
  Tap the heart on the first screen to begin.

What's on the page:
  1. "Mahal" title over a slideshow of your photos + a live together-since counter
  2. What "mahal" means
  3. Ten monthsary hearts (the current one glows gold)
  4. Our story: a timeline of chapters with polaroid photos (tap to view)
  5. Videos
  6. The whole album (tap any photo; swipe / arrow keys to browse)
  7. A letter in an envelope (tap to open)
  8. "Mahal kita" ending, tap for hearts

Files:
  index.html     - page structure, the "mahal" meaning and the LETTER text
  css/style.css  - colors, fonts and layout
  js/script.js   - chapters, captions, videos, slideshow, hearts animation
  assets/        - your ORIGINAL photos and videos (untouched)
  assets/web/    - web-friendly copies the page actually uses
                   full/  = big JPGs, thumb/ = small JPGs, video/ = MP4s

Easy edits (all at the top of js/script.js):
  - START date:       const START = new Date(2025, 11, 10);   (month is 0-based, 11 = December)
  - Chapter titles, dates and captions: the CHAPTERS list
  - Which photos fade behind the title: the HERO list
  - Video labels: the VIDEOS list
  - The letter: edit the text inside <article class="paper"> in index.html

Adding new photos later:
  iPhone .HEIC photos don't show in Chrome/Android, so convert them to .jpg first
  and put a copy in BOTH assets/web/full/ and assets/web/thumb/ with the same name,
  then add the name (without .jpg) to a chapter's photos list in js/script.js.

Live site (GitHub Pages):
  https://khirro-456.github.io/Mahal/
  Repository: https://github.com/khirro-456/Mahal

Updating the live site after you edit something:
  Open a terminal in this folder and run:
    git add -A
    git commit -m "describe your change"
    git push
  GitHub Pages refreshes about a minute later.
