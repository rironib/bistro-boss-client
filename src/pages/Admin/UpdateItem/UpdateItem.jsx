import {Helmet} from "react-helmet-async";
import {useLoaderData} from "react-router-dom";
import {useForm} from "react-hook-form";
import {toast} from "react-toastify";
import useAxiosSecure from "../../../hooks/useAxiosSecure.jsx";

const UpdateItem = () => {
    const axiosSecure = useAxiosSecure();
    const {_id, name, category, price, recipe} = useLoaderData();

    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        const menuItem = {
            name: data.name,
            category: data.category,
            price: parseFloat(data.price),
            recipe: data.recipe
        }

        const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
        if (menuRes.data.modifiedCount > 0) {
            toast.success(`${data.name} updated successfully`);
        }
    };

    return (
        <>
            <Helmet>
                <title>Update Item | Bistro Boss</title>
            </Helmet>
            <div className='w-full min-h-screen bg-[#F6F6F6] py-8 px-20'>
                <div className='grid justify-center gap-2 mb-6 text-center font-inter'>
                    <h5 className='text-[#D99904] italic'>{null}</h5>
                    <div className='w-max py-2 px-6 font-bold text-3xl border-y-2'>
                        UPDATE ITEM
                    </div>
                </div>
                <div className='bg-white p-6'>
                    <div className="w-full rounded-xl">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='grid gap-6'>
                                <div>
                                    <label className='grid gap-4'>
                                        <span className='font-semibold'>Recipe Name*</span>
                                        <input type='text' defaultValue={name} {...register("name", {required: true})}
                                               className='p-3 rounded-lg border outline-none'/>
                                    </label>
                                </div>
                                <div className='grid lg:grid-cols-2 gap-6'>
                                    <label className='grid gap-4'>
                                        <span className='font-semibold'>Category*</span>
                                        <select defaultValue={category} {...register("category", {required: true})}
                                                className="select select-bordered">
                                            <option value="default" disabled>Select a category</option>
                                            <option value="salad">Salad</option>
                                            <option value="pizza">Pizza</option>
                                            <option value="soup">Soup</option>
                                            <option value="dessert">Dessert</option>
                                            <option value="drinks">Drinks</option>
                                        </select>
                                    </label>
                                    <label className='grid gap-4'>
                                        <span className='font-semibold'>Price*</span>
                                        <input type='text' defaultValue={price} {...register("price", {required: true})} className='p-3 rounded-lg border outline-none'/>
                                    </label>
                                </div>
                                <div>
                                    <label className='grid gap-4'>
                                        <span className='font-semibold'>Recipe Details*</span>
                                        <textarea defaultValue={recipe} {...register("recipe", {required: true})}
                                                  className='h-36 p-3 rounded-lg border outline-none'/>
                                    </label>
                                </div>
                                <div className='grid justify-center'>
                                    <button type='submit'
                                            className='flex items-center bg-gradient-to-r from-[#835D23] to-[#B58130] font-medium text-white px-6 py-2'>
                                        Update Recipe Details
                                    </button>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UpdateItem;
