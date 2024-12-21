
import FilterBsr from '../components/products/FilterBsr';
import SortByPrice from '../components/SortByPrice';
import SearchBar from './../components/SearchBar';
const Products = () => {
    return (
        <div className="container mx-auto pl-10 pr-10">
            <h1 className="text-4xl mb-3 mt-3 font-bold text-blue-700 text-center">All Products</h1>
            {/* search and sort */}
            <div className="flex justify-between">
                <SearchBar />
                <SortByPrice />
            </div>
            {/* filtering */}
            <div>
                <div className="grid lg:grid-cols-12 border border-black mt-5">
                    <div className="col-span-2 bg-base-100">
                        <FilterBsr />
                    </div>
                    <div className='col-span-10 min-h-screen '>
                        <h1>product</h1>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Products