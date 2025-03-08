import {FormEvent, useState} from "react";
import {Link} from "react-router";

function Navbar() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleLoginClick() {
        setIsModalOpen(true); // Open the modal
    }

    // Handle modal form submit
    function handleFormSubmit(e: FormEvent) {
        e.preventDefault();
        // Here, you can handle email and password logic
        console.log("Email:", email);
        console.log("Password:", password);
        setIsModalOpen(false); // Close the modal
    }

    return (
        <>
            <nav className="bg-blue-600 text-white p-4 shadow-md w-full mb-8">
                <div className="container mx-auto flex justify-between items-center">
                    <Link to="/">
                        <div className="flex items-center space-x-3">
                            <img src="/src/images/shelf.svg" alt="Logo" style={{height: "50px", width: "50px"}}/>
                            <span className="text-xl font-semibold text-white">
                            Show and Tell
                        </span>
                        </div>
                    </Link>
                    <button
                        className="bg-white text-blue-600 px-4 py-2 rounded-lg shadow-md hover:bg-blue-100 transition-colors duration-200"
                        onClick={handleLoginClick}
                    >
                        Login
                    </button>
                </div>
            </nav>
            <LoginModal
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                handleFormSubmit={handleFormSubmit}
            />
        </>
    );
}

interface LoginModalProps {
    isModalOpen: boolean;
    setIsModalOpen: (isOpen: boolean) => void;
    email: string;
    setEmail: (email: string) => void;
    password: string;
    setPassword: (password: string) => void;
    handleFormSubmit: (e: FormEvent) => void;
}

function LoginModal(props: LoginModalProps) {
    return (
        <>
            {props.isModalOpen && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                        <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>
                        <form onSubmit={props.handleFormSubmit}>
                            <div className="mb-4">
                                <label htmlFor="email"
                                       className="block text-sm font-semibold text-gray-700">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={props.email}
                                    onChange={(e) => props.setEmail(e.target.value)}
                                    className="w-full p-2 mt-1 border border-gray-300 rounded-lg text-black"
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="password"
                                       className="block text-sm font-semibold text-gray-700">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={props.password}
                                    onChange={(e) => props.setPassword(e.target.value)}
                                    className="w-full p-2 mt-1 border border-gray-300 rounded-lg text-black"
                                    required
                                />
                            </div>
                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                        <button
                            onClick={() => props.setIsModalOpen(false)}
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}

export default Navbar;

