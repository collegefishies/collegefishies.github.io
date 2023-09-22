export default const blogs = {
  "posts": [
    {
      "title": "Finished Git Certification",
      "date": "09/18/23",
      "content": "That was surprisingly easy, which makes sense since I've been using Git for years. I did it as I'm self taught, and I was curious what I was missing. The answer is not much. But, the section on terminal commands was useful. I didn't know redirects as well as I do now, and I finally know what grep stands for (global regular expressions and print)."
    },
    {
      "title": "A post about hardlinks!",
      "date": "09/18/23",
      "content": "I was stoked when I first discovered hardlinks. This was because I had made my first useful library. It was a vector calculus library that made simulation of N 3D particles simple, so I needed to use it a lot. But also, I would discover add functionality I could add later. So I needed some way to be able to use the most up to date function and also a way to update all copies simultaneously.  I don't remember how I found out about it, but that's exactly what hard links are. They are pointers to the same file in storage. So opening and editing it is editing the same file. It gives non-local access in a way that looks local to anyone using the hard link."
    },
    {
      "title": "Installed my first linter",
      "date": "09/17/23",
      "content": "I learned about linters in the context of HTML/CSS. The essentially just check for syntax errors. Since CSS provides absolutely no runtime halts when running code this makes them necessary for CSS debugging. I just added an HTML one because I was curious how good my source was. So I installed SublimeLinter. It was surprisingly annoying. For future use, the steps are: 1. Install SublimeLinter 2. Install SublimeLinter extensions for each linter, e.g., stylelint and html tidy 3. Configure the package settings for Sublime Linter to notify it of your new linters. Without this step, they will not function."
    },
    {
      "title": "Finished the HTML/CSS Coursera Course!",
      "date": "09/16/23",
      "content": "So I finally finished the course, and I feel like I've learned a lot. Especially after applying the techniques in practice. However, what I've realized in both building this website, is I can see how pure HTML can lead to a very long file that will become harder to manage over time. So I'm interested in learning React to handle retaining components and managing the layout programmatically. This especially makes sense for blog posts, as they'll all have the same format and simply grow in number, so a database is a better place to store them rather than in the HTML."
    },
    {
      "title": "My first dummy website",
      "date": "09/16/23",
      "content": "I just made my first website for a portfolio! It's for a fictional garden company as part of my course on 'HTML and CSS in Depth' from Meta. See it here. I made it entirely in HTML/CSS."
    },
    {
      "title": "Making a favicon",
      "date": "09/15/23",
      "content": "I was checking the consoles for bugs on my site and found this: Not allowed to load local resource: file:///favicon.ico. Luckily, ChatGPT knows all. Just use <link rel='icon' href='favicon.ico' type='image/x-icon'>"
    },
    {
      "title": "HTML Practice",
      "date": "09/15/23",
      "content": "I've been taking a Front-end dev course on Coursera from Meta, and while I am learning. I am not mastering. I have a better top down understanding of the field of web dev, but to really get my hands dirty, I need something to make. Unfortunately, since web-dev isn't just programming, it is programming with design, I need designs to copy off of. So I think a great route to get practice is to find websites to copy, and without looking at their source, try and reproduce their designs. I wonder if there is a website that does this with proceedingly difficult website layouts."
    }
  ]
}