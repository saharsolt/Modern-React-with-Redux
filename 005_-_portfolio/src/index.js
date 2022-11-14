import React from 'react';
import ReactDOM from 'react-dom/client';
import ResponsiveAppBar from './header';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

function App() {
  return (
    <div
      style={{
        backgroundColor: '#0E6EB8',
        width: '100%',
        height: '1000px',
        margin: '0px',
      }}
    >
      <ResponsiveAppBar />
    </div>
  );
}

root.render(<App />);
