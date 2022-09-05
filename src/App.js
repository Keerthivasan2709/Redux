import './App.css'
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from './Reducers/Auth';
import { add, minus } from './Reducers/Cart';

function App() {
  const val = useSelector((state) => state.auth)
  const cart = useSelector((state) => state.cart)
  console.log(val);
  console.log(cart);
  const dispatch = useDispatch();
  
  return (
    <div >
      This is the new paragraoh
      <button onClick={()=>{dispatch(login())}}>Plus</button>
      <button onClick={()=>{dispatch(logout())}}>Plus</button>
      <hr/>
      <button onClick={()=>{dispatch(add())}}>Add</button>
      <button onClick={()=>{dispatch(minus())}}>Minus</button>
    </div>

  );
}

export default App;
