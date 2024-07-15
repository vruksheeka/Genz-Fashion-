import'./Recommended.css';
import Button from '../components/Buttons';
const Recommended = ({ handleClick }) => {
  return (<>
  <div>
    <h2 className='recommended-title'>Recommended</h2>
    <div className='recommended-flex'>
    <Button onClickHandler={handleClick} value="" title ="All Products"/>
    <Button onClickHandler={handleClick} value="Puma" title ="Puma"/>
    <Button onClickHandler={handleClick} value="Adidas" title ="Adidas"/>
    <Button onClickHandler={handleClick} value="Only" title ="Only"/>
    <Button onClickHandler={handleClick} value="Tokyo Talkies" title ="Tokyo Talkies"/>
    <Button onClickHandler={handleClick} value="Levis" title ="Levis"/>



    
  </div> 
  </div>
  </>
  );
};
export default Recommended;
