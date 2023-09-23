import ContentArea	from '../comp/ContentArea'
import Sidebar    	from '../comp/Sidebar'
import UsefulLinks	from '../comp/UsefulLinks'
import Content    	from '../comp/Content'
import Row from 'react-bootstrap/Row'

function Main() {
	return ( 
			<ContentArea>
				<Row>
					<Sidebar>
					</Sidebar>
					<Content title="About me">
						<div class="card m-3 p-3">
							My name is Enrique Mendez.I have a PhD in Physics from MIT where I studied Quantum Physics in Ultracold Atom Systems as well as independently formulated a classical formulation of Quantum Mechanics. When my thesis is live, I'll post it here. This website is for following and documenting my more programming interests.
							Here are my other interests in no particular order:
							<div class='m-3'>
								<ul>
									<li>Physics</li>
									<li>Math</li>
									<li>Computer Science</li>
									<li>Art</li>
									<li>Music</li>
									<li>Programming</li>
									<li>Machine Learning</li>
									<li>AR/VR</li>
									<li>App Development</li>
								</ul>
							</div>	
						</div>	
					</Content>
				</Row>
			</ContentArea>
	); 
} 
 
export default Main;