import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

function MyDialog() {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)} className="mt-4">
        Click here to find out why you should join 👀{" "}
      </button>

      <Transition show={isOpen} as={Fragment}>
        <Dialog
          onClose={() => setIsOpen(false)}
          className="fixed inset-0 overflow-y-auto"
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/30" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="flex items-center justify-center min-h-screen">
              <Dialog.Panel className="mx-auto max-w-md px-6 py-4 bg-white rounded-xl">
                <Dialog.Title className="text-xl font-semibold">
                  Deactivate account
                </Dialog.Title>
                <Dialog.Description className="mt-2">
                  This will permanently deactivate your account
                </Dialog.Description>

                <p className="mt-4">
                  Are you sure you want to deactivate your account? All of your
                  data will be permanently removed. This action cannot be
                  undone.
                </p>

                <div className="mt-6 space-x-4 items-center">
                  <button
                    className="px-4 py-2 text-white bg-red-600 rounded-md"
                    onClick={() => setIsOpen(false)}
                  >
                    Deactivate
                  </button>
                </div>
              </Dialog.Panel>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </div>
  );
}

export default MyDialog;
