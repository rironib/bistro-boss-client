import {RiDeleteBinFill, RiRestaurantFill, RiTeamFill} from "react-icons/ri";
import {Helmet} from "react-helmet-async";
import {useForm} from "react-hook-form";

const AddItems = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data)
    };

    return (
        <>
            <Helmet>
                <title>Add Items | Bistro Boss</title>
            </Helmet>
            <div className='w-full min-h-screen bg-[#F6F6F6] py-8 px-20'>
                <div className='grid justify-center gap-2 mb-6 text-center font-inter'>
                    <h5 className='text-[#D99904] italic'>{`---What's new?---`}</h5>
                    <div className='w-max py-2 px-6 font-bold text-3xl border-y-2'>
                        ADD AN ITEM
                    </div>
                </div>
                <div className='bg-white p-6'>
                    <div className="w-full rounded-xl">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='grid gap-6'>
                                <div>
                                    <label className='grid gap-4'>
                                        <span className='font-semibold'>Recipe Name*</span>
                                        <input type='text' placeholder='Recipe Name' {...register("name", {required: true})}
                                               className='p-3 rounded-lg border outline-none'/>
                                    </label>
                                </div>
                                <div className='grid lg:grid-cols-2 gap-6'>
                                    <label className='grid gap-4'>
                                        <span className='font-semibold'>Category*</span>
                                        <select {...register("category", {required: true})}
                                                className="select select-bordered">
                                            <option disabled selected>Select a category</option>
                                            <option value="salad">Salad</option>
                                            <option value="pizza">Pizza</option>
                                            <option value="soup">Soup</option>
                                            <option value="dessert">Dessert</option>
                                            <option value="drinks">Drinks</option>
                                        </select>
                                        {/*<input placeholder='Category' {...register("category", {required: true})}*/}
                                        {/*       className='p-3 rounded-lg border outline-none'/>*/}
                                    </label>
                                    <label className='grid gap-4'>
                                    <span className='font-semibold'>Price*</span>
                                        <input type='number' placeholder='Price' {...register("price", {required: true})}
                                               className='p-3 rounded-lg border outline-none'/>
                                    </label>
                                </div>
                                <div>
                                    <label className='grid gap-4'>
                                        <span className='font-semibold'>Recipe Details*</span>
                                        <textarea placeholder='Recipe Details' {...register("details", {required: true})}
                                               className='h-36 p-3 rounded-lg border outline-none'/>
                                    </label>
                                </div>
                                {/*<div>*/}
                                {/*    <input type="file" {...register("upload", {required: true})} className="file-input file-input-bordered w-full outline-none"/>*/}
                                {/*</div>*/}
                                <div>
                                    <button type='submit' className='flex items-center bg-gradient-to-r from-[#835D23] to-[#B58130] text-white px-6 py-2'>
                                        Add Item <RiRestaurantFill/>
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

export default AddItems;
