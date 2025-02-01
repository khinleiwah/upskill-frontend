import React, { useEffect } from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import FeatureProducts from '../components/products/FeatureProducts';
import { useDispatch, useSelector } from 'react-redux';
import { get_category, get_products } from '../store/reducers/homeReducer';



const Home = () => {
   
    const dispatch = useDispatch()
    const { products, categorys} = useSelector(state => state.home)
    useEffect(() => {
        dispatch(get_category())
        dispatch(get_products())
        
    },[])

    return (
        <div className='w-full'>
            <Header categorys={categorys}/>
            <Banner />
            
            <div className='py-[45px]'>
                <FeatureProducts products={products} />
            </div>
        </div>
    );
};

export default Home;