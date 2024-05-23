import cover from '/assets/home/chef-service.jpg'

const Banner = () => {
    return (
        <section className='mb-20'>
            <div style={{backgroundImage: `url(${cover})`}} className='p-28 bg-fixed bg-cover bg-no-repeat bg-center'>
                <div className='p-24 bg-white space-y-4 text-center'>
                    <h2 className='font-cinzel text-3xl'>Bistro Boss</h2>
                    <p className='px-12'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Banner;
