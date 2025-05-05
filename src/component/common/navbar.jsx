import React from "react";

export default function NavBar() {
  return (
    <>
        <nav className="flex items-center justify-between bg-[#123458] text-slate-100 px-6 py-3 shadow-md">
            <div className="flex gap-10 text-lg font-medium">
                <a href="/" className="text-slate-100 hover:text-blue-300">Home</a>
                <a href="/login" className="text-slate-100 hover:text-blue-300">Login</a>
                <a href="/signup" className="text-slate-100 hover:text-blue-300">Signup</a>
                <a href="/dashboard" className="text-slate-100 hover:text-blue-300">Dashboard</a>
            </div>
        </nav>
    </>
  );
}
