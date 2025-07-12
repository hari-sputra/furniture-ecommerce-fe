import React from "react";
import { Link } from "react-router-dom";

interface NavbarItemProps {
  to?: string;
  onClick?: () => void;
  icon: string;
  activeIcon?: string;
  isActive?: boolean;
  altText: string;
}

export const NavbarItem: React.FC<NavbarItemProps> = ({
  to,
  onClick,
  icon,
  activeIcon,
  isActive,
  altText,
}) => {
  const imageSrc = isActive && activeIcon ? activeIcon : icon;

  if (to) {
    return (
      <li className="margin-right">
        <Link className="nav-link" to={to}>
          <img src={imageSrc} alt={altText} />
        </Link>
      </li>
    );
  }

  if (onClick) {
    return (
      <li onClick={onClick} className="nav-link" style={{ cursor: "pointer" }}>
        <img src={imageSrc} alt={altText} />
      </li>
    );
  }

  return null;
};
