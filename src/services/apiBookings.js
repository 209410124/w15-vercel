
import supabase, { supabaseUrl } from './supabase';
export const getBooking =  async (id) => {
    const{data,error}= await supabase
    .from('bookings_24')
    .select('*,cabins_24(*),guests_24(*)')
    .eq('id',id);

    if(error){
        console.log(error);
        throw new Error ('Cabins could not be loaded');
    }
    return data;
};
