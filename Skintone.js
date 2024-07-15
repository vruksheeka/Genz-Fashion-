import Input from '../../components/Input';
import './Skintone.css';
 function Skintone({handleChange}) {
  return (
    <div className='jp'>
      <h2 className='sidebar-title skintone-title'>Skintone</h2>
      <label className='sidebar-label-container'>
      <input onChange={handleChange}type='radio'value=''name='test2'/>
      <span className='checkmark '></span>All

     </label>
     <Input
       handleChange={handleChange}
       value="light"
       title="Light"
       name="test1"
       color="#ffd9c2"
      
     />
     <Input
       handleChange={handleChange}
       value="beige"
       title="Beige"
       name="test1"
       color="#ffc9a9"
       
     />
     <Input
       handleChange={handleChange}
       value="olive"
       title="Olive"
       name="test1"
       color="#ffc3a0"
       
     />
     <Input
       handleChange={handleChange}
       value="tanned"
       title="Tanned"
       name="test1"
       color="#e5af90"
       
     />
      <Input
       handleChange={handleChange}
       value="dark"
       title="Dark"
       name="test1"
       color="#cc9c80"
       
     />
     
     
     
    </div>
  );
};
export default Skintone;
