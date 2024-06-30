"use client";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import Input from "@/components/Forms/Input";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { CheckBadgeIcon, XMarkIcon } from "@heroicons/react/24/outline";

export default function SubscribeForm({ submitForm }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    const response = await submitForm({
      ...data,
      form_recipient: "chris@superblue.studio",
      form_name: "Subscribe",
      form_origin: "Richards Financial",
    });
    if (response?.error) {
      console.log(response.error);
      reset();
      setShowForm(false);
    } else {
      reset();
      setShowForm(false);
    }
    setLoading(false);
  };

  const form = useMemo(
    () => (
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
        <Input
          placeholder="Name"
          disabled={loading}
          type="text"
          name="name"
          error={errors.name?.message}
          {...register("name", {
            required: "Please enter your name",
          })}
        />

        <Input
          placeholder="Email address"
          disabled={loading}
          type="email"
          name="email_address"
          error={errors.email_address?.message}
          {...register("email_address", {
            required: "Please enter your email address",
          })}
        />

        <button
          className={`mt-4 flex justify-center btn-primary items-center ${
            loading ? "text-gray-400 pointer-events-none" : "text-white"
          }`}
          type="submit"
          disabled={loading}>
          Subscribe
          {loading && (
            <div role="status" className="ml-3 inline-flex">
              <svg
                aria-hidden="true"
                className="inline w-4 h-4 text-gray-400 animate-spin fill-secondary-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          )}
        </button>
      </form>
    ),
    [loading, errors, register, handleSubmit, onSubmit, reset]
  );

  return (
    <>
      <button
        onClick={() => setShowForm(true)}
        type="button"
        className="mt-4 btn-secondary text-sm px-4 py-2 inline-flex items-center">
        Subscribe <CheckBadgeIcon className="w-4 h-4 ml-2" />
      </button>
      <Dialog
        transition
        open={showForm}
        onClose={() => setShowForm(false)}
        className="fixed inset-0 flex w-screen items-center justify-center bg-black/30 p-4 transition duration-300 ease-out data-[closed]:opacity-0">
        <DialogPanel className="w-full md:max-w-lg bg-white shadow-lg p-6 rounded-lg relative">
          <DialogTitle className="font-semibold text-xl">
            <div className="absolute top-4 right-4">
              <XMarkIcon
                onClick={() => setShowForm(false)}
                className="cursor-pointer text-black w-4 h-4"
              />
            </div>
            Subscribe
          </DialogTitle>
          <Description className="mt-4">{form}</Description>
        </DialogPanel>
      </Dialog>
    </>
  );
}
