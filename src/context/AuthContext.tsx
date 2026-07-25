"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { User } from "@/types/user";
import { toast } from "sonner";

interface AuthContextType {
    currentUser: Omit<User, "password"> | null;
    register: (name: string, email: string, password: string) => boolean;
    login: (email: string, password: string) => boolean;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const USERS_KEY = "registered-users";
const SESSION_KEY = "current-user";

export function AuthProvider({ children }: { children: ReactNode }) {
const [currentUser, setCurrentUser] = useState<Omit<User, "password"> | null>(null);

useEffect(() => {
    const saved = localStorage.getItem(SESSION_KEY);
    if (saved) setCurrentUser(JSON.parse(saved));
}, []);

const getUsers = (): User[] => {
const saved = localStorage.getItem(USERS_KEY);
return saved ? JSON.parse(saved) : [];
};

const register = (name: string, email: string, password: string): boolean => {
const users = getUsers();
const exists = users.some((u) => u.email === email);

    if (exists) {
        toast.error("Ya existe una cuenta con ese correo");
        return false;
    }

    const newUser: User = { name, email, password };
    const updatedUsers = [...users, newUser];
    localStorage.setItem(USERS_KEY, JSON.stringify(updatedUsers));

    const session = { name, email };
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    setCurrentUser(session);

    toast.success(`Bienvenido, ${name}`);
    return true;
};

const login = (email: string, password: string): boolean => {
    const users = getUsers();
    const user = users.find((u) => u.email === email && u.password === password);

    if (!user) {
        toast.error("Correo o contraseña incorrectos");
        return false;
    }

    const session = { name: user.name, email: user.email };
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    setCurrentUser(session);

    toast.success(`Bienvenido de nuevo, ${user.name}`);
    return true;
};

const logout = () => {
    localStorage.removeItem(SESSION_KEY);
    setCurrentUser(null);
    toast.info("Sesión cerrada");
};

return (
    <AuthContext.Provider value={{ currentUser, register, login, logout }}>
    {children}
    </AuthContext.Provider>
);
}

export function useAuth() {
const context = useContext(AuthContext);
if (!context) throw new Error("useAuth debe usarse dentro de un AuthProvider");
return context;
}