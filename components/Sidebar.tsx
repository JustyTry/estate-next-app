import { signOut } from 'next-auth/react';
const Sidebar = () => {
  return (
    <div className="w-full bg-sky-300 h-[100vh] flex flex-col justify-between">
      <ul className="flex flex-col text-lg pl-4 white mt-20">
        <li>Посты</li>
        <li>Пользователи</li>
      </ul>
      <button onClick={() => signOut()} className="text-xl rounded-sm bg-red-400 p-4">
        sign out
      </button>
    </div>
  );
};

export default Sidebar;
