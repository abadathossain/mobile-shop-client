import { FaFilter } from "react-icons/fa"

const FilterBsr = ({ setBrand, setCategory, handleReset }) => {
    return (
        <div className="bg-gray-200 border-r-2 border-black min-h-screen px-8 py-16">
            <h1 className="text-xl mb-3 mt-3 font-bold text-blue-700 text-center">Product Filtering</h1>
            <div className="flex justify-center items-center gap-2">
                <FaFilter />
                <h1 className="mb-2">Filters</h1>

            </div>
            <div>
                <select className="select w-full max-w-xs" onChange={(e) => setBrand(e.target.value)}>
                    <option disabled selected>Brand</option>
                    <option>Homer</option>
                    <option>Marge</option>
                    <option>Bart</option>
                    <option>Lisa</option>
                    <option>Maggie</option>
                </select>
            </div>
            <div>
                <select className="select w-full max-w-xs mt-5 mb-5" onChange={(e) => setCategory(e.target.value)}>
                    <option disabled selected>Category</option>
                    <option>Homer</option>
                    <option>Marge</option>
                    <option>Bart</option>
                    <option>Lisa</option>
                    <option>Maggie</option>
                </select>
            </div>
            <button className="btn btn-primary w-full" onClick={handleReset}>Reset</button>
        </div>
    )
}

export default FilterBsr