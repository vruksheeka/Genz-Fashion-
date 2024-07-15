import Input from '../../components/Input';
import './Colors.css';
 function Colors({handleChange}) {
  return (
    <div>
      <h2 className='sidebar-title color-title'>Styles</h2>
      <label className='sidebar-label-container'>
      <input onChange={handleChange}type='radio'value=''name='test2'/>
      <span className='checkmark '></span>All

     </label>
     <Input
       handleChange={handleChange}
       value="y2k"
       title="Y2K"
       name="test1"
      
     />
     <Input
       handleChange={handleChange}
       value="streetwear"
       title="Street Wear"
       name="test1"
       
     />
     <Input
       handleChange={handleChange}
       value="retro"
       title="Retro Style"
       name="test1"
       
     />
     <Input
       handleChange={handleChange}
       value="darkacademia"
       title="Dark Academia"
       name="test1"
       
     />
     <Input
       handleChange={handleChange}
       value="oldmoney"
       title="Old Money"
       name="test1"
       
     />
     
     
     
    </div>
  );
};
export default Colors;
