export default function Newsletter() {
  return (
    <div className="py-8 border-b border-primary-lighter">
      <div className="w-full flex flex-col md:flex-row justify-between">
        <div className="flex flex-col gap-1 mb-4 md:mb-0">
          <h2 className="text-xl font-medium">Join our newsletter</h2>
          <p className="text-gray-300">
            We&apos;ll send you a nice letter once per week. No spam.
          </p>
        </div>
        <form className="flex flex-col md:flex-row gap-4 md:gap-2 md:w-[460px]">
          <input
            type="email"
            placeholder="Email address*"
            required
            className="px-4 py-3 bg-white text-black w-full"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-secondary hover:bg-secondary/90 text-black font-semibold uppercase text-sm"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}
