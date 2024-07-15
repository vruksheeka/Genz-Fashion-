import Input from '../../components/Input';
import'./Category.css';
function Category({handleChange}) {
  return (
    <div>
      <h2 className='sidebar-title'>Body Type</h2>
    <div>
     <label className='sidebar-label-container'>
      <input onChange={handleChange}type='radio'value=''name='test'/>
      <span className='checkmark'></span>All

     </label>
     <Input
     handleChange={handleChange}
     value="pearl"
     title="Pearl"
     name="test"
     />
     <Input
     handleChange={handleChange}
     value="oval"
     title="Oval"
     name="test"
     />
     <Input
     handleChange={handleChange}
     value="inverted traingle"
     title="Inverted Traingle"
     name="test"
     />
     <Input
     handleChange={handleChange}
     value="rectangle"
     title="Rectangle"
     name="test"
     />
     <Input
     handleChange={handleChange}
     value="hourglass"
     title="Hourglass"
     name="test"
     />
     

     </div>
    </div>
  );
}
export default Category;