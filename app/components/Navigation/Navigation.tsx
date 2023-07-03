"use client";

import Link from "next/link";
import styles from "./Navigation.module.css";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Новий чат", href: "/" },
  { label: "Чат кімнати", href: "/" },
  { label: "Підтримка", href: "/" },
];

type NavLink = {
  label: string;
  href: string;
};

type Props = {
  navLinks: NavLink[];
};

function Navigation() {
  const pathname = usePathname();
  return (
    <div className={styles.navWrapper}>
      {navItems.map((link) => {
        const isActive = pathname === link.href;
        return (
            <Link
              href={link.href}
              key={link.href}
              className={isActive ? styles.active : ""}
            >
              {link.label}
            </Link>
        );
      })}
    </div>
  );
}

export default Navigation;
