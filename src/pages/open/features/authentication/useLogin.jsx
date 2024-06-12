import {useMutation, useQueryClient} from '@tanstack/react-query';
import { login  as loginApi} from '../../../../services/apiAuth';
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-hot-toast';

export const useLogin = ()=>{
    const navigate =useNavigate();
    const queryClient = useQueryClient();
const {mutate :login , isLoading} = useMutation({
    mutationFn:({email,password}) => loginApi({ email ,password}),
    onSuccess :(user)=>{
        console.log('useLogin user',user);
        queryClient.setQueryData(['user_24'] ,data.user);
        navigate('/dashboard',{replace:true})
},
onerror : (err)=>{
    console.log('error',err);
    toast.error('provide email or password are incorrect')
}
});
return {login , isLoading}

}
