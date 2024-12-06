import { SubmitHandler, useForm } from "react-hook-form";

type FprmType = {
    name: string;
    email: string;
    category: string
}

const Review = () => {

    const {register, handleSubmit, formState: {errors} } = useForm<FprmType>();
    console.log(register);
    
    const onSubmit: SubmitHandler<FprmType> = (data) => {
        console.log(data);
        
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>
                Name <input type="text" {...register('name', { 
                    required: {
                        value: true,
                        message: 'Обязательное поле!'
                    },
                    minLength: {
                    value: 3,
                    message: "В поле с именем недостаточно символов!",
                }})}/>
                {errors.name && <p>{errors.name.message}</p>} 
            </label>

            <label>
                Email <input type="email" {...register('email')}/>
            </label>
            <select{...register('category')}>
                <option value="a">Select A</option>
                <option value="b">Select B</option>
            </select>
            <input type="submit" />
        </form>
    );
};

export default Review;