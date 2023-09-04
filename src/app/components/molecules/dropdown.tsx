import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { PiCaretDownBold } from "react-icons/pi";

function classNames(...classes: string[]) {
return classes.filter(Boolean).join(" ");
}

function Dropdown() {
  const dropLists = [
    { status: ["Yes", "No"], name: "On sale" },
    { status: ["In stock", "Out of Stock"], name: "Stock Status" },
    { status: ["Active", "Acknowledged", "Pending"], name: "Product Status" },
  ];
return (
  <>
  {dropLists.map((drop, i) => (
    <Menu key={i} as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center rounded-md bg-white px-3 py-[9px] text-sm text-gray-400 focus:text-gray-700 ring-1 ring-inset ring-gray-400 focus:ring-gray-600 hover:bg-gray-50">
          {drop.name}
          <ChevronDownIcon
            className="-mr-1 h-5 w-5 text-gray-400 "
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute z-10 mt-2 w-56 origin-top-right rounded-md bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {drop.status.map(
              (
                status,
                j
              ) => (
                <Menu.Item key={j}>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active
                          ? "bg-gray-100 text-gray-900"
                          : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      {status}
                    </a>
                  )}
                </Menu.Item>
              )
            )}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  ))}
</>
);
}

export default Dropdown;

//Sad cunt rex juice
