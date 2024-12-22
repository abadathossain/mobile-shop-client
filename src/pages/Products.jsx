
import { useEffect, useState } from 'react';
import FilterBsr from '../components/products/FilterBsr';
import SortByPrice from '../components/SortByPrice';
import SearchBar from './../components/SearchBar';
import axios from 'axios';
import Loading from './Loading';
import Productcard from '../components/home/Productcard';
const Products = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [search, setSearch] = useState("")
    const [sort, setSort] = useState("asc")
    const [brand, setBrand] = useState("")
    const [category, setCategory] = useState("")
    // console.log(search)
    // console.log(sort)
    console.log(brand, category)
    useEffect(() => {
        setLoading(true)
        const fetch = async () => {
            axios.get(`http://localhost:4000/all-products`).then((res) => {
                // console.log(res.data)
                setProducts(res.data)
                setLoading(false)
            })
        }
        fetch()
    }, [])

    const handleSearch = (e) => {
        e.preventDefault()
        setSearch(e.target.search.value)
        e.target.search.value = ""
    }

    const handleReset = () => {
        setSearch("")
        setBrand("")
        setCategory("")
        setSort("")
        window.location.reload()
    }

    return (
        <div className="container mx-auto pl-10 pr-10">
            <h1 className="text-4xl mb-3 mt-3 font-bold text-blue-700 text-center">All Products</h1>
            {/* search and sort */}
            <div className="flex justify-between">
                <SearchBar handleSearch={handleSearch} />
                <SortByPrice setSort={setSort} />
            </div>
            {/* filtering */}
            <div>
                <div className="grid lg:grid-cols-12 border border-black mt-5">
                    <div className="col-span-2 bg-base-100">
                        <FilterBsr setBrand={setBrand} setCategory={setCategory} handleReset={handleReset} />
                    </div>
                    {/* content */}
                    <div className='col-span-10 min-h-screen '>
                        <h1 className="text-4xl mb-3 mt-3 font-bold text-blue-700 text-center">All Products</h1>
                        <div >
                            {
                                loading ? (<Loading />) : (
                                    <>{products.length === 0 ? <div>
                                        <h1>No found</h1>
                                    </div> :
                                        <div className='grid grid-cols-3 gap-2'>
                                            {products.map((product) => (<Productcard key={product._id} product={product} />))}
                                        </div>}</>
                                )
                            }
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Products