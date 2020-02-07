import React from "react";

export default ({ links }) => {
  return (
    <footer className="flex flex-col justify-center align-center bg-gray-500 p-3 hidden">
      <h3>Customer Care</h3>
      <ul className="flex justify-end align-center">
        {links.map((link, index) => {
          return (
            <li className="mx-3" key={index}>
              <a href={link.url}></a>
              {link.title}
            </li>
          );
        })}
      </ul>
    </footer>
  );
};
