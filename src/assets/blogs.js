//blogs.js
//import images
import linter    	from './imgs/linter.png'
import luckyShrub	from './imgs/lucky-shrub.png'
import sudoku    	from './imgs/sudoku.png'
import firstUnity	from './imgs/first-vr-deployment.jpg'
//import components
import styled	from 'styled-components'
import {Link}	from 'react-router-dom'

const Image = styled.img`
	width: 100%;
	padding: 1rem;

`;
const ImageLink = styled.img`
	width: 100%;
	&:hover {
		transform: scale(1.01);
		box-shadow: 1rem 1rem 1rem rgba(0, 0, 0, 0.2);
		transition-duration: 0.2s;
	}
`

export const blog = {
	"posts": [
		{
			"title": "Finished the 'Advanced React' Course from Meta!",
			"date": "10/14/23",
			"content": "I just completed the course on Advanced React Components! We reviewed components. Programmatic usage of data with mapping lists to components, as well as keys and their importance in informing react of node updates in lists. We also covered forms and react: controlled vs. uncontrolled components, as well as how to make controlled components. We learned about context via React's Context API to prevent prop drilling. We covered the hooks useState, useRef, useEffect for side-effects. Also, building custom hooks was covered as well as the rules of hooks. Furthermore, we learned about useReducer hooks when more complicated state changes needed to be taken into account rather than the simpler functionality afforded by useState. Higher-Order Components (HOCs) to extend functionality and help deal with cross-cutting concerns as well as the concept of currying. As well as the render props technique for implementing the same behaviour as HOCs. We also practiced testing of react components using jest and the React testing library for testing components for continuous integration.",
		},
		{
			"title": "Just ran my first App in VR!",
			"date": "10/10/23",
			"content": <>
				<p>Today I received my Quest 3, and ran a simple 3D Scene with physics on the quest headset! For the past few days, I've been studying Unity. (I tried Unreal Engine but unfortunately the Oculus + Unreal fork does not have Mac support). I've had a lot of ideas in the Software, and AR/VR space, but no skills to make them real. Today I've taking a real demonstrable step towards changing that. I ran my own app in the Quest 3! Not only that Unity had an error with finding the Android NDK, and I fixed that bug. Of course, ChatGPT made it painless by giving me things to check step by step. Luckily the first thing was the solution. Man, I wish ChatGPT existed at the start of my PhD instead of the end.</p>	
				<Image src={firstUnity}/>
				</>
		},
		{
			"title": "Just learned how to fetch data!",
			"date": "10/04/23",
			"content": "One of the hallmarks of programming is asynchronous programming, which is really useful only for slow events, inputs, data fetching. I just implemented my first real data fetching in the 'Fetch Random Person' sample I just uploaded!"
		},
		{
			"title": "Trying my hand at Sudoku.",
			"date": "09/25/23",
			"content": <>
			<p> Mostly recovered. Trying to make a Sudoku Component. I want it to be fully responsive. So I'm trying to force the text to resize according to the number cells, and it's incredibly annoying. I'll get there though. <b>Edit:</b> Completed! Check the design samples section!</p>
			<Image src={sudoku} />
			</>
		},
		{
			"title": "Added my First Front-End Challenge!",
			"date": "09/23/23",
			"content": <>
			<p>Despite my sickness (probably Covid), I managed to migrate my entire blog to React, and not only that I completed my first Front-end Dev Challenge! Of reproducing a design element (in react) from design, demonstrating aptitude in HTML/CSS/React and JavaScript! See my <b>Age Calculator</b> <Link to="/samples">here</Link>. What's absolutely wonderful about React is it makes it really easy to combine components. Adding this calculator to my old pure HTML website would have been a headache.</p> 
			</>
		},

		{
			"title": "Learned React and Migrated Site!",
			"date": "09/21/23",
			"content": "I learned React basics and started porting over my website. As I mentioned earlier, blog posts are very programmatic. You can just loop over a list of objects, and make new posts accordingly, and this post is created with that very technique! Unfortunately its very simplified right now, hosting only text content. Perhaps, I can handle images by just adding an image attribute, and just posting that? Edit: Added images! I realized instead of storing blog posts as strings I could also store them as react components and do all my styling that way.",
		},
		{
			"title": "Finished Git Certification",
			"date": "09/18/23",
			"content": "That was surprisingly easy, which makes sense since I've been using Git for years. I did it as I'm self taught, and I was curious what I was missing. The answer is not much. But, the section on terminal commands was useful. I didn't know redirects as well as I do now, and I finally know what grep stands for (global regular expressions and print).",

		},
		{
			"title": "A post about hardlinks!",
			"date": "09/18/23",
			"content": <p>I was stoked when I first discovered hardlinks. This was because I had made my first useful library. It was a vector calculus library that made simulation of N 3D particles simple, so I needed to use it a lot. But also, I would discover add functionality I could add later. So I needed some way to be able to use the most up to date function and also a way to update all copies simultaneously.  I don't remember how I found out about it, but that's exactly what hard links are. They are pointers to the same file in storage. So opening and editing it is editing the same file. It gives non-local access in a way that looks local to anyone using the hard link.</p>,

		},
		{
			"title": "Installed my first linter",
			"date": "09/17/23",
			"content": <>
				<p>I learned about linters in the context of HTML/CSS. The essentially just check for syntax errors. Since CSS provides absolutely no runtime halts when running code this makes them necessary for CSS debugging. I just added an HTML one because I was curious how good my source was. So I installed SublimeLinter. It was surprisingly annoying. For future use, the steps are: 1. Install SublimeLinter 2. Install SublimeLinter extensions for each linter, e.g., stylelint and html tidy 3. Configure the package settings for Sublime Linter to notify it of your new linters. Without this step, they will not function.</p>
				<Image src={linter} />
			</>,
		},
		{
			"title": "Finished the HTML/CSS Coursera Course!",
			"date": "09/16/23",
			"content": "So I finally finished the course, and I feel like I've learned a lot. Especially after applying the techniques in practice. However, what I've realized in both building this website, is I can see how pure HTML can lead to a very long file that will become harder to manage over time. So I'm interested in learning React to handle retaining components and managing the layout programmatically. This especially makes sense for blog posts, as they'll all have the same format and simply grow in number, so a database is a better place to store them rather than in the HTML.",
		},
		{
			"title": "My first dummy website",
			"date": "09/16/23",
			"content": <>
				<p>I just made my first website for a portfolio! It's for a fictional garden company as part of my course on 'HTML and CSS in Depth' from Meta. See my portfolio on the left. I made it entirely in HTML/CSS.</p>
				<a href="web-portfolio/lucky-shrub/index.html"><ImageLink src={luckyShrub} /></a>
			</>
		},
		{
			"title": "Making a favicon",
			"date": "09/15/23",
			"content": "I was checking the consoles for bugs on my site and found this: Not allowed to load local resource: file:///favicon.ico. Luckily, ChatGPT knows all. Just use <link rel='icon' href='favicon.ico' type='image/x-icon'>",
		},
		{
			"title": "HTML Practice",
			"date": "09/15/23",
			"content": (
				<>
					I've been taking a Front-end dev course on Coursera from Meta, and while I am learning. I am not mastering. I have a better top down understanding of the field of web dev, but to really get my hands dirty, I need something to make. <br /><br />Unfortunately, since web-dev isn't just programming, it is programming with design, I need designs to copy off of. So I think a great route to get practice is to find websites to copy, and without looking at their source, try and reproduce their designs. I wonder if there is a website that does this with proceedingly difficult website layouts.
					<br />
					<br />
					<div class="alert alert-info">
						<b>💡 GPT says:</b>
						<ul>
						  <li>
							<strong>Frontend Mentor</strong> - This platform offers real-world projects along with designs. You have to code the solution yourself. The projects are of varying difficulties and can help you sharpen both your HTML/CSS and JavaScript skills.
						  </li>
						  <li>
							<strong>Codewell</strong> - Provides design templates and asks you to replicate them using HTML/CSS. They offer solutions as well, so you can check your work.
						  </li>
						  <li>
							<strong>LeetCode</strong> - While primarily known for algorithmic challenges, they have a Frontend card that includes some HTML/CSS challenges.
						  </li>
						  <li>
							<strong>CSS Battle</strong> - This is more of a game than a project-based platform, but it's good for practicing CSS. You're given a design and you have to replicate it using minimal CSS.
						  </li>
						  <li>
							<strong>Exercism</strong> - This platform offers language tracks, including HTML and JavaScript. While it doesn't specifically focus on cloning websites, it does offer bite-sized exercises that can help improve your web development skills.
						  </li>
						</ul>
					</div>
				</>
			)
		}
	]
}
