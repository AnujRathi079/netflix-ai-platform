export default function ProfilePage() {
  return (
    <main className="bg-black min-h-screen text-white flex items-center justify-center">

      <div className="text-center">

        <img
          src="https://i.pravatar.cc/150"
          alt="profile"
          className="w-32 h-32 rounded-full mx-auto mb-5"
        />

        <h1 className="text-3xl font-bold">
          Anuj
        </h1>

        <p className="text-gray-400 mt-2">
          Premium Netflix User
        </p>

      </div>

    </main>
  );
}