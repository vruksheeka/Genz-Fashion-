import Category from './Category/Category';
import Price from './Price/Price';
import Colors from './Colors/Colors';
import Merch from './Merch/Merch';
import Skintone from './Skintone/Skintone';
import './Sidebar.css';

 const Sidebar = ({handleChange}) => {
  return <>
  <section className='sidebar'>
     <div className='logo-container'>
        <h1>🛒</h1>
     </div>
     
     <Category handleChange = {handleChange}/>
     <Merch handleChange = {handleChange}/>
     <Colors handleChange = {handleChange}/>
     <Skintone handleChange = {handleChange}/>
     <Price handleChange = {handleChange} />
    
     
    </section>
    </>
}
export default Sidebar;
