import React, { useState } from "react";
import { IoIosClose } from "react-icons/io";

import Image from "../../assets/img/coins.png";

const ReferralForm = ({ showModal, closeModal }) => {
    const [referrerName, setReferrerName] = useState("");
    const [referrerEmail, setReferrerEmail] = useState("");
    const [refereeName, setRefereeName] = useState("");
    const [refereeEmail, setRefereeEmail] = useState("");
    const [formErrors, setFormErrors] = useState({
        referrerName: false,
        referrerEmail: false,
        refereeName: false,
        refereeEmail: false,
    });
    const [successMessage, setSuccessMessage] = useState("");
    const [backendErrors, setBackendErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();

        // Lodaing set
        setIsLoading(true);

        // Reset success message
        setSuccessMessage("");

        // Clear previous backend errors
        setBackendErrors([]);

        // Example validation (add more as needed)
        if (!referrerName || !referrerEmail || !refereeName || !refereeEmail) {
            setFormErrors({
                referrerName: !referrerName,
                referrerEmail: !referrerEmail,
                refereeName: !refereeName,
                refereeEmail: !refereeEmail,
            });
            return;
        }

        try {
            const response = await fetch('https://accredian-backend-task-wkya.onrender.com/api/referrals', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    referrerName,
                    referrerEmail,
                    refereeName,
                    refereeEmail,
                }),
            });

            if (!response.status === 201) {
                const errorData = await response.json();
                if (errorData.errors) {
                    setBackendErrors(errorData.errors);
                } else {
                    throw new Error('Error submitting referral');
                }
            } else {
                const data = await response.json();
                setIsLoading(false);
                setSuccessMessage(data.message || "Form submitted successfully!");
                setReferrerName("");
                setReferrerEmail("");
                setRefereeName("");
                setRefereeEmail("");
                // Optionally close modal here
                // closeModal();
            }
        } catch (error) {
            setIsLoading(false);
            console.error('Error submitting referral:', error);
            setBackendErrors([{ message: 'Internal server error' }]);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case "referrerName":
                setReferrerName(value);
                break;
            case "referrerEmail":
                setReferrerEmail(value);
                break;
            case "refereeName":
                setRefereeName(value);
                break;
            case "refereeEmail":
                setRefereeEmail(value);
                break;
            default:
                break;
        }
        // Clear form error on change
        setFormErrors((prevErrors) => ({
            ...prevErrors,
            [name]: false,
        }));
    };

    const handleAddAnotherReferral = () => {
        setSuccessMessage("");
    };

    const randomEarnings = (Math.random() * 100).toFixed(2);

    return (
        <div className={`fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center ${showModal ? "" : "hidden"}`}>
            <div className="bg-white p-8 max-w-md mx-auto rounded-lg overflow-hidden relative w-[85%] lg:w-[50%]">
                <button
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                    onClick={closeModal}
                >
                    <IoIosClose />
                </button>
                <h2 className="text-2xl font-bold mb-4">Refer a Course</h2>
                {isLoading && !Object.values(formErrors).find((error) => error === true) && (
                    <div className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded mb-4">
                        Loading...
                    </div>
                )}
                {/* {successMessage && (
                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                        {successMessage}
                    </div>
                )} */}
                {backendErrors.length > 0 && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                        {backendErrors.map((error, index) => (
                            <p key={index}>{error.message}</p>
                        ))}
                    </div>
                )}
                {successMessage ? (
                    <div className="text-center">
                        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                            {successMessage}
                        </div>
                        <img src={Image} alt="Success" className="mx-auto mb-4 w-64 h-64" />
                        <div className="font-medium text-lg mb-2">
                            Congratulations! You've earned ${randomEarnings}
                        </div>
                        <div className="text-gray-700">
                            You referred your friend successfully. Now both of you can accomplish great heights together.
                        </div>
                        <button
                            onClick={handleAddAnotherReferral}
                            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-purple-600 mt-4"
                        >
                            Add Another Referral
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        {/* Referrer Name */}
                        <div className="mb-4">
                            <label htmlFor="referrerName" className="block mb-1">Your Name</label>
                            <input
                                type="text"
                                id="referrerName"
                                name="referrerName"
                                value={referrerName}
                                onChange={handleChange}
                                className={`border p-2 w-full ${formErrors.referrerName ? "border-red-500" : ""}`}
                                placeholder="Enter your name"
                            />
                            {formErrors.referrerName && (
                                <p className="text-red-500 text-xs mt-1">Please enter your name</p>
                            )}
                        </div>
                        {/* Referrer Email */}
                        <div className="mb-4">
                            <label htmlFor="referrerEmail" className="block mb-1">Your Email</label>
                            <input
                                type="email"
                                id="referrerEmail"
                                name="referrerEmail"
                                value={referrerEmail}
                                onChange={handleChange}
                                className={`border p-2 w-full ${formErrors.referrerEmail ? "border-red-500" : ""}`}
                                placeholder="Enter your email"
                            />
                            {formErrors.referrerEmail && (
                                <p className="text-red-500 text-xs mt-1">Please enter a valid email</p>
                            )}
                        </div>
                        {/* Referee Name */}
                        <div className="mb-4">
                            <label htmlFor="refereeName" className="block mb-1">Friend's Name</label>
                            <input
                                type="text"
                                id="refereeName"
                                name="refereeName"
                                value={refereeName}
                                onChange={handleChange}
                                className={`border p-2 w-full ${formErrors.refereeName ? "border-red-500" : ""}`}
                                placeholder="Enter friend's name"
                            />
                            {formErrors.refereeName && (
                                <p className="text-red-500 text-xs mt-1">Please enter friend's name</p>
                            )}
                        </div>
                        {/* Referee Email */}
                        <div className="mb-4">
                            <label htmlFor="refereeEmail" className="block mb-1">Friend's Email</label>
                            <input
                                type="email"
                                id="refereeEmail"
                                name="refereeEmail"
                                value={refereeEmail}
                                onChange={handleChange}
                                className={`border p-2 w-full ${formErrors.refereeEmail ? "border-red-500" : ""}`}
                                placeholder="Enter friend's email"
                            />
                            {formErrors.refereeEmail && (
                                <p className="text-red-500 text-xs mt-1">Please enter a valid email</p>
                            )}
                        </div>
                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-purple-600"
                        >
                            Submit
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default ReferralForm;
