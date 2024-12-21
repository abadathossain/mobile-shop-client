
const SortByPrice = () => {
    return (
        <div>
            <select className="select select-bordered w-full max-w-xs">
                <option disabled selected>Sorting</option>
                <option value="asc">Low to High</option>
                <option value="dse">High to Low</option>
            </select>
        </div>
    )
}

export default SortByPrice