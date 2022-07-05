export const navItems = [
  {
    style: ({ isActive }) => ({ color: isActive ? "green" : "blue" }),
    to: "/",
    title: "Page Uno",
  },
  {
    style: ({ isActive }) => ({ color: isActive ? "green" : "blue" }),
    to: "/page-dos",
    title: "Page Dos",
  },
  {
    style:({ isActive }) => ({ color: isActive ? "green" : "blue" }),
    to:'/page-tres',
    title:'Page Tres' 
  },
  {
    style:({ isActive }) => ({ color: isActive ? "green" : "blue" }),
    to:'/carrito',
    title:'Carrito' 
  },
];
