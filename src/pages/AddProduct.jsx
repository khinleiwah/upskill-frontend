import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMdImages } from "react-icons/io";
import { IoMdCloseCircle } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header';
import { add_product } from '../store/reducers/homeReducer';

const AddProduct = () => {

    const { products, categorys } = useSelector(state => state.home)
    const dispatch = useDispatch();


    const [cateShow, setCateShow] = useState(false)
    const [category, setCategory] = useState('')
    const [categoryId, setCategoryId] = useState('')
    const [allCategory, setAllCategory] = useState(categorys)
    const [searchValue, setSearchValue] = useState('')

    const [state, setState] = useState({
        name: "",
        description: '',
        discount: '',
        price: "",
        brand: "",
        stock: "",
        categoryId: "1"

    })
    const submit = (e) => {
        e.preventDefault()

        // setState({
        //     ...state,
        //     "categoryId": categoryId
        // })
        dispatch(add_product(state))
        console.log(state)
    }

    const showList = (e) => {
        e.preventDefault()
        setCateShow(!cateShow)
        // setState({
        //     ...state,
        //     "categoryId": e.target.id
        // })
        console.log("seleted id " + e.target.id)
    }
    const inputHandle = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
        console.log("event index from category" + e.target.id)

    }
    const categorySearch = (e) => {
        const value = e.target.value
        setCategoryId(e.target.id)
        console.log("set categoryId" + e.target.id)
        // setState({
        //     ...state,
        //     "categoryId": e.target.id
        // })
        setSearchValue(value)
        if (value) {
            let srcValue = allCategory.filter(c => c.name.toLowerCase().indexOf(value.toLowerCase()) > -1)
            setAllCategory(srcValue)
        } else {
            setAllCategory(categorys)
        }

    }

    // const [images, setImages] = useState([])
    // const [imageShow, setImageShow] = useState([])

    // const imageHandle = (e) => {
    //     const files = e.target.files
    //     const length = files.length;
    //     if (length > 0) {
    //         setImages([...images, ...files])
    //         let imageUrl = []
    //         for (let i = 0; i < length; i++) {
    //             imageUrl.push({ url: URL.createObjectURL(files[i]) })
    //         }
    //         setImageShow([...imageShow, ...imageUrl])
    //     }
    // }
    // // console.log(images)
    // // console.log(imageShow)

    // const changeImage = (img, index) => {
    //     if (img) {
    //         let tempUrl = imageShow
    //         let tempImages = images

    //         tempImages[index] = img
    //         tempUrl[index] = { url: URL.createObjectURL(img) }
    //         setImageShow([...tempUrl])
    //         setImages([...tempImages])

    //     }
    // }

    // const removeImage = (i) => {
    //     const filterImage = images.filter((img, index) => index !== i)
    //     const filterImageUrl = imageShow.filter((img, index) => index !== i)

    //     setImages(filterImage)
    //     setImageShow(filterImageUrl)
    // }

    return (
        <div>
            <Header />
            <div className='bg-slate-200 mt-4'>
                <div className='w-full justify-center items-center p-10'>
                    <div className='grid grid-cols-1 w-[70%] mx-auto bg-white rounded-md'>
                        <div className='px-8 py-8'>
                            <div className='px-2 lg:px-7 pt-5'>
                                <div className='w-full p-4 bg-[#6a5fdf] rounded-md'>

                                    <div>
                                        <form>
                                            <div className='flex flex-col mb-3 md:flex-row gap-4 w-full text-[#d0d2d6]'>
                                                <div className='flex flex-col w-full gap-1'>
                                                    <label htmlFor="name">Product Name</label>
                                                    <input className='px-4 py-2 focus:border-indigo-500 outline-none bg-[#6a5fdf] border border-slate-700 rounded-md text-[#d0d2d6]' onChange={inputHandle} value={state.name} type="text" name='name' id='name' placeholder='Product Name' />
                                                </div>

                                                <div className='flex flex-col w-full gap-1'>
                                                    <label htmlFor="brand">Product Brand</label>
                                                    <input className='px-4 py-2 focus:border-indigo-500 outline-none bg-[#6a5fdf] border border-slate-700 rounded-md text-[#d0d2d6]' onChange={inputHandle} value={state.brand} type="text" name='brand' id='brand' placeholder='Brand Name' />
                                                </div>

                                            </div>


                                            <div className='flex flex-col mb-3 md:flex-row gap-4 w-full text-[#d0d2d6]'>
                                                <div className='flex flex-col w-full gap-1 relative'>
                                                    <label htmlFor="category">Category</label>
                                                    <input id={categoryId} readOnly onChange={showList} onClick={showList} className='px-4 py-2 focus:border-indigo-500 outline-none bg-[#6a5fdf] border border-slate-700 rounded-md text-[#d0d2d6]' value={category} type="text" placeholder='--select category--' />

                                                    <div className={`absolute top-[101%] bg-[#475569] w-full transition-all ${cateShow ? 'scale-100' : 'scale-0'} `}>
                                                        <div className='w-full px-4 py-2 fixed'>
                                                            <input id={categoryId} value={searchValue} onChange={categorySearch} className='px-3 py-1 w-full focus:border-indigo-500 outline-none bg-transparent border border-slate-700 rounded-md text-[#d0d2d6] overflow-hidden' type="text" placeholder='search' />
                                                        </div>
                                                        <div className='pt-14'></div>
                                                        <div className='flex justify-start items-start flex-col h-[290px] overflow-x-scrool'>
                                                            {
                                                                allCategory.map((c, i) => <span className={`px-4 py-2 hover:bg-indigo-500 hover:text-white hover:shadow-lg w-full cursor-pointer ${category === c.name && 'bg-indigo-500'}`} onClick={() => {
                                                                    setCateShow(false)
                                                                    setCategory(c.name)

                                                                    setCategoryId(c.id)

                                                                    console.log("categoryId " + c.id)

                                                                    var relatedImage = "";
                                                                    switch (c.id) {
                                                                        case 1:
                                                                            relatedImage = "https://img.freepik.com/free-vector/realistic-smartphone-official-colors_52683-51019.jpg?t=st=1737967158~exp=1737970758~hmac=b24b2dacb351d127178c8aecc17ffaaea690886fb4f3358326dff6eac0f9f504&w=2000"; // Assign a value for case 1
                                                                            break; // Prevent fall-through to the default case
                                                                        case 2:
                                                                            relatedImage = "https://img.freepik.com/free-vector/video-conference-remote-working-flat-illustration-screen-laptop-with-group-colleagues-people-conn_88138-548.jpg?t=st=1737967256~exp=1737970856~hmac=3b3fb378c83917004fc6294da82c32675c94ae8b5863a66f77cc001093ba0e75&w=2000";
                                                                            break;
                                                                        case 3:
                                                                            relatedImage = "https://img.freepik.com/free-vector/world-television-day-logo-design_1308-117929.jpg?uid=R183494233&ga=GA1.1.1882618211.1737177537&semt=ais_hybrid";
                                                                            break;
                                                                        case 4:
                                                                            relatedImage = "https://img.freepik.com/free-vector/realistic-household-kitchen-appliances-set_1284-26013.jpg?t=st=1737967335~exp=1737970935~hmac=ae4e05b25f18b71ccd61607c8636ee13fd468d24d078863a10702d8321a62873&w=1060";
                                                                            break;
                                                                        case 5:
                                                                            relatedImage = "https://img.freepik.com/free-psd/mid-century-modern-wooden-sideboard-with-gray-vase-dried-flowers-bowl-cups-top-stylish-home-decor_632498-27626.jpg?uid=R183494233&ga=GA1.1.1882618211.1737177537&semt=ais_hybrid";
                                                                            break;
                                                                        case 6:
                                                                            relatedImage = "https://img.freepik.com/free-vector/glitzy-fashion-shop-stickers_23-2149404803.jpg?t=st=1737967426~exp=1737971026~hmac=b374c5678d585550414b3d94352da616f3380bae0b57c038d0314556efbda6be&w=1380";
                                                                            break;
                                                                        case 7:
                                                                            relatedImage = "https://img.freepik.com/free-photo/two-women-bloggers-show-how-make-natural-face-mask-apply-cucumber-slices-face-record-vlog-video-smartphone-wear-white-soft-bathrobes-towels-head-isolated-pink-wall_273609-52204.jpg?t=st=1737967485~exp=1737971085~hmac=42770d62b7a99707b51fa11c2d6d9a996af9f0bc5a86de8d4016976b24420029&w=2000";
                                                                            break;

                                                                        default:
                                                                            relatedImage = "https://img.freepik.com/free-photo/two-women-bloggers-show-how-make-natural-face-mask-apply-cucumber-slices-face-record-vlog-video-smartphone-wear-white-soft-bathrobes-towels-head-isolated-pink-wall_273609-52204.jpg?t=st=1737967485~exp=1737971085~hmac=42770d62b7a99707b51fa11c2d6d9a996af9f0bc5a86de8d4016976b24420029&w=2000"; // Assign a default value
                                                                    }

                                                                    setState({
                                                                        ...state,
                                                                        "categoryId": c.id,
                                                                        "image": relatedImage
                                                                    })

                                                                    setSearchValue('')
                                                                    setAllCategory(categorys)
                                                                }}>{c.name} </span>)
                                                            }
                                                        </div>

                                                    </div>
                                                </div>

                                                <div className='flex flex-col w-full gap-1'>
                                                    <label htmlFor="stock">Product Stock</label>
                                                    <input className='px-4 py-2 focus:border-indigo-500 outline-none bg-[#6a5fdf] border border-slate-700 rounded-md text-[#d0d2d6]' onChange={inputHandle} value={state.stock} type="text" name='stock' id='stock' placeholder='Stock' />
                                                </div>

                                            </div>


                                            <div className='flex flex-col mb-3 md:flex-row gap-4 w-full text-[#d0d2d6]'>
                                                <div className='flex flex-col w-full gap-1'>
                                                    <label htmlFor="price">Price</label>
                                                    <input className='px-4 py-2 focus:border-indigo-500 outline-none bg-[#6a5fdf] border border-slate-700 rounded-md text-[#d0d2d6]' onChange={inputHandle} value={state.price} type="number" name='price' id='price' placeholder='price' />
                                                </div>

                                                <div className='flex flex-col w-full gap-1'>
                                                    <label htmlFor="discount">Discount</label>
                                                    <input className='px-4 py-2 focus:border-indigo-500 outline-none bg-[#6a5fdf] border border-slate-700 rounded-md text-[#d0d2d6]' onChange={inputHandle} value={state.discount} type="number" name='discount' id='discount' placeholder='discount by %' />
                                                </div>

                                            </div>

                                            <div className='flex flex-col w-full gap-1 mb-5'>
                                                <label htmlFor="description" className='text-[#d0d2d6]'>Description</label>
                                                <textarea className='px-4 py-2 focus:border-indigo-500 outline-none bg-[#6a5fdf] border border-slate-700 rounded-md text-[#d0d2d6]' onChange={inputHandle} value={state.description} name='description' id='description' placeholder='Description' cols="10" rows="4"></textarea>

                                            </div>

                                            {/* <div className='grid lg:grid-cols-4 grid-cols-1 md:grid-cols-3 sm:grid-cols-2 sm:gap-4 md:gap-4 gap-3 w-full text-[#d0d2d6] mb-4'>
                                                {
                                                    imageShow.map((img, i) => <div className='h-[180px] relative'>
                                                        <label htmlFor={i}>
                                                            <img className='w-full h-full rounded-sm' src={img.url} alt="" />
                                                        </label>
                                                        <input onChange={(e) => changeImage(e.target.files[0], i)} type="file" id={i} className='hidden' />
                                                        <span onClick={() => removeImage(i)} className='p-2 z-10 cursor-pointer bg-slate-700 hover:shadow-lg hover:shadow-slate-400/50 text-white absolute top-1 right-1 rounded-full'><IoMdCloseCircle /></span>
                                                    </div>)
                                                }

                                                <label className='flex justify-center items-center flex-col h-[180px] cursor-pointer border border-dashed hover:border-red-500 w-full text-[#d0d2d6]' htmlFor="image">
                                                    <span><IoMdImages /></span>
                                                    <span>Select Image </span>
                                                </label>
                                                <input className='hidden' onChange={imageHandle} multiple type="file" id='image' />

                                            </div> */}

                                            <div className='flex'>
                                                <button className='bg-red-500  hover:shadow-red-500/40 hover:shadow-md text-white rounded-md px-7 py-2 my-2' onClick={submit}>Add Product</button>

                                            </div>
                                        </form>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;