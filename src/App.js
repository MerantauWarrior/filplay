import styled from 'styled-components';

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.inputColor || "black"};
  background: white;
  font-size: 24px;
  border: 2px solid black;
  border-radius: ${props => props.bdRadius || 0};
`;

const Button = styled.button`
width: 200px;
font-size: 30px;
background: ${props => props.bg || "white"};
color: ${props => props.$primary ? "black" : "palevioletred"};
`

function App() {
  return (
    <div className="App">
<h1>test</h1>
<Button bg="purple">Primary</Button>
<Button $primary>Primary</Button>
<Input type="text" inputColor="rebeccapurple" bdRadius="10px" />
    </div>
  );
}

export default App;
