import { SignUpButton } from "@clerk/nextjs";

function Blayout() {
  return (
    <div
      className="relative h-64 w-full bg-cover bg-center mt-20"
      style={{ backgroundImage: `url('/back.jpeg')` }}
    >
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
        <h2 className="text-4xl font-bold mb-4">Boost your links today</h2>
        <SignUpButton mode="modal">
          <button className="px-4 py-2 bg-blue-800 text-white rounded-full hover:bg-blue-900 !important">
            Get started
          </button>
        </SignUpButton>
      </div>
    </div>
  );
}

export default Blayout;
