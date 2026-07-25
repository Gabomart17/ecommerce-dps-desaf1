"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

export default function LoginPage() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const { login } = useAuth();
const router = useRouter();

const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const success = login(email, password);
    if (success) router.push("/");
};

return (
    <main className="min-h-screen bg-[#0a0e17] flex items-center justify-center px-4">
    <form
        onSubmit={handleSubmit}
        className="bg-[#131822] border border-gray-800 rounded-lg p-6 w-full max-w-sm"
    >
        <h1 className="text-xl font-bold text-white mb-1">Iniciar sesión</h1>
        <p className="text-gray-400 text-sm mb-5">Entrá a tu cuenta de GamingStore</p>

        <label className="text-sm text-gray-300 block mb-1">Correo</label>
        <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-[#1e2532] text-white rounded-md px-3 py-2 mb-4 border border-gray-700 focus:border-cyan-400 outline-none"
        />

        <label className="text-sm text-gray-300 block mb-1">Contraseña</label>
        <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-[#1e2532] text-white rounded-md px-3 py-2 mb-5 border border-gray-700 focus:border-cyan-400 outline-none"
        />

        <button
            type="submit"
            className="w-full bg-cyan-400 text-black font-medium py-2.5 rounded-md hover:bg-cyan-300 transition-all"
        >
        Entrar
        </button>

        <p className="text-gray-400 text-sm text-center mt-4">
        ¿No tenés cuenta?{" "}
        <Link href="/register" className="text-cyan-400 hover:underline">
            Registrate
        </Link>
        </p>
    </form>
    </main>
);
}