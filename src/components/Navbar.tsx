import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { BellIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

// Define interfaces for better type safety
interface NavigationItem {
  name: string;
  href: string;
}

interface NavbarProps {
  currentNav: string;
  onNavChange: (name: string) => void;
}

const navigation: NavigationItem[] = [
  { name: 'Panel', href: '/dashboard' },
  { name: 'Kalendarz', href: '/kalendarz' },
  { name: 'Klienci', href: '/klienci' },
  { name: 'Blog IT', href: 'https://www.streamsoft.pl/blog-it/' },
  { name: 'Wdrożenia', href: '/wdrozenia' },
  { name: 'Produkty', href: '/produkty' },
];

// Improve type safety for classNames function
const classNames = (...classes: (string | boolean | undefined)[]): string => {
  return classes.filter(Boolean).join(' ');
};

const Navbar: React.FC<NavbarProps> = ({ currentNav, onNavChange }) => {
  // Extract menu items to a separate component for better organization
  const UserMenuItems = () => (
    <MenuItems
      className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 transition focus:outline-hidden"
    >
      {[
        { text: 'Twój profil', href: '/profile' },
        { text: 'Ustawienia', href: '/settings' },
        { text: 'Wyloguj się', href: '/logout' },
      ].map((item) => (
        <MenuItem key={item.text}>
          {({ active }) => (
            <a
              href={item.href}
              className={classNames(
                active ? 'bg-gray-100' : '',
                'block px-4 py-2 text-sm text-gray-700'
              )}
            >
              {item.text}
            </a>
          )}
        </MenuItem>
      ))}
    </MenuItems>
  );

  return (
    <Disclosure as="nav" className="bg-white">
      {({ open }) => (
        <>
          <div className="max-w-9xl w-full px-2 sm:px-6 lg:px-8 h-24">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex flex-1 items-center justify-start pt-10">
                <div className="flex shrink-0 items-center pr-10">
                  <img
                    alt="Streamsoft logo"
                    src="https://www.streamsoft.pl/wp-content/uploads/2019/02/Zas%C3%B3b-1.png"
                    className="h-18 w-auto"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4 pt-3.5">
                    {navigation.map((item) => (
                      <Link
                        to={item.href}
                        key={item.name}
                        onClick={() => onNavChange(item.name)}
                        className={classNames(
                          item.name === currentNav
                            ? 'bg-[#3A5CD3] text-white'
                            : 'text-gray-300 hover:bg-[#3A5CD3] hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* User Menu Section */}
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="relative mt-6 rounded-full bg-gray-100 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
                  aria-label="View notifications"
                >
                  <BellIcon className="size-6" />
                </button>

                <Menu as="div" className="relative ml-3 pt-6">
                  <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
                    <img
                      alt="User avatar"
                      src="https://img.icons8.com/?size=100&id=HmQQr0jYHZxu&format=png&color=000000"
                      className="size-8 rounded-full"
                    />
                  </MenuButton>
                  <UserMenuItems />
                </Menu>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <DisclosurePanel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as={Link}
                  to={item.href}
                  onClick={() => onNavChange(item.name)}
                  className={classNames(
                    item.name === currentNav
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
