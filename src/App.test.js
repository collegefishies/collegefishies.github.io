import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router} from 'react-router-dom';
import App from './App';

const renderWithRouter = (ui, {route = '/'} = {}) => {
  window.history.pushState({}, 'Test page', route)
  return render(ui, {wrapper: Router})
}

describe('App', () => 
  {
    it('renders Blog page on default route', () => 
    {
      renderWithRouter(<App />);
      const blogElement = screen.getByText('Blog')
      expect(blogElement).toBeInTheDocument();
    })
  }
)