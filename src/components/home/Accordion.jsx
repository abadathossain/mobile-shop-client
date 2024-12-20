const Accordion = () => {
    return (
        <div>
            <h1 className="text-4xl mb-3 mt-3 font-bold text-blue-700 text-center">Frequently Questions of our Shop</h1>
            <div className="w-3/4 mx-auto flex flex-col gap-2">
                {/* Accordion Item 1 */}
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="mobile-shop-accordion" defaultChecked />
                    <div className="collapse-title text-xl font-medium">Our Products</div>
                    <div className="collapse-content">
                        <p>
                            Explore a wide variety of smartphones, tablets, and accessories from top brands like Apple, Samsung, Xiaomi, and more.
                        </p>
                    </div>
                </div>

                {/* Accordion Item 2 */}
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="mobile-shop-accordion" />
                    <div className="collapse-title text-xl font-medium">Special Discounts</div>
                    <div className="collapse-content">
                        <p>
                            Don't miss out on exclusive deals and offers, including seasonal sales and bundle discounts on mobile gadgets.
                        </p>
                    </div>
                </div>

                {/* Accordion Item 3 */}
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="mobile-shop-accordion" />
                    <div className="collapse-title text-xl font-medium">Warranty & Support</div>
                    <div className="collapse-content">
                        <p>
                            We provide comprehensive warranty and excellent customer support for all our products to ensure your satisfaction.
                        </p>
                    </div>
                </div>

                {/* Accordion Item 4 */}
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="mobile-shop-accordion" />
                    <div className="collapse-title text-xl font-medium">Shop Online</div>
                    <div className="collapse-content">
                        <p>
                            Enjoy a seamless online shopping experience with secure payments, fast delivery, and a user-friendly platform.
                        </p>
                    </div>
                </div>

                {/* Accordion Item 5 */}

            </div>
        </div>
    );
};

export default Accordion;
