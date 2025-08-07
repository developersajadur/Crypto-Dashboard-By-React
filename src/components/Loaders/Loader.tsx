export default function Loader() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div
        className="loader border-t-4 rounded-full border-yellow-500 bg-yellow-300 animate-spin
          aspect-square w-20 h-20 flex justify-center items-center text-yellow-700 text-4xl"
      >
        $
      </div>
    </div>
  );
}
