//links.js
//import components
import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const links = [
	{
		"title" :  "Web Design Porfolio",
		"credit" : null,
		"links"  :  [
				<a href="web-portfolio/lucky-shrub/index.html">Lucky Shrub Main Page</a>
			],
	},
	{
		"title" : "HTML/CSS Cheat Sheets",
		"credit": "Meta",
		"links" : [
			<a href="cs/web/grid_flexbox.html">Grid and Flexbox</a>,
			<a href="cs/web/iframes.html">iFrames</a>,
			<a href="cs/web/images.html">Images</a>,
			<a href="cs/web/interactiveForm.html">Interactive Form</a>,
			<a href="cs/web/metadata.html">Metadata</a>,
			<a href="cs/web/pseudo-elements.html">Pseudo-elements</a>,
			<a href="cs/web/psuedo-class.html">Pseudo-class</a>,
			<a href="cs/web/selectors.html">Selectors</a>,
			<a href="cs/web/semantic.html">Semantic HTML</a>,
			<a href="cs/web/units.html">Units</a>,
			<a href="cs/web/animation-and-effects.html">Animation and Keyframes</a>,
			<a href="cs/web/text-effects.html">Text Effects</a>,
		],
	},
	{
		"title" : "Git Cheat Sheets",
		"credit": "Meta",
		"links" : [
			<a href="cs/git/git-terminology.pdf">Git Terminology</a>,
			<a href="cs/git/git-cheat-sheet.pdf">Git Cheat Sheet</a>,
		],
	}
]