import Input from '../../components/Input';
import './Merch.css';
 function Merch({handleChange}) {
  return (
    <div className='mv'>
      <h2 className='sidebar-title merch-title'>Merch</h2>
      <label className='sidebar-label-container'>
      <input onChange={handleChange}type='radio'value=''name='test2'/>
      <span className='checkmark '></span>All

     </label>
     <Input
       handleChange={handleChange}
       value="anime"
       title="Anime"
       name="test1"
      
     />
     <Input
       handleChange={handleChange}
       value="kpop"
       title="Kpop"
       name="test1"
       
     />
     <Input
       handleChange={handleChange}
       value="taylorswift"
       title="Taylor Swift"
       name="test1"
       
     />
     <Input
       handleChange={handleChange}
       value="spiderman"
       title="Spiderman"
       name="test1"
       
     />
     
     
     
     
    </div>
  );
};
export default Merch;
