import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

function MyDialog() {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)} className="mt-4 max-w-s transition duration-300 ease-in-out hover:scale-110">
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
                  Good question!
                </Dialog.Title>
                <Dialog.Description className="mt-2">
                 Web Wealth is <b>not a typical Discord server.</b>
                </Dialog.Description>

                <p className="mt-4">
                  You will be granted access to <b>detailed documentation</b> on a variety of side hustles and online businesses.
                </p>
                <p className="mt-4">
                  Instead of wasting your time and money attempting to make money online, you will be able to <b>learn from the best.</b>
                </p>

                <p className="mt-4">
                 You are joining a community of like-minded people who are all working towards the same goal: <b>financial freedom.</b>
                </p>

                <p className="mt-4">
                The best part? <b>It&apos;s completely free.</b>
                </p>
                <p className="mt-4 text-red-600">
                <b>Important: Open access is temporary. Free entry will close soon.</b>
              </p>



                <div className="mt-6 space-x-4 items-center">
                <button onClick={() => setIsOpen(false)} className="relative rounded px-5 py-2.5 overflow-hidden group bg-green-500 hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
                <span className="absolute top-0 right-0 w-full h-full transition-transform duration-500 transform skew-y-6 translate-x-full bg-white opacity-10 group-hover:translate-x-0 ease"></span>
                <span className="relative">I&apos;m ready</span>
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
