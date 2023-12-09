import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Spinner from '../../ui/Spinner';
import { useEditSettings } from './useEditSettings';
import { useSettings } from './useSettings';

function UpdateSettingsForm() {
  const {isLoading,settings:{minBookingLength,maxBookingLength,breakfastPrice,maxGuestsPerNight}={}}=useSettings()
  const {isUpdating,editSettings}=useEditSettings();
  function handleUpdate(e,field){
    const value=e.target.value;
    if(!value) return;
    editSettings({[field]:value})
  } 
  isLoading&&<Spinner/>
  return (
    <form>
      <FormRow label='Minimum nights/booking' >
        <input type='number' id='min-nights' onBlur={e=>handleUpdate(e,"minBookingLength")} disabled={isLoading}  className=" border-gray-300 bg-gray-50 rounded-md py-3 px-6 shadow-md" defaultValue={minBookingLength}  />
      </FormRow>
      <FormRow label='Maximum nights/booking'>
        <input type='number' id='max-nights'onBlur={e=>handleUpdate(e,"maxBookingLength")} disabled={isLoading}  className=" border-gray-300 bg-gray-50 rounded-md py-3 px-6 shadow-md"  defaultValue={maxBookingLength}/>
      </FormRow>
      <FormRow label='Maximum guests/booking'>
        <input type='number' id='max-guests' onBlur={e=>handleUpdate(e,"maxGuestsPerNight")} disabled={isLoading}  className=" border-gray-300 bg-gray-50 rounded-md py-3 px-6 shadow-md" defaultValue={maxGuestsPerNight} />
      </FormRow>
      <FormRow label='Breakfast price'>
        <input type='number' id='breakfast-price'onBlur={e=>handleUpdate(e,"breakfastPrice")} disabled={isLoading}  className=" border-gray-300 bg-gray-50 rounded-md py-3 px-6 shadow-md"defaultValue={breakfastPrice}  />
      </FormRow>
    </form>
  );
}

export default UpdateSettingsForm;
