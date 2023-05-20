import { useState, useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CategoryCard from './CategoryCard';

const ShopByCategory = () => {
    const [toys, setToys] = useState([]);
    const [categories, setCategories] = useState('bmw');
    useEffect(() => {
        // Fetch data from API
        fetch(`http://localhost:5000/toys/${categories}`)
            .then(res => res.json())
            .then(data => setToys(data))
            .catch(error => console.error(error));
    }, [categories]);

    const handleTabClick = (categoryName) => {
        setCategories(categoryName);
    }

    return (
        <div className='mt-12'>
            <h2 className='text-5xl text-center font-bold my-4 text-blue-800'>Shop By Category</h2>
            <hr className='w-1/4 mx-auto mb-8 bg-cyan-800 h-1'/>
            <Tabs>
                <TabList className='md:w-1/4 mx-auto md:flex mb-12'>
                    <Tab className="mr-2 px-4 py-2 bg-primary text-white rounded-md cursor-pointer" onClick={() => handleTabClick('bmw')}>BMW</Tab>
                    <Tab className="mr-2 px-4 py-2 bg-primary text-white rounded-md cursor-pointer" onClick={() => handleTabClick('lamborghini')}>Lamborghini</Tab>
                    <Tab className="mr-2 px-4 py-2 bg-primary text-white rounded-md cursor-pointer" onClick={() => handleTabClick('mercedes')}>Mercedes</Tab>
                </TabList>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                        {
                            toys.map(toy => <CategoryCard
                                key={toy._id}
                                toy={toy}
                            ></CategoryCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                        {
                            toys.map(toy => <CategoryCard
                                key={toy._id}
                                toy={toy}
                            ></CategoryCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                        {
                            toys.map(toy => <CategoryCard
                                key={toy._id}
                                toy={toy}
                            ></CategoryCard>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ShopByCategory;
