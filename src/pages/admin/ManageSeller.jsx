import { useState, useEffect } from "react";

const ManageUsers = () => {
    const [sellers, setSellers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch sellers from the server
    useEffect(() => {
        fetch("https://mobile-shop-server-orpin-one.vercel.app/user/users")
            .then((response) => response.json())
            .then((data) => setSellers(data))
            .catch(() => setError("Failed to load sellers. Please try again."))
            .finally(() => setLoading(false));
    }, []);

    // Update seller status (Approve/Reject)
    const updateStatus = (id, currentStatus, action) => {
        let newStatus;
        if (action === "approve") {
            newStatus = currentStatus === "pending" ? "approved" : "pending";
        } else if (action === "reject") {
            newStatus = currentStatus === "pending" ? "rejected" : "pending";
        }

        // Update status in backend (no error handling needed here in the API side)
        fetch(`https://mobile-shop-server-orpin-one.vercel.app/user/users/${id}/${newStatus}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
        });

        // Update status in local state
        setSellers(
            sellers.map((seller) =>
                seller._id === id ? { ...seller, status: newStatus } : seller
            )
        );
    };

    if (loading) return <p>Loading sellers...</p>;
    if (error) return <p className="text-red-600">{error}</p>;

    return (
        <div className="px-8 py-6">
            <h1 className="text-2xl font-bold mb-4">Manage Sellers</h1>
            <table className="w-full border-collapse border border-gray-400">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border px-4 py-2">ID</th>
                        <th className="border px-4 py-2">Name</th>
                        <th className="border px-4 py-2">Email</th>
                        <th className="border px-4 py-2">Status</th>
                        <th className="border px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {sellers.map((seller) => (
                        <tr key={seller._id} className="text-center">
                            <td className="border px-4 py-2">{seller._id}</td>
                            <td className="border px-4 py-2">{seller.name}</td>
                            <td className="border px-4 py-2">{seller.email}</td>
                            <td className="border px-4 py-2">{seller.status}</td>
                            <td className="border px-4 py-2 flex gap-2 justify-center">
                                <button
                                    className={`px-3 py-1 rounded ${seller.status === "approved" ? "bg-gray-500" : "bg-green-500"} text-white`}
                                    onClick={() => updateStatus(seller._id, seller.status, "approve")}
                                >
                                    {seller.status === "approved" ? "Unapprove" : "Approve"}
                                </button>
                                <button
                                    className={`px-3 py-1 rounded ${seller.status === "rejected" ? "bg-gray-500" : "bg-red-500"} text-white`}
                                    onClick={() => updateStatus(seller._id, seller.status, "reject")}
                                >
                                    {seller.status === "rejected" ? "Unreject" : "Reject"}
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ManageUsers;
